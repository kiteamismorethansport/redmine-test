exports.RegisterPage = 
class RegisterPage {
    constructor(page){
        this.page= page;
        this.registerLink=".register"
        this.inputNickname= "#user_login"
        this.inputPassword = "#user_password"
        this.inputPassConf = "#user_password_confirmation"
        this.inputName = "#user_firstname"
        this.inputSurName = "#user_lastname"
        this.inputEmail = "#user_mail"
        this.inputSubmit = "//input[@value='Submit']"
    }
    async clickOnRegister(){
        await this.page.locator(this.registerLink).click();
    }
    async fillTheRegisterFields(){
        await this.page.locator(this.inputNickname).fill('WhitePaper1')
        await this.page.locator(this.inputPassword).fill('WhitePaper001')
        await this.page.locator(this.inputPassConf).fill('WhitePaper001')
        await this.page.locator(this.inputName).fill('Whit1111')
        await this.page.locator(this.inputSurName).fill('WhitePapers')
        await this.page.locator(this.inputEmail).fill('wimatal906@cmheia.com')
        await this.page.locator(this.inputSubmit).click();
    }
    async fillTheRegisterWithShortPassword(){
        await this.page.locator(this.inputNickname).fill('WhitePaper1')
        await this.page.locator(this.inputPassword).fill('Whit001')
        await this.page.locator(this.inputPassConf).fill('Whit001')
        await this.page.locator(this.inputName).fill('Whit1111')
        await this.page.locator(this.inputSurName).fill('WhitePapers')
        await this.page.locator(this.inputEmail).fill('wimatal906@cmheia.com')
        await this.page.locator(this.inputSubmit).click();
    }
}