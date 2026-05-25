(function() {
  var loadingEl = document.getElementById('loading');
  
  fetch('app.html')
    .then(function(response) { return response.text(); })
    .then(function(html) {
      var newDoc = document.open('text/html', 'replace');
      newDoc.write(html);
      newDoc.close();
    })
    .catch(function(err) {
      if (loadingEl) {
        loadingEl.innerHTML = '<span style="color:#ff4757">Failed to load app.html — check that it\'s in the same folder.</span>';
      }
    });
})();
