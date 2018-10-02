# @3846masa/parcel-plugin-monkey-patch-for-wasm-in-worker

> The monkey patch for fixing [parcel-bundler/parcel#1852]

This plugin includes a monkey patch which allows to use WASM (or Rust) in Web Workers via Parcel.

## Background

Parcel@<=1.10.1 can't bundle wasm-loader in Web Workers, so Parcel disallows to use WASM and Rust in Web Workers.

This bug reported at [parcel-bundler/parcel#1852] and resolved at [parcel-bundler/parcel#2092].

## Install

For npm,

```
npm i -D github:3846masa-tmp/parcel-plugin-monkey-patch-for-wasm-in-worker
```

For yarn,

```
yarn add --dev github:3846masa-tmp/parcel-plugin-monkey-patch-for-wasm-in-worker
```

**If you want to remove this plugin, please remove "@3846masa/parcel-plugin-workers-patch" package.**

## Usage

This package is loaded automatically when running parcel.

## License

MIT (c) 3846masa

[parcel-bundler/parcel#1852]: https://github.com/parcel-bundler/parcel/issues/1852
[parcel-bundler/parcel#2092]: https://github.com/parcel-bundler/parcel/issues/2092
