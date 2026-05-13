
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
    'index.csr.html': {size: 457, hash: '938a9e8ad34c9a772e50066375d855d20cfe34a7ef37d22a42bb5e3bc9540405', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 970, hash: 'd6e80f053141c605a0f3706a9d5fbf4cbb062b79d242670da9bb666f09de1db0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21609, hash: '3ba99d9606525da397d94614a25d7ae925331e12bd497f73be6898f386741613', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
