const LoginPage = require('../pageobjects/login.page');
const ProductListPage = require('../pageobjects/productList.page');
const MinicartPage = require('../pageobjects/minicart.page');
const CheckoutPage = require('../pageobjects/checkout.page');

describe('Desafios - Login e Navegação', () => {
    it('Tarefa 01 - Valida o login e a abertura do minicart', async () => {
        LoginPage.login('standard_user', 'secret_sauce')
        browser.pause(3600)
        ProductListPage.addProductToCart(0)
        browser.pause(3600)
        ProductListPage.openMinicart()
        await browser.pause(3600)
    })

    it('Tarefa 01 - Login e Navegação até a remoção do produto do minicart', async () => {
        LoginPage.login('standard_user', 'secret_sauce')
        browser.pause(3600)
        ProductListPage.addProductToCart(0)
        browser.pause(3600)
        ProductListPage.openMinicart()
        browser.pause(3600)
        MinicartPage.removeProduct()
        await browser.pause(3600)
    })

    it('Tarefa 02 - Finalizada compra, inclui preenhcimento de formulário', async () => {
            LoginPage.login('standard_user', 'secret_sauce')
            ProductListPage.addProductToCart(0)
            ProductListPage.openMinicart()
            MinicartPage.proceedToCheckout()
            CheckoutPage.finishOrder('Jeferson', 'Indejejczak', '84016330')
    })
})

