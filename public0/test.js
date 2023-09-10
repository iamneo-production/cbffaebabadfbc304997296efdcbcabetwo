const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    try{
      await page.goto('https://8081-cbffaebabadfbc304997296efdcbcabetwo.project.examly.io/');
      await page.setViewport({
        width:1200,
        height:1200,
      })
      await page.waitForSelector('h1');
      await page.waitForSelector('div');
      
      const result1 = await page.evaluate(()=>{
        let heading = document.querySelector("#header");
        return heading.innerHTML;
      })
   
      console.log('TESTCASE:testcase1:success');
    }
    catch(e){
      console.log('TESTCASE:testcase1:failure');
    }
    
    const page1 = await browser.newPage();
    try{
      await page1.goto('https://8081-cbffaebabadfbc304997296efdcbcabetwo.project.examly.io/');
      await page1.setViewport({
        width:1200,
        height:800,
      })
      await page1.waitForSelector('input');
      const result1 = await page1.evaluate(()=>{
        let heading = document.querySelector(".btn");
        return heading.innerHTML;
      })
     
      console.log('TESTCASE:testcase2:success');
    }
    catch(e){
      console.log('TESTCASE:testcase2:failure');
    } 

    const page2 = await browser.newPage();
    try{
      await page2.goto('https://8081-cbffaebabadfbc304997296efdcbcabetwo.project.examly.io/');
      await page2.setViewport({
        width:1200,
        height:800,
      })
      await page2.waitForSelector('div');
      
      const result1 = await page2.evaluate(()=>{
        let heading = document.querySelector(".box");
        return heading.innerHTML;
      })
      const result2 = await page2.evaluate(()=>{
        let heading = document.querySelector(".row");
        return heading.innerHTML;
      })
      
      console.log('TESTCASE:testcase3:success');
    }
    catch(e){
      console.log('TESTCASE:testcase3:failure');
    }

  const page3 = await browser.newPage();
  try{
    await page3.goto('https://8081-cbffaebabadfbc304997296efdcbcabetwo.project.examly.io/');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('p');
    await page3.waitForSelector('button');

    const result1 = await page3.evaluate(()=>{
        let heading = document.querySelector(".result");
        return heading.innerHTML;
      })
      
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('https://8081-cbffaebabadfbc304997296efdcbcabetwo.project.examly.io/');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    const result1 = await page4.evaluate(()=>{
        let heading = document.querySelector("#reset");
        return heading.innerHTML;
      })
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }
  
  finally{
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await browser.close();
  }
  
})();