class createList {
    public async addListName() {
        browser.pause(2000);
        const addListElement = await $('.list-name-input');
        await addListElement.waitForExist();
        return addListElement;
    }

    public async addSubmitButton() {
        const addListSubmit = await $("#board > div.js-add-list.list-wrapper.mod-add > form > div > input");
        await addListSubmit.waitForExist();
        return addListSubmit;
    }

    public async addCardButton() {
        const addCard = await $(".js-add-a-card");
        await addCard.waitForExist()
        return addCard;
    }

    public async addCardDescription() {
        const addCardDescription = await $("#board > div.js-list.list-wrapper > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards.js-sortable.ui-sortable > div > div.list-card.js-composer > div > textarea");
        await addCardDescription.waitForExist();
        return addCardDescription;
    }

    public async addCardSubmitButton() {
        const addCardButton = await $("#board > div.js-list.list-wrapper > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards.js-sortable.ui-sortable > div > div.cc-controls.u-clearfix > div:nth-child(1) > input");
        await addCardButton.waitForExist();
        return addCardButton;
    }

    public async closeCard() {
        const closeCard = await $("#board > div.js-list.list-wrapper > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards.js-sortable.ui-sortable > div > div.cc-controls.u-clearfix > div:nth-child(1) > a");
        await closeCard.waitForExist();
        return closeCard;
    }
    public async addAnotherListComponent() {
        const addAnotherListComponent = await $("#board > div.js-add-list.list-wrapper.mod-add.is-idle > form > a");
        await addAnotherListComponent.waitForExist();
        return addAnotherListComponent;
    }

    public async getCard() {
        const card = await $("#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards.js-sortable.ui-sortable > a");
        await card.waitForExist();
        return card;
    }

    public async cardMoveToList() {
        const moveTo = await $("#board > div:nth-child(2) > div > div.list-header.js-list-header.u-clearfix.is-menu-shown > div.list-header-target.js-editing-target");
        await moveTo.waitForExist();
        return moveTo;
    }

    public async addList(listName: string) {
        const addList = await this.addListName();
        await addList.setValue(listName);
        const submitButton = await this.addSubmitButton();
        await submitButton.click();
    }


    public async addCard(cardDescription: string) {
        await browser.pause(2000);
        const addCard = await this.addCardButton();
        await addCard.click();
        await browser.pause(2000);
        const addCardDes = await this.addCardDescription();
        await addCardDes.setValue(cardDescription);
        await browser.pause(2000);
        const addCardSubmitButton = await this.addCardSubmitButton();
        await addCardSubmitButton.click();
        const closeCard = await this.closeCard();
        await closeCard.click();
        browser.pause(1000)
    }

    public async addAnotherList(listName: string) {
        const addAnotherListComponent = await this.addAnotherListComponent();
        await addAnotherListComponent.click();
        await this.addList(listName);
    }

    public async moveCard() {
        await browser.pause(2000);
        const card = await this.getCard();
        const moveTo = await this.cardMoveToList();
        card.dragAndDrop(moveTo);
    }

}

export default new createList();