import { test, expect, Page } from "@playwright/test";
import { getBaseUrl } from "../../config";
import { routeslist } from "../utlis/routeslist.const";
import login from "../utlis/utils";


test.describe("Verify the functionalities of Automation Ecserise Page", async () => {
  test("Navigate to Products Page ", async ({ page }) => {
    await login(page);
    await page.goto(`${getBaseUrl()}${routeslist.PRODUCTS}`);



  });

})

