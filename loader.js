(function() {
  function init() {
    var loadingEl = document.getElementById('loading');
    if (!loadingEl) {
      setTimeout(init, 50);
      return;
    }
    
    fetch('app.html')
      .then(function(r) { return r.text(); })
      .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        
        // Extract head content
        var newHead = doc.querySelector('head');
        var currentHead = document.querySelector('head');
        if (newHead && currentHead) {
          var headChildren = newHead.querySelectorAll('style, link, meta, title');
          headChildren.forEach(function(el) {
            currentHead.appendChild(el.cloneNode(true));
          });
        }
        
        // Extract body content
        var newBody = doc.querySelector('body');
        if (newBody) {
          document.body.innerHTML = newBody.innerHTML;
        }
        
        // Execute scripts
        var scripts = doc.querySelectorAll('script');
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
      .catch(function() {
        if (loadingEl) loadingEl.textContent = '❌ Failed to load app.html';
      });
  }
  
  init();
})();