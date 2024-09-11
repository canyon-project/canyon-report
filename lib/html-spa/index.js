'use strict';
/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
const fs = require('fs');
const path = require('path');
const { ReportBase } = require('istanbul-lib-report');
const HtmlReport = require('../html');
const mkdirp = require('make-dir');

function getDecode(str) {
    return decodeURIComponent(
        atob(str)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(""),
    );
}

function getEncode(str) {
    return btoa(
        encodeURIComponent(str)
            .replace(/%([0-9A-F]{2})/g, function (match, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            })
    );
}


const standardLinkMapper = {
    getPath(node) {
        if (typeof node === 'string') {
            return node;
        }
        let filePath = node.getQualifiedName();
        if (node.isSummary()) {
            if (filePath !== '') {
                filePath += '/index.html';
            } else {
                filePath = 'index.html';
            }
        } else {
            filePath += '.html';
        }
        return filePath;
    },

    relativePath(source, target) {
        const targetPath = this.getPath(target);
        const sourcePath = path.dirname(this.getPath(source));
        return path.relative(sourcePath, targetPath);
    },

    assetPath(node, name) {
        return this.relativePath(this.getPath(node), name);
    }
};

class HtmlSpaReport extends ReportBase {
    constructor(opts = {}) {
        super({
            // force the summarizer to nested for html-spa
            summarizer: 'nested'
        });


        console.log(opts,'opts')

        this.verbose = opts.verbose || false;
        this.linkMapper = opts.linkMapper || standardLinkMapper;
        this.subdir = opts.subdir || '';
        this.date = Date();
        this.skipEmpty = opts.skipEmpty;
        this.htmlReport = new HtmlReport(opts);
        this.htmlReport.getBreadcrumbHtml = function() {
            return '<a href="javascript:history.back()">Back</a>';
        };

        this.metricsToShow = opts.metricsToShow || [
            'lines',
            'branches',
            'functions'
        ];

        fs.writeFileSync(
            'report/output/index.html',
            `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

</body>
<!--teshu-->
<script>
console.log(Object.keys(window).filter((k=>k.includes('L1VzZXJzL3'))))
</script>
</html>
`,
        )
    }

    onDetail(node, context) {

        console.log(context,'context')

        // console.log(node.fileCoverage.path)
        // const p = node.fileCoverage.path
        // console.log(p)
        // const s = context.getSource(p);
        // console.log(s)
        // console.log(this.)
        // mkdirp.sync(this.outputPath(node));

        // 根据路径创建文件夹
        const dest = 'report/output/dir'
        mkdirp.sync(dest);

        fs.writeFileSync(
            dest +'/'+ getEncode(node.fileCoverage.path)+'.js',
            `window['${getEncode(node.fileCoverage.path)}'] = {
            content: '${getEncode(context.getSource(node.fileCoverage.path))}',
            coverage: ${JSON.stringify(node.fileCoverage.data)}
            }`
        );

        const data = fs.readFileSync('report/output/index.html', 'utf8');


        // 解析data，找到<!--teshu-->，在它后面添加js

        const result = data.replace('<!--teshu-->', `
<script src="./dir/${getEncode(node.fileCoverage.path)}.js"></script>
<!--teshu-->`);
        fs.writeFileSync('report/output/index.html', result, 'utf8');

    }
}

module.exports = HtmlSpaReport;
