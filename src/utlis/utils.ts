import { Page } from "@playwright/test";
import dotenv from "dotenv";
import { getBaseUrl } from "../../config";
import constant from "./constant";

// Load environment variables
dotenv.config();

// Config
const defaultUsername = process.env?.USEREMAIL ?? "";
const defaultPassword = process.env?.PASSWORD ?? "";
export const timeout = 10 * 100 * 100; // 100,000ms

/**
* Perform login operation
* @param page Playwright page instance
* @param username Optional username (default from .env)
* @param password Optional password (default from .env)
*/
async function login(
  page: Page,
  username?: string,
  password?: string,
): Promise<void> {
  await page.goto(constant.loginUrl);

  const user = username ?? defaultUsername;
  const pass = password ?? defaultPassword;

   await page.getByPlaceholder("Email Address").first().fill(user);

  await page.getByPlaceholder("Password").fill(pass);

  await Promise.all([
    page.waitForURL(constant.homeUrl),
    page.getByRole("button", { name: "Login" }).click(),
  ]);
}

// Helper to construct full URL
export const getURL = (url: string): string => `${getBaseUrl()}${url}`;

// Export config and login
export const config = { timeout };
export { login as dologin };
export default login;
 