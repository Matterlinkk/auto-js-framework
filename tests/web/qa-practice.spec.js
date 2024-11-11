import {expect, test} from '@playwright/test';
import {QaPracticePage} from "../../pages/qa-practice-page";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test('AFJS-1: Text input functionality', async ({ page }) => {
    await page.goto('https://www.qa-practice.com/elements/input/simple')
    const QaPractice = new QaPracticePage(page)
    const textValue = 'qwerty123'
    await QaPractice.filltextStringInput(textValue)
    await page.keyboard.press('Enter')
    await expect(await QaPractice.getResultText(QaPractice.resultText)).toEqual(textValue)
})