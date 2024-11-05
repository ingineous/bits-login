import "dotenv/config";
import puppeteer from 'puppeteer';

const username = process.env.USERNAME;
const password = process.env.PSWRD;

// console.log(username, password);

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({
        executablePath: "/usr/bin/brave",
        headless: false,
    }
);


const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('http://172.16.0.30:8090/httpclient.html');

// Set screen size.
await page.setViewport({width: 1080, height: 1024});

// Type into search box.
await page.locator('#username').fill(username);
await page.locator('#password').fill(password);

// Wait and click on first result.
await page.locator('#loginbutton').click();

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

await delay(4000);

console.log("Logged in ig");

await browser.close();
