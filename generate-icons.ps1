param(
  [string]$Source = (Join-Path $PSScriptRoot 'logo-white.png')
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
Add-Type @'
using System;
using System.Runtime.InteropServices;
public static class NativeIconMethods {
  [DllImport("user32.dll", CharSet = CharSet.Auto)]
  public static extern bool DestroyIcon(IntPtr handle);
}
'@

if (-not (Test-Path -LiteralPath $Source)) {
  throw "Source logo was not found: $Source"
}

$sourceImage = [System.Drawing.Image]::FromFile($Source)

function New-SquareBitmap {
  param([int]$Size)

  $bitmap = New-Object System.Drawing.Bitmap($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  try {
    $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml('#070707'))
    $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.DrawImage($sourceImage, 0, 0, $Size, $Size)
  }
  finally {
    $graphics.Dispose()
  }
  return $bitmap
}

function Save-PngIcon {
  param(
    [int]$Size,
    [string]$Path
  )

  $bitmap = New-SquareBitmap -Size $Size
  try {
    $bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  }
  finally {
    $bitmap.Dispose()
  }
}

$pngTargets = @(
  @{ Size = 16; Path = 'favicon-16x16.png' },
  @{ Size = 32; Path = 'favicon-32x32.png' },
  @{ Size = 48; Path = 'favicon-48x48.png' },
  @{ Size = 180; Path = 'apple-touch-icon.png' },
  @{ Size = 192; Path = 'favicon-192x192.png' },
  @{ Size = 192; Path = 'icon-192.png' },
  @{ Size = 512; Path = 'icon-512.png' },
  @{ Size = 192; Path = 'android-chrome-192x192.png' },
  @{ Size = 512; Path = 'android-chrome-512x512.png' }
)

foreach ($target in $pngTargets) {
  Save-PngIcon -Size $target.Size -Path (Join-Path $PSScriptRoot $target.Path)
}

$faviconBitmap = New-SquareBitmap -Size 48
$iconHandle = $faviconBitmap.GetHicon()
$favicon = [System.Drawing.Icon]::FromHandle($iconHandle)
$faviconPath = Join-Path $PSScriptRoot 'favicon.ico'
$stream = [System.IO.File]::Open($faviconPath, [System.IO.FileMode]::Create)
try {
  $favicon.Save($stream)
}
finally {
  $stream.Dispose()
  $favicon.Dispose()
  [NativeIconMethods]::DestroyIcon($iconHandle) | Out-Null
  $faviconBitmap.Dispose()
}

$publicDir = Join-Path $PSScriptRoot 'public'
if (Test-Path -LiteralPath $publicDir) {
  foreach ($name in @('favicon.ico', 'favicon-16x16.png', 'favicon-32x32.png', 'favicon-48x48.png', 'favicon-192x192.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'android-chrome-192x192.png', 'android-chrome-512x512.png')) {
    Copy-Item -LiteralPath (Join-Path $PSScriptRoot $name) -Destination (Join-Path $publicDir $name) -Force
  }
}

$sourceImage.Dispose()
Write-Output 'ManMaTIC icon set regenerated from logo-white.png.'
