var domReady = function(callback) {
  document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
  motionAI_Init('6736?token=7a564610b4e438ff20212bed6be8e363',true,400,470);
});
