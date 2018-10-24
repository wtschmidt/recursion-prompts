const ChromiumRevision = require('puppeteer/package.json').puppeteer.chromium_revision
const Downloader = require('puppeteer/utils/ChromiumDownloader')
const revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision)

process.env.CHROME_BIN = revisionInfo.executablePath

module.exports = function (config) {
    config.set({
        frameworks: ['chai', 'mocha', 'sinon-chai', 'sinon'],
        files: [
            'lib/location.js',
            { pattern: 'lib/css/mocha.css', included: false, served: true },
            { pattern: 'lib/chai.js', included: false, served: true },
            { pattern: 'lib/mocha.js', included: false, served: true },
            { pattern: 'lib/sinon.js', included: false, served: true },
            { pattern: 'lib/sinon-chai.js', included: false, served: true },
            { pattern: 'lib/cardboard.js', included: false, served: true },
            { pattern: 'lib/testSupport.js', included: false, served: true },
            { pattern: 'lib/jquery.js', included: false, served: true },
            { pattern: 'SpecRunner.html', included: true, served: true },
            { pattern: 'src/recursion.js', included: false, served: true },
            { pattern: 'spec/*.js', included: false, served: true },
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        autoWatch: false,
        concurrency: Infinity,
        globals: {inKarma: true}
    })
}