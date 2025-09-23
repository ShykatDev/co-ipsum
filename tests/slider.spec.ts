import { expect, test } from "@playwright/test";

test.describe("Slider Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://co-ipsum.vercel.app/");
  });

  test("test first section before images", async ({ page }) => {
    await expect(
      page.getByText("Eros augue curabitur rutrum ibrium")
    ).toBeVisible();
  });

  test("renders all slider panels", async ({ page }) => {
    const panels = page.locator(".panel");
    const count = await panels.count();
    expect(count).toBeGreaterThan(0);
  });

  test("slides panels horizontally on scroll", async ({ page }) => {
    const firstPanel = page.locator(".panel").first();

    const before = await firstPanel.boundingBox();
    await page.mouse.wheel(0, 1200);
    await page.waitForTimeout(500);
    const after = await firstPanel.boundingBox();

    expect(after?.x).not.toBe(before?.x);
  });

  test("shows next section after slider", async ({ page }) => {
    // Scroll all the way
    await page.mouse.wheel(0, 6000);
    await page.waitForTimeout(500);

    // Verify "next section" text content is visible
    await expect(page.getByText(/Eros augue curabitur eu/i)).toBeVisible();
  });
});
