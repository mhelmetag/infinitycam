(function() {
  let camWindow = document.querySelector('#camera');

  camWindow.addEventListener('click', function() {
    window.cameraCurrentTime = window.cameraCurrentTimeReset = 10000000000;
  });
})();
