import { test, expect } from '@playwright/test';
import { dashboard_data} from './ecomdata';

    test.describe('Shopping for Laptops', () => {
        test.use({ storageState: 'playwright/.auth/user.json'});
            test.skip('Adding a Laptop to the Shopping Cart and Checking Out  @cicd', async ({ page }) => {
            await test.step('Given I Navigate to the my dashboard page of the e-commerce website', async () => {
                await page.goto(dashboard_data.dashboard_pageUrl);
            });

            await test.step('And I Click on the "Shop by Category" option', async () => {
                await page.getByRole('button', { name: 'Shop by Category' }).click();
            });

            await test.step('And I Click on "Laptops & Notebooks"', async () => {
                await page.getByRole('link', { name: 'Laptops & Notebooks' }).click();
            });

            await test.step('Then I should Verify landing on the laptops page and the heading "Laptops"', async () => {
                await expect(page.getByRole('heading', { name: 'Laptops' })).toBeVisible();
            });

            await test.step('Given I verify click over HTC Touch HD', async () => {
                await page.getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' }).click();
            });

            await test.step('And I Click on "Add to Cart".', async () => {
                await page.getByRole('button', { name: 'Add to Cart' }).click();
            });

            await test.step('And Click on the "View Cart" button and navigate to the Shopping Cart page', async () => {
                await page.getByRole('link', { name: 'View Cart ' }).click();
            });

            await test.step('And I Update the quantity to 5 and click the "Update" button', async () => {
                await page.locator("input[value='5']").click();
                await page.locator("form[action*='https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart/edit'] input").fill('5');
                await page.getByRole('button', { name: '' }).click();
            });

            await test.step('And I Click on "Checkout".', async () => {
                await page.getByRole('link', { name: 'Checkout' }).click();
            });

            await test.step('And I Fill up the comment form', async () => {
                await page.getByLabel('Add Comments About Your Order').click();
                await page.getByLabel('Add Comments About Your Order').fill('place in green box');
            });

            await test.step('And I Click on the terms and conditions checkbox and the "Continue" button', async () => {
                await page.getByText('I have read and agree to the Terms & Conditions').click();
                await page.getByRole('button', { name: 'Continue ' }).click();
            });

            await test.step('Then I should Verify the order confirmation details', async () => {
                await expect(page.locator("//td[normalize-space()='HTC Touch HD']")).toBeVisible();
                await expect(page.locator("//td[normalize-space()='Product 1']")).toBeVisible();
                await expect(page.locator("//td[normalize-space()='5']")).toBeVisible();
                await expect(page.locator("//td[normalize-space()='$120.00']")).toBeVisible();
                await expect(page.locator("(//td[contains(text(),'$600.00')])[2]")).toBeVisible();
            });

            await test.step('When I Click on the "Confirm Order" button', async () => {
                await page.getByRole('button', { name: 'Confirm Order ' }).click();
            });

            await test.step('Than I should Verify landing on the page with the heading "Your order has been placed!" and the URL containing "checkout/success"', async () => {
                await expect(page.getByRole('heading', { name: ' Your order has been placed!' })).toBeVisible();
                await expect(page).toHaveURL(/.*route=checkout\/success/);
            });
        });

    });


        test.describe.configure({ mode: 'serial' });
        let state_url;
        test.use({ storageState: 'playwright/.auth/user.json'});
        test('Test 1 verify user is able to select the laptop form shop category @cart', async ({page}) => { 
            await test.step('Given I Navigate to the my dashboard page of the e-commerce website', async () => {
                await page.goto(dashboard_data.dashboard_pageUrl);
            });

            await test.step('And I Click on the "Shop by Category" option', async () => {
                await page.getByRole('button', { name: 'Shop by Category' }).click();
            });

            await test.step('And I Click on "Laptops & Notebooks"', async () => {
                await page.getByRole('link', { name: 'Laptops & Notebooks' }).click();
            });

            await test.step('Then I should Verify landing on the laptops page and the heading "Laptops"', async () => {
                await expect(page.getByRole('heading', { name: 'Laptops' })).toBeVisible();
               state_url = page.url();
            });
         });
         test.use({ storageState: 'playwright/.auth/user.json'});
        test('Test 2 Verify user is able add item to cart @cart', async ({page}) => { 
            await test.step('Given I Navigate laptops page and the heading "Laptops"', async () => {
                await page.goto(state_url);
            });
            await test.step('And I verify click over HTC Touch HD', async () => {
                await page.getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' }).click();
            });

            await test.step('And I Click on "Add to Cart".', async () => {
                await page.getByRole('button', { name: 'Add to Cart' }).click();
            });

            await test.step('And Click on the "View Cart" button and navigate to the Shopping Cart page', async () => {
                await page.getByRole('link', { name: 'View Cart ' }).click();
            });
            await test.step('Then I should verify I land on Shopping Cart page', async () => {
                await expect(page).toHaveURL(/.*route=checkout\/cart/);
                state_url = page.url();
            });

         });
         test('Test 3 Verify able to update quantity and fill up comment for order and validate user navigate to confirmation details. @cart', async ({page}) => { 
            await test.step('Given I Navigate to the shopping cart page', async () => {
                await page.goto(state_url);
            });
            await test.step('And I Update the quantity to 5 and click the "Update" button', async () => {
                await page.locator("form[action*='https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart/edit'] input").click();
                await page.locator("form[action*='https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart/edit'] input").fill('5');
                await page.getByRole('button', { name: '' }).click();
            });

            await test.step('And I Click on "Checkout".', async () => {
                await page.getByRole('link', { name: 'Checkout' }).click();
            });

            await test.step('And I Fill up the comment form', async () => {
                await page.getByLabel('Add Comments About Your Order').click();
                await page.getByLabel('Add Comments About Your Order').fill('place in green box');
            });

            await test.step('And I Click on the terms and conditions checkbox and the "Continue" button', async () => {
                await page.getByText('I have read and agree to the Terms & Conditions').click();
                await page.getByRole('button', { name: 'Continue ' }).click();
            });

            await test.step('Then I should Verify the order confirmation details', async () => {
                await expect(page.locator("//td[normalize-space()='HTC Touch HD']")).toBeVisible();
                await expect(page.locator("//td[normalize-space()='Product 1']")).toBeVisible();
                await expect(page.locator("//td[normalize-space()='5']")).toBeVisible();
                await expect(page.locator("//td[normalize-space()='$120.00']")).toBeVisible();
                await expect(page.locator("(//td[contains(text(),'$600.00')])[2]")).toBeVisible();
                state_url = page.url();
            });

         });
         test('Test 4 Validate order confirmation page @cart', async ({page}) => { 
            await test.step('Given I Navigate to order conformation page', async () => {
                await page.goto(state_url);
            });
            await test.step('When I Click on the "Confirm Order" button', async () => {
                await page.getByRole('button', { name: 'Confirm Order ' }).click();
            });

            await test.step('Than I should Verify landing on the page with the heading "Your order has been placed!" and the URL containing "checkout/success"', async () => {
                await expect(page.getByRole('heading', { name: ' Your order has been placed!' })).toBeVisible();
                await expect(page).toHaveURL(/.*route=checkout\/success/);
            });
          })







