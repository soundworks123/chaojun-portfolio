const http = require("http");
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..", "public");
const outDir = path.resolve(__dirname, "..", "output", "playwright");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp"
};

function serveFile(req, res) {
  const url = new URL(req.url, "http://127.0.0.1");
  const decodedPath = decodeURIComponent(url.pathname);
  const requested = decodedPath === "/" ? "/index.html" : decodedPath;
  const filePath = path.resolve(root, "." + requested);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream"
    });
    res.end(data);
  });
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });

  const server = http.createServer(serveFile);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  const url = `http://127.0.0.1:${port}`;

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1365, height: 900 } });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, "homepage-desktop.png"), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, "homepage-mobile.png"), fullPage: true });

  await browser.close();
  server.close();
  console.log(path.join(outDir, "homepage-desktop.png"));
  console.log(path.join(outDir, "homepage-mobile.png"));
})();
