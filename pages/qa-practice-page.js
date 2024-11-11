import {BasePage} from "./base-page";
import {expect} from "@playwright/test";

export class QaPracticePage {

    constructor(page) {
        this.basePage = new BasePage(page)
        this.textStringInput = "//*[@name='text_string']"
        this.resultText = "//*[@id='result-text']"
    }

    async filltextStringInput(value) {
        await this.basePage.fillInput(this.textStringInput, value);
    }

    async getResultText() {
        return await this.basePage.getText(this.resultText)
    }
}