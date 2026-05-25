(function() {
  function init() {
    var loadingEl = document.getElementById('loading');
    if (!loadingEl) {
      setTimeout(init, 50);
      return;
    }
    
    // Build the correct URL by using the SVG's location
    var baseUrl = window.location.href;
    // Remove the filename (launcher.svg) to get the directory
    var dirUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
    var appUrl = dirUrl + 'app.html';
    
    // Show what URL we're trying to fetch (debug)
    loadingEl.textContent = 'Fetching: ' + appUrl;
    
    fetch(appUrl)
      .then(function(r) {
        if (!r.ok) throw new Error('Status: ' + r.status);
        return r.text();
      })
      .then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        
        // Clear body
        document.body.innerHTML = '';
        
        // Copy head elements
        var newHead = doc.querySelector('head');
        var currentHead = document.querySelector('head');
        if (newHead && currentHead) {
          var headChildren = newHead.querySelectorAll('style, link, meta, title');
          headChildren.forEach(function(el) {
            currentHead.appendChild(el.cloneNode(true));
          });
        }
        
        // Copy body elements
        var newBody = doc.querySelector('body');
        if (newBody) {
          while (newBody.firstChild) {
            document.body.appendChild(newBody.firstChild);
          }
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
      .catch(function(err) {
        loadingEl.textContent = '❌ Failed: ' + err.message + ' | URL: ' + appUrl;
      });
  }
  
  init();
})();