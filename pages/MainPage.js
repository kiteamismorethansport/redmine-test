exports.MainPage = 
class MainPage {
    constructor(page){
        this.page= page;
        this.loginLink=".login"
        this.overViewLink =".overview"
        this.inputSearch= "#q"
    }
    async gotoMainPage(){
        await this.page.goto('https://www.redmine.org/')
    }
    async clickLoginLink(){
        await this.page.locator(this.loginLink).click();
    }
    async insertTextToSearchField(){
        await this.page.locator(this.inputSearch).click();
        await this.page.locator(this.inputSearch).fill('features');
        await this.page.keyboard.press('Enter');
    }
    
}