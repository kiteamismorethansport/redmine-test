exports.LoginPage = 
class LoginPage {
    constructor(page){
        this.page= page;
        this.inputFieldUser="#username"
        this.inputFieldPassword ="#password"
        this.loginSubmit = "#login-submit"
        this.flashError = "#flash_error"
    }
    
    async fillTheFields(username, password){
        await this.page.locator(this.inputFieldUser).fill(username);
        await this.page.locator(this.inputFieldPassword).fill(password);
        
        }
        async clickSubmit(){
            await this.page.locator(this.loginSubmit).click();
        }
        async checkForError(){
           await expect(this.page.locator(this.flashError)).toContainText('Invalid user or password')
        }
    
}