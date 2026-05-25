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
        // Create a full HTML document by replacing the body's innerHTML
        document.body.innerHTML = '';
        var container = document.createElement('div');
        container.style.cssText = 'width:100%;height:100vh;overflow:hidden;';
        container.innerHTML = html;
        document.body.appendChild(container);
        
        // Execute any scripts from the fetched HTML
        var scripts = container.querySelectorAll('script');
        scripts.forEach(function(oldScript) {
          var newScript = document.createElement('script');
          if (oldScript.src) {
            newScript.src = oldScript.src;
          } else {
            newScript.textContent = oldScript.textContent;
          }
          document.body.appendChild(newScript);
        });
      })
      .catch(function(err) {
        loadingEl.textContent = '❌ Failed: ' + err.message;
      });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadApp);
  } else {
    loadApp();
  }
})();