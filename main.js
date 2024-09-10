const libReport = require('istanbul-lib-report');
const reports = require('istanbul-reports');
const libCoverage = require('istanbul-lib-coverage');
const cov = require('./coverage-final.json');

const _cov = Object.entries(cov).reduce((acc, [key, value]) => {
    acc[key.replaceAll('/builds','/Users/tzhangm/github.com')] = {
        ...value,
        path: key.replaceAll('/builds','/Users/tzhangm/github.com')
    }
    return acc;
}, {});
console.log(_cov);
// coverageMap, for instance, obtained from istanbul-lib-coverage
const coverageMap = libCoverage.createCoverageMap(_cov);

const configWatermarks = {
    statements: [50, 80],
    functions: [50, 80],
    branches: [50, 80],
    lines: [50, 80]
};

// create a context for report generation
const context = libReport.createContext({
    dir: 'report/output/dir',
    // The summarizer to default to (may be overridden by some reports)
    // values can be nested/flat/pkg. Defaults to 'pkg'
    defaultSummarizer: 'nested',
    watermarks: configWatermarks,
    coverageMap,
})

// create an instance of the relevant report class, passing the
// report name e.g. json/html/html-spa/text
const report = reports.create('html-spa', {
    skipEmpty: {},
    skipFull: {}
})

// call execute to synchronously create and write the report to disk
report.execute(context)