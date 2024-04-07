const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
]);

module.exports = {
  output: {
    uniqueName: 'shell',
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        mfe1: "mfe1@http://localhost:3001/remoteEntry.js",
        mfe2: "mfe2@http://localhost:3002/remoteEntry.js",
        mfe3: "mfe3@http://localhost:3003/remoteEntry.js",
      },
      shared: share({
        'assets/img': { singleton: true },
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        'my-shared': {  
          singleton: true,  
          strictVersion: true,
          import: 'my-shared', 
          requiredVersion: '*'
        },  
        'dynamic-core': {  
          singleton: true,  
          strictVersion: true,
          import: 'dynamic-core', 
          requiredVersion: '*' 
        },  
        'dynamic-components': {  
          singleton: true,  
          strictVersion: true,
          import: 'dynamic-components', 
          requiredVersion: '*' 
        },  
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
