var fs = require('fs');
var folder = '';
var path = '.';
var extension = 'png';

var files = fs.readdirSync(path);

for (var i = 0; i < files.length; i++) {
var filename = files[i];
var fileExtension = filename.split('.').pop();

var div = document.getElementById('imageDiv');
var element = document.createElement('img');

div.appendChild(element);
element.src = folder.concat(filename);
element.src = filename;
element.style.height = '100px';
element.style.width = '200px';
