 require('dotenv/config');
 import puppeteer from 'puppeteer';

 (async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 150,
    });
    const page = await browser.newPage();
    await page.goto('https://instagram.com');
    
    await page.type('input[type=\"text\"]', process.env.USER_LOGIN)
    await page.type('input[type=\"password\"]', process.env.USER_PASS)

    await page.click('button[type=\"submit\"')
    await page.waitForNavigation();

    await page.goto('https://instagram.com');

    await page.click(".HoLwm");
    
    //Acessando Stories
    await page.waitFor(250);
    await page.click(".OE3OK");

    //Tempo Visualizando os Stories
    await page.waitFor(5000)

    //Voltando para pagina Inicial
    await page.goto('https://instagram.com');

    


   
    
    

    //Encerrando Sessão
    await browser.close();
  })()

  //Proximas Features
  // - Passar stories
  // - Enviar Resposta automatica para novos seguidores
  // - Curtir fotos de uma # especifica