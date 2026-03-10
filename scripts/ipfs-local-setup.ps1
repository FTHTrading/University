$ErrorActionPreference = "Stop"

$ipfs = "$env:LOCALAPPDATA\Programs\IPFS Desktop\resources\app.asar.unpacked\node_modules\kubo\kubo\ipfs.exe"
$configPath = "$env:USERPROFILE\.ipfs\config"

if (-not (Test-Path $ipfs)) {
  throw "Kubo executable not found. Install IPFS Desktop first."
}

if (-not (Test-Path $configPath)) {
  throw "IPFS config not found at $configPath"
}

$config = Get-Content $configPath -Raw | ConvertFrom-Json
$config.Addresses.API = "/ip4/127.0.0.1/tcp/5001"
$config.Addresses.Gateway = "/ip4/127.0.0.1/tcp/8080"
$config.API.HTTPHeaders = [ordered]@{
  "Access-Control-Allow-Origin" = @("webui://-", "http://localhost:3000", "http://127.0.0.1:5001", "https://webui.ipfs.io")
  "Access-Control-Allow-Methods" = @("PUT", "POST", "GET")
  "Access-Control-Allow-Credentials" = @("true")
}

$json = $config | ConvertTo-Json -Depth 100
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($configPath, $json, $utf8NoBom)

Write-Host "Starting Kubo daemon..."
Start-Process -FilePath $ipfs -ArgumentList "daemon"
Write-Host "Kubo configured for 127.0.0.1:5001 and started."
