(function() {
  const script = document.createElement('script');
  script.src = chrome.extension.getURL('build/script.js');

  (document.head||document.documentElement).appendChild(script);

  script.onload = function() {
    script.remove();
  };
})();
