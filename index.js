let fs = require('fs');
let mix = require('laravel-mix');

mix.extend('exportTailwindConfig', function (webpackConfig, configPath = './tailwind.config.js', exportPath = './storage/tailwind.config.json') {
    let config = require(configPath);

    fs.writeFile(
        exportPath,
        JSON.stringify(config, null, 2)
    );
});
