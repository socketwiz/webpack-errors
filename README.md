# webpack-errors

To reproduce
```
$ git clone https://github.com/socketwiz/webpack-errors.git
$ cd webpack-errors
$ npm install
$ npm run build
```

Expect bundle in the build directory with no errors.  

Actual:

```

> webpack-error@1.0.0 build /Users/rickynelson/dev/webpack-errors
> webpack --config webpack.config.js

Hash: fe07b867fa225dfc5cf9
Version: webpack 3.6.0
Time: 5558ms
        Asset     Size  Chunks                    Chunk Names
    bundle.js  6.91 MB       0  [emitted]  [big]  main
bundle.js.map   7.8 MB       0  [emitted]         main
   [6] (webpack)/buildin/global.js 509 bytes {0} [built]
  [44] (webpack)/buildin/module.js 517 bytes {0} [built]
 [457] ./node_modules/ejs/lib 160 bytes {0} [built]
 [463] ./index.js 1 kB {0} [built]
 [466] ./node_modules/moment/locale ^\.\/.*$ 2.79 kB {0} [optional] [built]
 [933] ./node_modules/express/lib 160 bytes {0} [built]
 [960] ./node_modules/connect/lib/middleware ^\.\/.*$ 1.01 kB {0} [built]
 [963] ./node_modules/formidable/lib 160 bytes {0} [built]
    + 1005 hidden modules

WARNING in ./node_modules/formidable/lib/incoming_form.js
1:43-50 Critical dependency: require function is used in a way in which dependencies cannot be statically extracted

WARNING in ./node_modules/ejs/lib/ejs.js
358:11-18 Critical dependency: require function is used in a way in which dependencies cannot be statically extracted

WARNING in ./node_modules/ejs/lib/ejs.js
359:2-9 Critical dependency: require function is used in a way in which dependencies cannot be statically extracted

WARNING in ./node_modules/express/lib/view.js
81:13-25 Critical dependency: the request of a dependency is an expression

WARNING in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'dust' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 199:31-46
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

WARNING in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'dustjs-helpers' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 202:33-58
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

WARNING in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'jade' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 161:31-46 177:31-46
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

WARNING in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'qejs' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 551:51-66 564:51-66
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

WARNING in ./node_modules/iconv/build/Release/iconv.node
Module parse failed: /Users/rickynelson/dev/webpack-errors/node_modules/iconv/build/Release/iconv.node Unexpected character '�' (1:0)
You may need an appropriate loader to handle this file type.
(Source code omitted for this binary file)
 @ ./node_modules/iconv/lib/iconv.js 26:13-51
 @ ./node_modules/node-gettext/lib/domain.js
 @ ./node_modules/node-gettext/lib/gettext.js
 @ ./node_modules/node-gettext/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

WARNING in ./node_modules/ejs/lib/ejs.js
require.extensions is not supported by webpack. Use a loader instead.
 @ ./node_modules/consolidate/lib/consolidate.js 304:47-61
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

WARNING in ./node_modules/handlebars/lib/index.js
require.extensions is not supported by webpack. Use a loader instead.
 @ ./node_modules/consolidate/lib/consolidate.js 488:61-82
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

WARNING in ./node_modules/handlebars/lib/index.js
require.extensions is not supported by webpack. Use a loader instead.
 @ ./node_modules/consolidate/lib/consolidate.js 488:61-82
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

WARNING in ./node_modules/handlebars/lib/index.js
require.extensions is not supported by webpack. Use a loader instead.
 @ ./node_modules/consolidate/lib/consolidate.js 488:61-82
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

WARNING in ./node_modules/ejs/lib/ejs.js
require.extensions is not supported by webpack. Use a loader instead.
 @ ./node_modules/consolidate/lib/consolidate.js 304:47-61
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/iconv/lib/iconv.js
Module not found: Error: Can't resolve '../build/Debug/iconv.node' in '/Users/rickynelson/dev/webpack-errors/node_modules/iconv/lib'
 @ ./node_modules/iconv/lib/iconv.js 30:13-49
 @ ./node_modules/node-gettext/lib/domain.js
 @ ./node_modules/node-gettext/lib/gettext.js
 @ ./node_modules/node-gettext/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/mime/index.js
Module not found: Error: Can't resolve './types/other' in '/Users/rickynelson/dev/webpack-errors/node_modules/mime'
 @ ./node_modules/mime/index.js 4:55-79
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/mime/index.js
Module not found: Error: Can't resolve './types/standard' in '/Users/rickynelson/dev/webpack-errors/node_modules/mime'
 @ ./node_modules/mime/index.js 4:26-53
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'atpl' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 264:49-64
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect-gzip/lib/staticGzip.js
Module not found: Error: Can't resolve 'child_process' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect-gzip/lib'
 @ ./node_modules/connect-gzip/lib/staticGzip.js 11:11-35
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect-gzip/lib/gzip.js
Module not found: Error: Can't resolve 'child_process' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect-gzip/lib'
 @ ./node_modules/connect-gzip/lib/gzip.js 7:12-36
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/middleware/compiler.js
Module not found: Error: Can't resolve 'coffee-script' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib/middleware'
 @ ./node_modules/connect/lib/middleware/compiler.js 155:51-75
 @ ./node_modules/connect/lib/middleware ^\.\/.*$
 @ ./node_modules/connect/lib/connect.js
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'dot' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 716:47-61
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'dustjs-linkedin' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 204:33-59
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'eco' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 325:47-61
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'ect' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 646:14-28 658:12-26
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect-gzip/lib/staticGzip.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect-gzip/lib'
 @ ./node_modules/connect-gzip/lib/staticGzip.js 7:9-22
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/connect.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib'
 @ ./node_modules/connect/lib/connect.js 15:9-22
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/utils.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib'
 @ ./node_modules/connect/lib/utils.js 15:9-22
 @ ./node_modules/connect/lib/connect.js
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/middleware/favicon.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib/middleware'
 @ ./node_modules/connect/lib/middleware/favicon.js 13:9-22
 @ ./node_modules/connect/lib/middleware ^\.\/.*$
 @ ./node_modules/connect/lib/connect.js
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/middleware/compiler.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib/middleware'
 @ ./node_modules/connect/lib/middleware/compiler.js 13:9-22
 @ ./node_modules/connect/lib/middleware ^\.\/.*$
 @ ./node_modules/connect/lib/connect.js
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/middleware/directory.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib/middleware'
 @ ./node_modules/connect/lib/middleware/directory.js 17:9-22
 @ ./node_modules/connect/lib/middleware ^\.\/.*$
 @ ./node_modules/connect/lib/connect.js
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/middleware/errorHandler.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib/middleware'
 @ ./node_modules/connect/lib/middleware/errorHandler.js 14:9-22
 @ ./node_modules/connect/lib/middleware ^\.\/.*$
 @ ./node_modules/connect/lib/connect.js
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/middleware/staticCache.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib/middleware'
 @ ./node_modules/connect/lib/middleware/staticCache.js 16:9-22
 @ ./node_modules/connect/lib/middleware ^\.\/.*$
 @ ./node_modules/connect/lib/connect.js
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/middleware/static.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib/middleware'
 @ ./node_modules/connect/lib/middleware/static.js 13:9-22
 @ ./node_modules/connect/lib/middleware ^\.\/.*$
 @ ./node_modules/connect/lib/connect.js
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 20:9-22
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/destroy/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/destroy'
 @ ./node_modules/destroy/index.js 14:17-30
 @ ./node_modules/send/index.js
 @ ./node_modules/serve-static/index.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/ejs/lib/ejs.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/ejs/lib'
 @ ./node_modules/ejs/lib/ejs.js 17:9-22
 @ ./node_modules/consolidate/lib/consolidate.js
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/etag/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/etag'
 @ ./node_modules/etag/index.js 22:12-25
 @ ./node_modules/express/lib/utils.js
 @ ./node_modules/express/lib/application.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/express/lib/view.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/express/lib'
 @ ./node_modules/express/lib/view.js 18:9-22
 @ ./node_modules/express/lib/application.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/handlebars/lib/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/handlebars/lib'
 @ ./node_modules/handlebars/lib/index.js 17:11-24
 @ ./node_modules/consolidate/lib/consolidate.js
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/nv/lib/render.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/nv/lib'
 @ ./node_modules/nv/lib/render.js 8:9-22
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/nv/lib/watch.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/nv/lib'
 @ ./node_modules/nv/lib/watch.js 1:9-22
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/nv/lib/nv.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/nv/lib'
 @ ./node_modules/nv/lib/nv.js 3:9-22
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/send/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/send'
 @ ./node_modules/send/index.js 23:9-22
 @ ./node_modules/serve-static/index.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/send/node_modules/mime/mime.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/send/node_modules/mime'
 @ ./node_modules/send/node_modules/mime/mime.js 2:9-22
 @ ./node_modules/send/index.js
 @ ./node_modules/serve-static/index.js
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/sockjs/lib/sockjs.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/sockjs/lib'
 @ ./node_modules/sockjs/lib/sockjs.js 10:7-20
 @ ./node_modules/sockjs/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/sockjs/lib/webjs.js
Module not found: Error: Can't resolve 'fs' in '/Users/rickynelson/dev/webpack-errors/node_modules/sockjs/lib'
 @ ./node_modules/sockjs/lib/webjs.js 9:7-20
 @ ./node_modules/sockjs/lib/sockjs.js
 @ ./node_modules/sockjs/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'haml-coffee' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 428:61-83
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'hamljs' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 386:53-70
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'hogan.js' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 448:51-70
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/nv/index.js
Module not found: Error: Can't resolve 'i18n' in '/Users/rickynelson/dev/webpack-errors/node_modules/nv'
 @ ./node_modules/nv/index.js 17:15-30
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'jazz' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 344:49-64
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'jqtpl' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 366:51-67
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'just' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 622:15-30 634:13-28
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/middleware/compiler.js
Module not found: Error: Can't resolve 'less' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib/middleware'
 @ ./node_modules/connect/lib/middleware/compiler.js 143:45-60
 @ ./node_modules/connect/lib/middleware ^\.\/.*$
 @ ./node_modules/connect/lib/connect.js
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'liquor' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 284:53-70
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'mote' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 674:49-64
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'mustache' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 607:57-76
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/express/lib/request.js
Module not found: Error: Can't resolve 'net' in '/Users/rickynelson/dev/webpack-errors/node_modules/express/lib'
 @ ./node_modules/express/lib/request.js 18:11-25
 @ ./node_modules/express/lib/express.js
 @ ./node_modules/express/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/faye-websocket/lib/faye/websocket/client.js
Module not found: Error: Can't resolve 'net' in '/Users/rickynelson/dev/webpack-errors/node_modules/faye-websocket/lib/faye/websocket'
 @ ./node_modules/faye-websocket/lib/faye/websocket/client.js 2:13-27
 @ ./node_modules/faye-websocket/lib/faye/websocket.js
 @ ./node_modules/sockjs/lib/trans-websocket.js
 @ ./node_modules/sockjs/lib/sockjs.js
 @ ./node_modules/sockjs/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'nunjucks' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 762:57-76
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'ractive' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 736:55-73
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/middleware/compiler.js
Module not found: Error: Can't resolve 'sass' in '/Users/rickynelson/dev/webpack-errors/node_modules/connect/lib/middleware'
 @ ./node_modules/connect/lib/middleware/compiler.js 131:45-60
 @ ./node_modules/connect/lib/middleware ^\.\/.*$
 @ ./node_modules/connect/lib/connect.js
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'swig' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 244:49-64
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'templayed' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 468:59-79
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'then-jade' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 163:31-51 179:31-51
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/faye-websocket/lib/faye/websocket/client.js
Module not found: Error: Can't resolve 'tls' in '/Users/rickynelson/dev/webpack-errors/node_modules/faye-websocket/lib/faye/websocket'
 @ ./node_modules/faye-websocket/lib/faye/websocket/client.js 3:13-27
 @ ./node_modules/faye-websocket/lib/faye/websocket.js
 @ ./node_modules/sockjs/lib/trans-websocket.js
 @ ./node_modules/sockjs/lib/sockjs.js
 @ ./node_modules/sockjs/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'toffee' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 688:53-70 697:53-70
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'underscore' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 514:61-82
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'walrus' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 587:53-70
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/consolidate/lib/consolidate.js
Module not found: Error: Can't resolve 'whiskers' in '/Users/rickynelson/dev/webpack-errors/node_modules/consolidate/lib'
 @ ./node_modules/consolidate/lib/consolidate.js 400:57-76 409:57-76
 @ ./node_modules/consolidate/index.js
 @ ./node_modules/nv/lib/render.js
 @ ./node_modules/nv/index.js
 @ ./index.js

ERROR in ./node_modules/connect/lib/patch.js
Module parse failed: /Users/rickynelson/dev/webpack-errors/node_modules/connect/lib/patch.js 'return' outside of function (23:26)
You may need an appropriate loader to handle this file type.
| var _renderHeaders = res._renderHeaders;
| 
| if (res._hasConnectPatch) return;
| 
| /**
 @ ./node_modules/connect/lib/connect.js 19:0-18
 @ ./node_modules/connect/index.js
 @ ./node_modules/connect-gzip/lib/staticGzip.js
 @ ./node_modules/connect-gzip/index.js
 @ ./node_modules/nv/lib/server.js
 @ ./node_modules/nv/index.js
 @ ./index.js
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! webpack-error@1.0.0 build: `webpack --config webpack.config.js`
npm ERR! Exit status 2
npm ERR! 
npm ERR! Failed at the webpack-error@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/rickynelson/.npm/_logs/2017-09-29T17_20_20_408Z-debug.log
```
