let fs = require('fs');
let mix = require('laravel-mix');

mix.extend('exportTailwindConfig', function (webpackConfig, configPath = 'tailwind.config.js', exportPath = 'storage/tailwind.config.json') {
    const basePath = './../../'
    let config = require(basePath + configPath)

    fs.writeFile(
        basePath + exportPath,
        JSON.stringify(config, null, 2)
    )

    return webpackConfig
})