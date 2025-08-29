import { test, expect, Page } from "@playwright/test";
import { getBaseUrl } from "../../config";
import { routeslist } from "../utlis/routeslist.const";
import login from "../utlis/utils";


test.describe("Verify the functionalities of Automation Ecserise Page", async () => {
  test("Navigate to Products Page Search and Validate the Serach product ", async ({ page }) => {
    await login(page);
    await page.goto(`${getBaseUrl()}${routeslist.PRODUCTS}`);
    await expect(page).toHaveURL(`${getBaseUrl()}${routeslist.PRODUCTS}`);
    await expect(page.getByText("All Products")).toBeVisible();
    await page.screenshot({ path: 'productsPage.png', fullPage: true });
    await page.getByPlaceholder("Search Product").fill("Tshirt");
    await page.locator("#submit_search").click();
    await expect(page.getByText("Searched Products")).toBeVisible();
   // await page.pause();

  });
test("Navigate to Cart Page Search and Validate the cart  ", async ({ page }) => {
    await login(page);
    await page.goto(`${getBaseUrl()}${routeslist.CART}`);

    await expect(page.getByText("Shopping Cart")).toBeVisible();
    await page.screenshot({ path: 'cartPage.png', fullPage: true });
    await page.getByPlaceholder("Search Cart").fill("Tshirt");
    await page.locator("#submit_cart_search").click();
    await expect(page.getByText("Searched Cart Items")).toBeVisible();
       await page.pause();
});


});

