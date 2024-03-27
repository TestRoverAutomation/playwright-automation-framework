import {test, expect } from '@playwright/test';
import {dashboard_locators} from './ecommlocators';
import { dashboard_data } from './ecomdata'; 
test.describe('ecommerce dashboard suit @smoke',()=>{ 
    test.use({ storageState: 'playwright/.auth/user.json'})
    test('Validate user is able to change fname and lname',async ({page}) => {
        await test.step('Given I navigate to login_page', async()=> {
            await page.goto(dashboard_data.dashboard_pageUrl);
        });
        await test.step('And I click on edit my account', async()=> {
            await page.getByText(dashboard_locators.edit_account_loc).click();
        });
      
        await test.step('And I change First Name, Last Name ', async() => {
            await page.locator(dashboard_locators.firstName_loc).fill(dashboard_data.firstName);
            await page.locator(dashboard_locators.lastName_loc).fill(dashboard_data.lastName);
        })
        await test.step('When I click on continue button', async() => {
            await page.locator(dashboard_locators.click_continue).click();
        });
         await test.step('Then I should verify Success: Your account has been successfully updated. is displayed', async() => {
            expect(page.locator(dashboard_locators.account_updated).isVisible).toBeTruthy();
        });
        
     });
 });