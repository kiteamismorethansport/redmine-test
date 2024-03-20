import {test, expect} from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';
import {MainPage} from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

test('login to the website with valid existing credentials', async ({ page }) => {
  const main = new MainPage(page);
  const login = new LoginPage(page);
  await main.gotoMainPage();
await page.waitForTimeout(3000)
  await main.clickLoginLink();
  await login.fillTheFields('TesterRedmine8', 'TesterPassword');
  await login.clickSubmit();
  await page.waitForTimeout(3000);
});
test('login to the website with invalid username', async ({page}) =>{
  const main = new MainPage(page);
  const login = new LoginPage(page);
  await main.gotoMainPage();
  await main.clickLoginLink();
  await login.fillTheFields('Tester', 'TesterPassword');
  await login.clickSubmit();
  await expect(page.locator('#flash_error')).toContainText('Invalid user or password');
})
test('login to the website with invalid password', async ({page}) =>{
  const main = new MainPage(page);
  const login = new LoginPage(page);
  await main.gotoMainPage();
  await main.clickLoginLink();
  await login.fillTheFields('TesterRedMine8', 'Password');
  await login.clickSubmit();
  await expect(page.locator('#flash_error')).toContainText('Invalid user or password');
})
test('check search field', async ({page}) =>{
  const main = new MainPage(page);
  await main.gotoMainPage();
  await main.insertTextToSearchField();
  await expect(page.locator('//h2[text()="Search"]')).toContainText('Search');
})

test('Register new user using valid randomly generated credentials', async ({page})=>{
  const username = faker.internet.userName();
  const password = faker.internet.password();
  const email = faker.internet.exampleEmail();
  const main = new MainPage(page);
  const reg = new RegisterPage(page);

  await main.gotoMainPage();
  await reg.clickOnRegister();
  await reg.fillNewUser(username, password, username, username, email);
  await expect(page.locator('#flash_notice')).toContainText('Account was successfully created.');
})

test('Register new user using existing nickname', async ({page})=>{
  const main = new MainPage(page);
  const reg = new RegisterPage(page);

  await main.gotoMainPage();
  await reg.clickOnRegister();
  await reg.fillTheRegisterFields();
  await expect(page.locator('//li[ contains( text(),"Login has already been taken")]')).toContainText('Login has already been taken');
})
test('Register new user using short password', async ({page})=>{
  const main = new MainPage(page);
  const reg = new RegisterPage(page);

  await main.gotoMainPage();
  await reg.clickOnRegister();
  await reg.fillTheRegisterWithShortPassword();
  await expect(page.locator('//li[ contains( text(),"Password is too short")]')).toContainText('Password is too short');
})




