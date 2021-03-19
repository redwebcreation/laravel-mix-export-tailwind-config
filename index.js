let fs = require('fs');
let mix = require('laravel-mix');

const resolveConfig = require('tailwindcss/resolveConfig');

mix.extend('exportTailwindConfig', function (webpackConfig, configPath = 'tailwind.config.js', exportPath = 'storage/app/tailwind.config.json') {
    let basePath = __dirname + '/../../';
    let config = require(basePath + configPath);

    fs.writeFileSync(
        basePath + exportPath,
        JSON.stringify(resolveConfig(config), null, 2)
    );
});
