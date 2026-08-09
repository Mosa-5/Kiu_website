import { strict as assert } from "node:assert";

describe("KIU home page", () => {
  it("loads the English home route and opens the chatbot", async () => {
    await browser.url("/en");

    await expect($("body")).toBeDisplayed();
    const chatbotButton = await $("[aria-label='Open chatbot assistant']");
    await chatbotButton.waitForDisplayed();
    await chatbotButton.click();

    assert.equal(await $("[aria-label='Send chat message']").isDisplayed(), true);
  });
});
