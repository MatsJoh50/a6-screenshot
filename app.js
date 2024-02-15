const puppeteer = require('puppeteer');

async function runTest() {
const browser = await puppeteer.launch({
    headless: false,
    timeout: 100000
});

const page = await browser.newPage();
const url = 'https://stackoverflow.com/questions/47616985/node-puppeteer-take-screenshot-full-page-spa';

await page.goto(url, {
    waitUntil: 'networkidle2'
});
await page.waitFor(500);

await page.screenshot({ path: 'fullpage.png', fullPage: true });
browser.close();
}

runTest();