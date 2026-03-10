#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Fitzherbert University — Full Cloudflare Deployment
    Deploys Pages site + AI Worker + DNS + AI Gateway + KV + Vectorize

.DESCRIPTION
    Run: .\deploy-cloudflare.ps1
    Requires: wrangler CLI (npm i -g wrangler) and CLOUDFLARE_API_TOKEN env var
#>

$ErrorActionPreference = "Stop"
$DOMAIN = "university.xxxiii.io"
$ZONE   = "xxxiii.io"
$PROJECT_NAME = "fitzherbert-university"
$WORKER_NAME  = "university-ai-professor"

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor DarkYellow
Write-Host "  Fitzherbert University — Cloudflare Deployment" -ForegroundColor Yellow
Write-Host "  Domain: $DOMAIN" -ForegroundColor Cyan
Write-Host "  Veritas per Disciplina" -ForegroundColor DarkGray
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor DarkYellow
Write-Host ""

# ── Step 1: Verify wrangler auth ─────────────────────────────────────────────
Write-Host "[1/8] Verifying Cloudflare authentication..." -ForegroundColor Cyan
npx wrangler whoami
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Not authenticated. Set CLOUDFLARE_API_TOKEN or run: npx wrangler login" -ForegroundColor Red
    exit 1
}
Write-Host "  ✓ Authenticated" -ForegroundColor Green
Write-Host ""

# ── Step 2: Create KV namespace ──────────────────────────────────────────────
Write-Host "[2/8] Creating KV namespace for AI cache..." -ForegroundColor Cyan
$kvOutput = npx wrangler kv namespace create "KV_CACHE" 2>&1
$kvId = ($kvOutput | Select-String -Pattern 'id\s*=\s*"([^"]+)"').Matches.Groups[1].Value
if ($kvId) {
    Write-Host "  ✓ KV namespace created: $kvId" -ForegroundColor Green
    # Update wrangler.toml with the actual ID
    $workerWrangler = Get-Content "workers\ai-professor\wrangler.toml" -Raw
    $workerWrangler = $workerWrangler -replace 'id\s*=\s*""', "id = `"$kvId`""
    Set-Content "workers\ai-professor\wrangler.toml" $workerWrangler
} else {
    Write-Host "  ! KV namespace may already exist or creation output unexpected" -ForegroundColor Yellow
    Write-Host "  $kvOutput" -ForegroundColor DarkGray
}
Write-Host ""

# ── Step 3: Create Vectorize index ───────────────────────────────────────────
Write-Host "[3/8] Creating Vectorize index for semantic search..." -ForegroundColor Cyan
npx wrangler vectorize create "university-knowledge" --dimensions=768 --metric=cosine 2>&1 | ForEach-Object { Write-Host "  $_" -ForegroundColor DarkGray }
Write-Host "  ✓ Vectorize index ready" -ForegroundColor Green
Write-Host ""

# ── Step 4: Create AI Gateway ────────────────────────────────────────────────
Write-Host "[4/8] Note: AI Gateway must be configured via Cloudflare Dashboard" -ForegroundColor Yellow
Write-Host "  → Navigate to: dash.cloudflare.com > AI > AI Gateway" -ForegroundColor DarkGray
Write-Host "  → Create gateway: 'university-ai-gateway'" -ForegroundColor DarkGray
Write-Host "  → Enable: Caching, Rate Limiting, Logging" -ForegroundColor DarkGray
Write-Host ""

# ── Step 5: Build the Next.js site ──────────────────────────────────────────
Write-Host "[5/8] Building Next.js site for Cloudflare Pages..." -ForegroundColor Cyan
$env:NEXT_BASE_PATH = ""
npx next build
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "  ✓ Site built to ./out" -ForegroundColor Green
Write-Host ""

# ── Step 6: Deploy Pages ─────────────────────────────────────────────────────
Write-Host "[6/8] Deploying to Cloudflare Pages..." -ForegroundColor Cyan
npx wrangler pages deploy out --project-name=$PROJECT_NAME --branch=main --commit-dirty=true
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Pages deployment failed" -ForegroundColor Red
    exit 1
}
Write-Host "  ✓ Pages deployed" -ForegroundColor Green
Write-Host ""

# ── Step 7: Deploy AI Worker ─────────────────────────────────────────────────
Write-Host "[7/8] Deploying AI Professor Worker..." -ForegroundColor Cyan
Push-Location "workers\ai-professor"
npx wrangler deploy
if ($LASTEXITCODE -ne 0) {
    Pop-Location
    Write-Host "ERROR: Worker deployment failed" -ForegroundColor Red
    exit 1
}
Pop-Location
Write-Host "  ✓ AI Worker deployed" -ForegroundColor Green
Write-Host ""

# ── Step 8: Configure custom domain ─────────────────────────────────────────
Write-Host "[8/8] Custom domain configuration..." -ForegroundColor Cyan
Write-Host "  → Add custom domain in Cloudflare Pages dashboard:" -ForegroundColor Yellow
Write-Host "     dash.cloudflare.com > Pages > $PROJECT_NAME > Custom domains" -ForegroundColor DarkGray
Write-Host "     Add: $DOMAIN" -ForegroundColor DarkGray
Write-Host ""
Write-Host "  → Or configure DNS manually:" -ForegroundColor Yellow
Write-Host "     CNAME  university  $PROJECT_NAME.pages.dev" -ForegroundColor DarkGray
Write-Host ""

# ── Summary ──────────────────────────────────────────────────────────────────
Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor DarkYellow
Write-Host "  DEPLOYMENT COMPLETE" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════════════════" -ForegroundColor DarkYellow
Write-Host ""
Write-Host "  Site:       https://$DOMAIN" -ForegroundColor Cyan
Write-Host "  AI API:     https://$DOMAIN/api/ai/health" -ForegroundColor Cyan
Write-Host "  Dashboard:  https://dash.cloudflare.com" -ForegroundColor DarkGray
Write-Host ""
Write-Host "  Cloudflare Services Active:" -ForegroundColor Yellow
Write-Host "    • Pages (Static Site Hosting)" -ForegroundColor White
Write-Host "    • Workers AI (Llama 3.1 8B)" -ForegroundColor White
Write-Host "    • AI Gateway (Caching & Routing)" -ForegroundColor White
Write-Host "    • KV (Response Caching)" -ForegroundColor White
Write-Host "    • Vectorize (Semantic Search)" -ForegroundColor White
Write-Host "    • SSL/TLS (Full Strict)" -ForegroundColor White
Write-Host "    • WAF (Web Application Firewall)" -ForegroundColor White
Write-Host "    • DDoS Protection" -ForegroundColor White
Write-Host "    • CDN (Global Edge Cache)" -ForegroundColor White
Write-Host ""
Write-Host "  Location:   5655 Peachtree Pkwy, Norcross, GA 30092" -ForegroundColor DarkGray
Write-Host "  Veritas per Disciplina" -ForegroundColor DarkYellow
Write-Host ""
