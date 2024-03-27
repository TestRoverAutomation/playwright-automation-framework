import {test, expect } from '@playwright/test';
import {login_locators} from './logintestlocators';
import { login_data } from './logintestdata';
test.describe('login test suit @ui',()=>{ 

    test('Verify login test',async ({page}) => {
       await test.step('Given I navigate to login_page', async()=> {
            await page.goto(login_data.login_pageUrl);
        });
        await test.step('And enter user name and password ', async() => {
            await page.locator(login_locators.username_loc).fill(login_data.username);
            await page.locator(login_locators.password_loc).fill(login_data.password);
        })
        await test.step('When I click on submit button', async() => {
            await page.locator(login_locators.submit_loc).click();
        });
         await test.step('Then I should verify url contains /logged-in-successfully/', async() => {
            await expect(page).toHaveURL(login_data.user_logged_in_sucessfully_Url);
        });
        
     });

     let i = 1;

     for(const {username, password} of login_data.username_Password_Data){
        test(`${i++} Validate user not able to login with following data ${username}, ${password} `,async ({page}) => {
            await test.step('Given I navigate to login_page', async()=> {
                 await page.goto(login_data.login_pageUrl);
             });
             await test.step('And enter user name and password ', async() => {
                 await page.locator(login_locators.username_loc).fill(username);
                 await page.locator(login_locators.password_loc).fill(password);
             })
             await test.step('When I click on submit button', async() => {
                 await page.locator(login_locators.submit_loc).click();
             });
              await test.step('Then I should verify user is not loggedin. /practice-test-login/', async() => {
                 await expect(page).not.toHaveURL(login_data.user_logged_in_sucessfully_Url);
                 await expect(page).toHaveURL(login_data.user_not_Loggedin);
             });
             
          });
     }

 });