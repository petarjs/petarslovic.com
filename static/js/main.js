if ('serviceWorker' in navigator && (typeof Cache !== 'undefined' && Cache.prototype.addAll)) {
  navigator
    .serviceWorker
    .register('/worker.js')
    .then(function(registration) {
      var worker = registration.installing || registration.waiting || registration.active
      worker.postMessage(JSON.stringify({
        POSTS: window.POSTS,
        PROJECTS: window.PROJECTS
      }));
    },
    function(){})

}