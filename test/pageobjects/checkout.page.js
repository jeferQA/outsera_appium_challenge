class CheckoutPage{

    getInputName(){
        return $('~test-First Name');
    }

    getInputLastName(){
        return $('~test-Last Name');
    }

    getInputPostalcode(){
        return $('~test-Zip/Postal Code');
    }

    getBtnContinue(){
        return $('~test-CONTINUE');
    }

    getBtnFinish(){
        return $('~test-FINISH');
    }

    getTextOrderComplete(){
        return $('android=new UiSelector().text("THANK YOU FOR YOU ORDER")');
    }

    async finishOrder(name, lastName, postalCode){
        await browser.pause(3000);
        await this.getInputName().setValue(name);
        await browser.pause(3000);
        await this.getInputLastName().setValue(lastName);
        await browser.pause(3000);
        await this.getInputPostalcode().setValue(postalCode)
        await browser.pause(3000);
        await this.getBtnContinue().click();
        await browser.pause(3600);
        await browser.execute('mobile: scroll', { 
                    direction: 'down',
                    strategy: 'accessibility id',
                    selector: 'test-FINISH'
        });
        //await this.getBtnFinish({timeout:5000})
        //await this.getBtnFinish().click();
        //await this.getTextOrderComplete({timeout:5000})
        //await expect(this.getTextOrderComplete()).toBeDisplayed();
    }

}

module.exports = new CheckoutPage();