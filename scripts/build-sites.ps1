# Собирает dist/sites/ для Docker-образа web.
$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Dist = Join-Path $Root "dist\sites"
$Domain = if ($env:DOMAIN) { $env:DOMAIN } else { "bervinov-miron.ru" }

Write-Host "==> Build showcase sites (domain: $Domain)"

if (Test-Path $Dist) { Remove-Item -Recurse -Force $Dist }
New-Item -ItemType Directory -Path $Dist -Force | Out-Null

function Inject-Scripts {
    param([string]$Dir)
    Get-ChildItem -Path $Dir -Filter "*.html" | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        if ($content -notmatch "leads-api\.js") {
            $content = $content -replace "</body>", "  <script src=`"js/showcase-config.js`"></script>`n  <script src=`"js/leads-api.js`"></script>`n</body>"
            Set-Content -Path $_.FullName -Value $content -NoNewline
        }
    }
}

function Write-ShowcaseConfig {
    param([string]$TargetDir)
    $jsDir = Join-Path $TargetDir "js"
    New-Item -ItemType Directory -Path $jsDir -Force | Out-Null
    Copy-Item (Join-Path $Root "shared\js\leads-api.js") $jsDir
    $template = Get-Content (Join-Path $Root "shared\js\showcase-config.template.js") -Raw
    ($template -replace '\{\{DOMAIN\}\}', $Domain) | Set-Content (Join-Path $jsDir "showcase-config.js") -NoNewline
}

# --- Portfolio ---
$PortDir = Join-Path $Dist "portfolio"
New-Item -ItemType Directory -Path (Join-Path $PortDir "assets") -Force | Out-Null
Copy-Item (Join-Path $Root "ui_kits\portfolio\*") $PortDir -Recurse -Force
Copy-Item (Join-Path $Root "styles.css") $PortDir
Copy-Item (Join-Path $Root "_ds_bundle.js") $PortDir
Copy-Item (Join-Path $Root "tokens") (Join-Path $PortDir "tokens") -Recurse -Force
Write-ShowcaseConfig $PortDir

$indexPath = Join-Path $PortDir "index.html"
$index = Get-Content $indexPath -Raw
$index = $index -replace 'href="../../styles.css"', 'href="./styles.css"'
$index = $index -replace 'src="../../_ds_bundle.js"', 'src="./_ds_bundle.js"'
Set-Content $indexPath $index -NoNewline
Inject-Scripts $PortDir

# --- Demo projects ---
@("severny-kofe", "vkus-ogon", "denta-lux", "fitzone", "lingua-pro") | ForEach-Object {
    $slug = $_
    $dst = Join-Path $Dist $slug
    Copy-Item (Join-Path $Root "projects\$slug") $dst -Recurse -Force
    Write-ShowcaseConfig $dst
    Inject-Scripts $dst
    Write-Host "    $slug"
}

Write-Host "==> Done: $Dist"
