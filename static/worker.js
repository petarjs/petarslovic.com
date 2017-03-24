var files_to_cache = [
  '/',
  '/projects',
  '/blog',
  '/css/normalize.css',
  '/css/main.css',
  '/js/main.js',
  '/cv'
];

var CACHE_NAME = 'PS_CACHE';

self.addEventListener('message', function(event){
  var data = JSON.parse(event.data)
  caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log("cache opened");
      postImages = data.POSTS.map(post => post.image)
      projectImages = data.PROJECTS.map(project => project.image)
      return cache.addAll([].concat(postImages, projectImages));
    })
});

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(files_to_cache);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          console.log('Deleting '+ cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request.clone());
      });
    })
  );
});