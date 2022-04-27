module.exports = {
    globDirectory: "dist/",
    maximumFileSizeToCacheInBytes: 1073741824,
    skipWaiting: true,
    sourcemap: false,
    mode: "production",
    globIgnores: [
      "service-worker.js",
      "precache-manifest.*",
      "sw.js",
      "manifest.webmanifest",
      "asset-manifest.json"     
    ],
    globPatterns: ["**/*.{png,json,ico,html,js,txt,css,svg,ttf,jpg}"],
    swDest: "dist/sw.js",
    cleanupOutdatedCaches: true,    
  };
  