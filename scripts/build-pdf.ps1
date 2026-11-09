# Builds the resume PDFs (UA / RU / EN) into the pdf/ folder using headless Microsoft Edge.
# Run after any change to the resume:  powershell -ExecutionPolicy Bypass -File scripts\build-pdf.ps1

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root 'pdf'
New-Item -ItemType Directory -Force $outDir | Out-Null

$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw 'Microsoft Edge or Google Chrome not found.' }

$profileDir = Join-Path $env:TEMP 'resume-pdf-profile'
$page = 'file:///' + (Join-Path $root 'index.html').Replace([char]92, [char]47)

$files = @{ uk = 'Pavel-Prohnov-CV-UA.pdf'; ru = 'Pavel-Prohnov-CV-RU.pdf'; en = 'Pavel-Prohnov-CV-EN.pdf' }

foreach ($lang in $files.Keys) {
  $out = Join-Path $outDir $files[$lang]
  if (Test-Path $out) { Remove-Item $out -Confirm:$false }
  $args = @(
    '--headless', '--disable-gpu', '--no-pdf-header-footer',
    "--user-data-dir=$profileDir", '--virtual-time-budget=5000',
    "--print-to-pdf=$out", "$page`?lang=$lang"
  )
  Start-Process -FilePath $edge -ArgumentList $args -Wait -NoNewWindow
  if (-not (Test-Path $out)) { throw "Failed to build $out" }
  Write-Host "Built $out"
}
