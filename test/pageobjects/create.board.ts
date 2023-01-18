class CreateBoard {
    public async createNewBoardButton() {
        await browser.pause(2000)
        const createNewBoard = await $$('[data-testid="create-board-tile"]');
        await createNewBoard[0].waitForExist();
        return createNewBoard[0];
    }

    public async boardTitle() {
        const title = await $('[data-testid="create-board-title-input"]');
        await title.waitForExist();
        return title;
    }

    public async submitButton() {
        const submitBtn = await $('[data-testid="create-board-submit-button"]');
        await submitBtn.waitForExist();
        return submitBtn;
    }

    public async createNewBoard(title: string) {
        const createNewBoard = await this.createNewBoardButton();
        await createNewBoard.click();
        await browser.pause(3000)
        const boardTitle = await this.boardTitle();
        await boardTitle.setValue(title);
        const submitBtn = await this.submitButton();
        await submitBtn.click();
    }
}

export default new CreateBoard();