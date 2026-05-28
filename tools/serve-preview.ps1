$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root
$node = "C:\Users\Hi\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
try {
  & $node "tools\serve-static.js" *> (Join-Path $root "output\preview-server.log")
} catch {
  $_ | Out-File (Join-Path $root "output\preview-server.err.log") -Encoding UTF8
  throw
}
