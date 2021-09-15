const mix = require('laravel-mix');

const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

var webConfig = {
    plugins: [
        new VuetifyLoaderPlugin(),
        new CaseSensitivePathsWebpackPlugin
    ],
}


mix.webpackConfig(webConfig);

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
