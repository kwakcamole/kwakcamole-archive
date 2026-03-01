# Simple static file server (PowerShell)
$port = 8080
$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving at http://localhost:$port/"
Write-Host "Press Ctrl+C to stop."
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    $path = $request.Url.LocalPath
    if ($path -eq "/") { $path = "/index.html" }
    $filePath = Join-Path $root ($path.TrimStart("/") -replace "/", [IO.Path]::DirectorySeparatorChar)
    if (Test-Path $filePath -PathType Leaf) {
        $bytes = [IO.File]::ReadAllBytes($filePath)
        $ext = [IO.Path]::GetExtension($filePath).ToLower()
        $contentType = @{
            ".html" = "text/html; charset=utf-8"
            ".css"  = "text/css"
            ".js"   = "application/javascript"
            ".png"  = "image/png"
            ".jpg"  = "image/jpeg"
            ".jpeg" = "image/jpeg"
            ".gif"  = "image/gif"
            ".ico"  = "image/x-icon"
            ".otf"  = "font/otf"
            ".ttf"  = "font/ttf"
            ".svg"  = "image/svg+xml"
        }
        $response.ContentType = $contentType[$ext]
        if (-not $response.ContentType) { $response.ContentType = "application/octet-stream" }
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $msg = [Text.Encoding]::UTF8.GetBytes("Not Found")
        $response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $response.Close()
}
