const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const fs = require('fs');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    //Twitter, Register, Name, Email
    const REGISTER = "/html/body/div/div/div/div[2]/main/div/div/div[1]/div/div/div[3]/a";
    const NAME = "/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[1]/label/div/div[2]/div/input";
    const EMAIL = "/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/label/div/div[2]/div/input";

    await driver.get('https://www.twitter.com/');
    
    await driver.wait(until.titleIs('X. Ami épp most történik / X'), 10000);
    await driver.findElement(By.xpath(REGISTER)).click();
    
    await driver.wait(until.elementsLocated(By.xpath(NAME)), 10000);
    await driver.findElement(By.xpath(NAME)).sendKeys('John Doe');

    await driver.wait(until.elementsLocated(By.xpath(EMAIL)), 10000);
    await driver.findElement(By.xpath(EMAIL)).sendKeys('john.doe@gmail.com');

    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync('./png/sel_0104_1_regNameEmail.png', screenshot, 'base64');

    /* xpaths of dropwdowns
    const MONTH = "//*[@id="SELECTOR_1"]"
    const NOVEMBER = "/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[3]/div[3]/div/div[1]/select/option[12]"
    const DAY = //*[@id="SELECTOR_2"]
    const DAY15 = /html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[3]/div[3]/div/div[2]/select/option[16]
    YEAR = //*[@id="SELECTOR_3"]
    CONST YEAR2010 = /html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[3]/div[3]/div/div[3]/select/option[16]
    */
  } finally {
    await driver.quit();
  }
})();