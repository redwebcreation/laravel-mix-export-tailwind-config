# Export Tailwind Config to JSON
This is [Laravel Mix](https://laravel-mix.com) plugin that generates a JSON file containing your tailwind configuration.

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
