
Hello, [SystemJS](https://github.com/systemjs/systemjs)!

Important points:

- SystemJS knows how to load [System.register](https://github.com/ModuleLoader/es-module-loader/blob/master/docs/system-register.md) [modules](https://github.com/systemjs/systemjs/blob/master/docs/system-register.md).  This is a new kind of module.  Babel is used here to make the transformation from ES Modules to System.Register modules.
- Webpack is apparently unusable, even when using the appropriate babel plugin.  That is odd.  Perhaps it's a design choice on webpack's part to reinforce the point that it's not a module loader.

```
WARNING in ./src/skills.js 1:0-15
System.register is not supported by webpack.
 @ multi (webpack)-dev-server/client?http://localhost:8080 ./src/skills.js main[1]
```

- CORS headers are used so that the client requestor can load this script across origins.  This will be loaded using SystemJS.  This code is designed to be loaded by the project [hello-single-spa](https://github.com/jaketrent/hello-single-spa)
