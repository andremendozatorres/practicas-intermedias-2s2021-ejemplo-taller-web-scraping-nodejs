const request = require('request-promise');
const cheerio = require('cheerio');

async function webScrapingNodejs1() {
    try {
        const $ = await request({
            uri: 'https://www.intelaf.com/precios_stock_detallado.aspx?codigo=VD-ASRS306O12VG',
            transform: body => cheerio.load(body)
        });
        const websiteTitle = $('title');// etiqueta title
        console.log('----------\n' + 'Title:\n' + websiteTitle.text());
        const webSiteHeading = $('h1')// etiqueta h1
        console.log('----------\n' + 'Heading:\n' + webSiteHeading.text());
        const webSiteAvailability = $(".col-xs-1")// clase col-xs-1
        console.log('----------\n' + 'Disponibilidad para Venta en Línea:\n' + webSiteAvailability.text());
    } catch (e) {
        console.log(e);
    }
}

async function webScrapingNodejs2() {
    try {
        const $ = await request({
            uri: 'https://www.intelaf.com/Precios_stock_resultado.aspx?area=GAMING-TARJVID-NVIDIA',
            transform: body => cheerio.load(body)
        });
        $('.descripcion').each((i, el) => {// clase descripcion
            const graphicsCards = [];
            graphicsCards.push(i);
            $(el).find('div').each((i, el) => graphicsCards.push($(el).text()));// etiqueta div
            console.log(graphicsCards);
        })
    } catch (e) {
        console.log(e);
    }
}

webScrapingNodejs1();
webScrapingNodejs2();
