# Export Tailwind Config to JSON
This [Laravel Mix](https://laravel-mix.com) plugin generates a JSON file containing your tailwind configuration.

> Note: I've stumbled upon literally the same package but as mine added some options and was up to date with right tailwind config filename, I've decided to publish it anyway. You can find the package [here](https://www.npmjs.com/package/laravel-mix-export-tailwind-config)

## Installation
```bash
npm install --save-dev mix-export-tailwind-config
```
or 
```bash
yarn add -D mix-export-tailwind-config
```

## Usage
```js
// webpack.config.js

require('mix-export-tailwind-config');

mix
    .exportTailwindConfig( 
       './tailwind.config.js',
        './storage/tailwind.config.json'
    )
```
