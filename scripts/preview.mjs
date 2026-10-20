import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../out/", import.meta.url)));
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".pdf": "application/pdf", ".png": "image/png", ".json": "application/json", ".woff2": "font/woff2", ".txt": "text/plain" };
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    let path = resolve(root, `.${pathname}`);
    if (path !== root && !path.startsWith(root + sep)) { response.writeHead(403).end(); return; }
    if ((await stat(path)).isDirectory()) path = resolve(path, "index.html");
    const data = await readFile(path);
    response.writeHead(200, { "Content-Type": types[extname(path)] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
    response.end(data);
  } catch { response.writeHead(404, { "Content-Type": "text/plain" }).end("Not found"); }
});
server.listen(Number(process.env.PORT || 3000), "127.0.0.1", () => console.log("Portfolio preview: http://127.0.0.1:" + (process.env.PORT || 3000)));
