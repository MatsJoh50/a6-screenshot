
const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


//ENTER THE SITE YOU WANT TO SCREENSHOT

    const url = 'https://www.lernia.se'

//======================================

    const [, saveFile] = url.split('.');
    await page.goto(`${url}`);

  await page.screenshot({ path: `${saveFile}.png`, fullPage: true });

  browser.close();
}

run();
