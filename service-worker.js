const CACHE_NAME = "meu-pwa-cache-v1";
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/estilos/mobile-first.css",
    "/estilos/tablet.css",
    "/estilos/pc.css",
    "/estilos/impressora.css",
    "/javascript/tabuada.js",
    "/icons/logo9_18_182214.png",
    "/icons/logo9_18_182222.png"
];

self.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            return cache.addAll(FILES_TO_CACHE);
        })
    )
})

self.addEventListener("activate", (event)=>{
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
        )
    )
})

self.addEventListener("fetch", (event) =>{
    event.respondWidth(
        caches.match(event.request).then((response) =>{
            return response || fetch(event.request);
        })
    )
})