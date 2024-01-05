const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const fs = require('fs');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    const INDEED = 'https://hu.indeed.com/jobs?q=szoftver+OR+software&l=szeged&vjk=3cfc794176e577d9';
    await driver.get(INDEED);
    await driver.wait(until.elementsLocated(By.id('onetrust-reject-all-handler')), 10000);
    await driver.findElement(By.id('onetrust-reject-all-handler')).click();
    await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync('./png/sel_0105_1_indeedPage1.png', screenshot, 'base64');

    const BUTTON = '/html/body/main/div/div[1]/div/div[5]/div[2]/div/div/div/div/div[2]/div/div[4]/div/div/div/div/button';
    /*for(let i = 1; i < 15; i++) {
        const XPATH_BASE = '/html/body/main/div/div[1]/div/div[5]/div[1]/div[5]/div/ul/li[';
        await driver.findElement(By.xpath(XPATH_BASE + i.toString() + ']')).click();
        await driver.wait(until.elementLocated(By.xpath(BUTTON)));
        screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./png/sel_0105_1_indeedPage' + i.toString() + '.png', screenshot, 'base64');
        next = i + 1;
        if (!elementLocated(By.xpath(XPATH_BASE + next.toString() + ']'))) await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
    }*/


    const LINKEDIN = 'https://www.linkedin.com/jobs/search/?currentJobId=3665498602&distance=25&f_TPR=r604800&geoId=107147836&keywords=software&location=Szeged%2C%20Csongr%C3%A1d%2C%20Hungary&origin=JOB_SEARCH_PAGE_JOB_FILTER&refresh=true';
    await driver.get(LINKEDIN);
    const LINKEDIN_REJECT = '/html/body/div[1]/div/section/div/div[2]/button[2]';
    await driver.wait(until.elementsLocated(By.xpath(LINKEDIN_REJECT)), 10000);
    await driver.findElement(By.xpath(LINKEDIN_REJECT)).click();
    screenshot = await driver.takeScreenshot();
    fs.writeFileSync('./png/sel_0105_2_linkedinPage1.png', screenshot, 'base64');

  } finally {
    await driver.quit();
  }
})();
