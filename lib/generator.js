'use strict';

var nunjucks = require('nunjucks');
var env = new nunjucks.Environment();
var pathFn = require('path');
var fs = require('fs');

env.addFilter('uriencode', function(str) {
  return encodeURI(str);
});

var tileTemplatePath = pathFn.join(__dirname, '../tile.xml');
var tileTemplate = nunjucks.compile(fs.readFileSync(tileTemplatePath, 'utf8'), env);

module.exports = function(locals) {
  var config = this.config;
  var tileConfig = config.tile;
  var posts = locals.posts.sort('-date');

  var xml = tileTemplate.render({
    post: posts[0]
  });

  return {
    path: tileConfig.path,
    data: xml
  };
};
