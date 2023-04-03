fetch('scan-assets.json')
  .then(data => data.json())
  .then(assets => {
    let globalSource = assets['js/scan-init.js']
    let globalScript = document.createElement('script')
    globalScript.onload = function() {require('globals')}
    globalScript.src = globalSource
    document.body.append(globalScript)
  })
