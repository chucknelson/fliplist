const { environment } = require('@rails/webpacker')
const coffee = require('./loaders/coffee')
const webpack = require('webpack')

environment.loaders.prepend('coffee', coffee)

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
);

module.exports = environment
