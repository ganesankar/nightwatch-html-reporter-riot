const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

module.exports = {
  write: function writeFunc(results, options, done) {
    console.log("Reports Result", results);
    const filePrefix = "application-name-test-report";
    var reportFilename =
      options.filename_prefix + Math.floor(Date.now() / 1000) + ".html";
    var reportFilePath = path.join(
      __dirname,
      options.output_folder,
      reportFilename
    );

    noOfTestSuites = Object.keys(results.modules).length;
    let moduleHash = results.modules;
    function extractResults(done) {
      done();
    }
    extractResults(() => {
      fs.readFile("html-reporter.hbs", (err, data) => {
        if (err) throw err;

        const template = data.toString();
        var reports = {
          results: results,
          options: options,
          timestamp: new Date().toString(),
          browser: options.filename_prefix.split("_").join(" "),
          env: process.argv[5] || "",
          userDetails: process.argv[6] || "",
        };
        const html = handlebars.compile(template)({
          results,
          options,
          timestamp: new Date().toString(),
          browser: options.filename_prefix.split("_").join(" "),
          env: process.argv[5] || "",
          userDetails: process.argv[6] || "",
          reports: JSON.stringify(reports),
          appLogo:
            "https://via.placeholder.com/64x36" /* image as data uri or cloud link  like  https://via.placeholder.com/64x36  or  data:image/png;base64,iVBORw0KGgoAAAAN******************  */,
          isAppLogoImg: true /* only boolean true: false */,
          appName: "APPLICATION NAME" /* only text value*/,
          reportName: "AUTOMATION  REPORTS" /* only text value*/,
          pageTitle: "AN" /* only text value*/,
          isOfflineMode: false /* only boolean true: false */,
        });
        console.log("Result:" + results.failed + " failures");

        // write the html to a file
        fs.writeFile(reportFilePath, html, (errr) => {
          if (errr) throw errr;
          done();
        });
      });
    });
  },

  setTime: function (startTime) {
    start = startTime;
  },
};
