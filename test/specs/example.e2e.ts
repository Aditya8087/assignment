import LoginPage from '../pageobjects/login.page'
import createBoard from '../pageobjects/create.board';
import list from '../pageobjects/create.list'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const userName = "<please enter urse-name>";
        const password = "<please enter password>";
        await LoginPage.open();
        await LoginPage.login(userName, password);
        await createBoard.createNewBoard("test-board");
        await list.addList("List 1");
        await list.addCard("card 1");
        await list.addAnotherList("List 2");
        await list.moveCard();
    })
})


