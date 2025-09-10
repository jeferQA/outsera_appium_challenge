class MinicartPage{

    getBtnRemove(){
        return $('~test-REMOVE')
    }

    getBtnCheckout(){
        return $('android=new UiSelector().description("test-CHECKOUT")')
    }

    async removeProduct(){
        browser.pause(3600)
        await this.getBtnRemove().click()
    }

    async proceedToCheckout(){
        browser.pause(3600)
        await this.getBtnCheckout().click()
    }

}

module.exports = new MinicartPage();