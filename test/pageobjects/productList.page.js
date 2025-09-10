class ProductListPage {
    getBtnAddToCart(index) {
        return $('android=new UiSelector().description("test-ADD TO CART").instance(' + index + ')');
    }

    getBtnMinicart() {
        return $('android=new UiSelector().className("android.widget.ImageView").instance(3)');
    }

    getTitleMinicart() {
        return $('android=new UiSelector().text("YOUR CART")');
    }

    getCountMinicart(qty){
        return $('android=new UiSelector().text('+ qty + ')')
    }

    async addProductToCart(index){
        await this.getBtnAddToCart(index).click()
    }

    async openMinicart(){
        browser.pause(3000);
        await this.getBtnMinicart().click();
    }
}

module.exports = new ProductListPage();