const chalk = require('chalk');

[require('parcel-bundler/lib/packagers/JSPackager'), require('parcel-bundler/src/packagers/JSPackager')].forEach(
  JSPackager => {
    const addAsset = JSPackager.prototype.addAsset;
    Object.assign(JSPackager.prototype, {
      addAsset(asset) {
        return addAsset.call(this, asset).then(() => {
          for (let [dep, mod] of asset.depAssets) {
            if (!dep.dynamic && !this.bundle.assets.has(mod) && this.bundle.isolated) {
              this.bundleLoaders.add(mod.type);
            }
          }
        });
      },
    });
  },
);

console.warn(`\r${chalk.yellow('WARN')} Applied the patch to JSPackager in order to fix parcel-bundler/parcel#1852`);

module.exports = function noop(_bundler) {};
