function parseURL(url) {
  var a = document.createElement('a');
  a.href = url;
  // var a = new URL(url);
  return {
    source: url,
    protocol: a.protocol.replace(':', ''), 
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (function() {
      var params = {},
          seg = a.search.replace(/^\?/, '').split('&'),
          len = seg.length,
          p;
      for (var i = 0; i < len; i++) {
        if (seg[i]) {
           p = seg[i].split('=');
           params[p[0]] = p[1];   
        }
      }
      return params;
   })(),
   hash: a.hash.replace('#', ''),
   path: a.pathname.replace(/^([^\/])/, '/$1')
  };
}