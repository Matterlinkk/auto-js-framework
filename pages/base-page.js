export class BasePage {

    DEFAULT_TIMEOUT = 15000
    MINUTE_TIMEOUT = 60000
    LONG_DELAY_TIMEOUT = 120000

    constructor(page) {
        this.page = page;
    }

    async clickOn(locator) {
        await this.page.click(locator, { timeout: this.DEFAULT_TIMEOUT });
    }

    async checkElementState(locator, state) {
        await this.page.waitForSelector(locator, { state: state, timeout: this.DEFAULT_TIMEOUT});
    }

    async getElementState(locator, state) {
        if (state === 'visible') {
            return await this.page.locator(locator).isVisible()
        }
        else if (state === 'disabled') {
            return await this.page.locator(locator).isDisabled()
        }
        else if (state === 'hidden') {
            return await this.page.locator(locator).isHidden()
        }
        else if (state === 'enabled') {
            return await this.page.locator(locator).isEnabled()
        }
    }

    async fillInput(locator, text) {
        await this.page.fill(locator, text, { timeout: this.DEFAULT_TIMEOUT })
    }

    async waitFullLoadPage() {
        await this.page.waitForLoadState('networkidle', { timeout: this.MINUTE_TIMEOUT });
    }

    async getText(locator) {
        return await this.page.locator(locator).textContent()
    }

    async getAllElementMatcher(locator) {
        return await this.page.locator(locator).all()
    }
}