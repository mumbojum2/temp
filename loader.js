// Fetch the full app HTML and replace this page with it
fetch('app.html')
  .then(response => response.text())
  .then(html => {
    document.open();
    document.write(html);
    document.close();
  })
  .catch(err => {
    document.body.innerHTML = '<p style="color:red">Failed to load app.html – make sure it is in the same folder.</p>';
  });
