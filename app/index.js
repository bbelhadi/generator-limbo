'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var LimboGenerator = module.exports = function LimboGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(LimboGenerator, yeoman.generators.Base);

LimboGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [];


  this.prompt(prompts, function (props) {
    //this.someOption = props.someOption;
    cb();
  }.bind(this));








};

LimboGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.template('_index.hbs','app/templates/index.hbs');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

LimboGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
