/* global hexo */
'use strict';

var assign = require('object-assign');
var pathFn = require('path');

var config = hexo.config.tile = assign({
  path: 'tile'
}, hexo.config.tile);

// Add extension name if don't have
if (!pathFn.extname(config.path)) {
  config.path += '.xml';
}

hexo.extend.generator.register('tile', require('./lib/generator'));
