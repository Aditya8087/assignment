class LoginPage {
    public async inputUsername() {
        const user = await $("#user");
        await user.waitForExist();
        return user;
    }

    public async continune() {
        const continueBtn = await $("#login");
        await continueBtn.waitForExist();
        return continueBtn;

    }

    public async inputPassword() {
        const password = await $('#password');
        await password.waitForExist();
        return password
    }

    public async btnSubmit() {
        const submit = await $('#login-submit');
        await submit.waitForExist()
        return submit;
    }

    public async login(username: string, password: string) {
        const userName = await this.inputUsername()
        await userName.setValue(username);
        const continueBtn = await this.continune();
        await continueBtn.click();
        const passwordInput = await this.inputPassword();
        await passwordInput.setValue(password);
        const submitBtn = await this.btnSubmit();
        await submitBtn.click();
    }

    public open() {
        return browser.url(`https://trello.com/login`)
    }
}

export default new LoginPage();
