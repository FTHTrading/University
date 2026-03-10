$dirs = @('src','scripts','public','.github')
$rootFiles = @('README.md','package.json','package-lock.json','next.config.js','next.config.ts','next.config.mjs','tsconfig.json','tsconfig.scripts.json')
$allFiles = @()
foreach($d in $dirs) { if(Test-Path $d) { $allFiles += Get-ChildItem -Path $d -Recurse -File } }
foreach($f in $rootFiles) { if(Test-Path $f) { $allFiles += Get-Item $f } }
$results = $allFiles | ForEach-Object { Select-String -Path $_.FullName -Pattern 'FTHTrading' -CaseSensitive -AllMatches -ErrorAction SilentlyContinue }
$grouped = $results | Group-Object Path
foreach($g in $grouped) {
    $rel = $g.Name.Replace("$PWD\",'')
    $total = ($g.Group | ForEach-Object { $_.Matches.Count } | Measure-Object -Sum).Sum
    Write-Output "FILE: $rel ($total occ)"
    foreach($r in $g.Group) {
        $t = $r.Line.Trim()
        if($t.Length -gt 180) { $t = $t.Substring(0,180) + '...' }
        Write-Output "  L$($r.LineNumber): $t"
    }
}
