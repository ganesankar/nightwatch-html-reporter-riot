![Image of Nightwatch Owl](https://ganesankar.github.io/nightwatch-html-reporter-riot/nightwatch-riot.jpg)

===

Nightwatch HTML Reporter Riot
==========
A custom html reporter for [Nightwatch.js](http://nightwatchjs.org/), a  browser automation testing framework, build using RiotJs, Siimple CSS Framwork, ansi_up.js and ChartJS, will work as standalone in both offline and online mode integrated with nodejs and handlebarjs


## Install
```bash
cd /path/to/project
npm install handlebars
```
Copy ```html-reporter.js``` and ```html-reporter.hbs``` to your project basedir.

## Usage
```bash
nightwatch test.js --reporter html-reporter.js
```

The html report will be generated under your nightwatch reports folder.
Edit ```html-report.hbs``` to customize the look and feel of the report.

## Resources
- [Nightwatch.js Developer Guide - Custom reporter](http://nightwatchjs.org/guide#custom-reporter)
- [Handlebars Documentation](http://handlebarsjs.com)
- [Siimple CSS Framwork Documentation](https://siimple.xyz/)
- [ansi_up.js Documentation](https://github.com/drudru/ansi_up)
- [Chart.Js Documentation](https://www.chartjs.org/docs/latest/)


## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.


