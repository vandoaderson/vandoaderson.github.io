
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/vandoaderson.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/vandoaderson.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 457, hash: '7c343bd7e149bd0fc67fdf29059f30e1b29cea1273dfd838a26c6d7171bb5bef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 970, hash: 'e06fba3076a1fda24c974841c9652d6a579d209e9e446e4ba48177210cfdfff1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21599, hash: '718fc1457b4bdd7eb218234e87cda31c7c008038df36382993f2cbe6b89426fb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
