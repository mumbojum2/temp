(function() {
  function loadApp() {
    var loadingEl = document.getElementById('loading');
    if (!loadingEl) {
      setTimeout(loadApp, 50);
      return;
    }
    
    fetch('app.html')
      .then(function(r) { return r.text(); })
      .then(function(html) {
        var newDoc = document.open('text/html', 'replace');
        newDoc.write(html);
        newDoc.close();
      })
      .catch(function() {
        loadingEl.textContent = '❌ Failed to load app.html';
      });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadApp);
  } else {
    loadApp();
  }
})();