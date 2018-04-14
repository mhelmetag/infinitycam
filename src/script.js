(function() {
  const resetTimeout = 10000000000;
  const camWindow = document.querySelector('#camera');

  camWindow.addEventListener('click', function() {
    window.cameraCurrentTime = window.cameraCurrentTimeReset = resetTimeout;
  });
})();
