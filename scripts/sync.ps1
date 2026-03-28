$ErrorActionPreference = "Stop"

$SCRIPT_DIR = Split-Path -Parent $PSCommandPath
$VAULT_DIR = Join-Path (Split-Path -Parent (Split-Path -Parent $SCRIPT_DIR)) "vault"
$QUARTZ_CONTENT = Join-Path (Split-Path -Parent $SCRIPT_DIR) "content"

if (-not (Test-Path $VAULT_DIR)) {
    Write-Error "ERROR: Vault directory not found at $VAULT_DIR"
    exit 1
}

Write-Host "Syncing vault -> quartz content..."
Write-Host "  Source: $VAULT_DIR"
Write-Host "  Target: $QUARTZ_CONTENT"

# Pulisci la directory content
if (Test-Path $QUARTZ_CONTENT) {
    Get-ChildItem -Path $QUARTZ_CONTENT -Recurse | Remove-Item -Force -Recurse
}

# Copia i file escludendo le cartelle specificate
$excludeDirs = @(".obsidian", ".git", ".trash", "90_Templates", "private", "copilot")

Get-ChildItem -Path $VAULT_DIR -Recurse | ForEach-Object {
    $shouldExclude = $false
    foreach ($exclude in $excludeDirs) {
        if ($_.FullName -like "*\$exclude\*" -or $_.Name -eq $exclude) {
            $shouldExclude = $true
            break
        }
    }
    
    if (-not $shouldExclude) {
        $relativePath = $_.FullName.Substring($VAULT_DIR.Length + 1)
        $destination = Join-Path $QUARTZ_CONTENT $relativePath
        
        if ($_.PSIsContainer) {
            if (-not (Test-Path $destination)) {
                New-Item -ItemType Directory -Path $destination -Force | Out-Null
            }
        } else {
            $destDir = Split-Path -Parent $destination
            if (-not (Test-Path $destDir)) {
                New-Item -ItemType Directory -Path $destDir -Force | Out-Null
            }
            Copy-Item -Path $_.FullName -Destination $destination -Force
        }
    }
}

Write-Host "Sync complete."
