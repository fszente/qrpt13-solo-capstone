import {By} from 'selenium-webdriver'; 
import {BasePage} from './basePage'; 

export class Frani extends BasePage {
    pauseVideo: By = By.xpath('(//button[@*])[4]');
    playVideo: By = By.xpath('(//button[@*])[4]');
    orderNow: By = By.xpath('(//a[@class="navbar-cta__link navbar-header-order-button js-header-order-button"])[1]');
    milkshakes: By = By.xpath('(//div[@class="h4 card-heading"])[23]');
    houseMadeMilkshakes: By = By.xpath('(//div[@class="subcategory-description"])[1]');
    vanilla: By = By.xpath('(//div[@class="category-description"])[1]');
    xBtn: By = By.xpath('(//button[@class="counter-plus btn"])[1]')
    addToBag: By = By.xpath('(//button[@*])[6]');
    findYourIhop: By = By.xpath('(//a[@class="home-features__link"])[2]');
    locationSearch: By = By.xpath('(//input[@class="ui-autocomplete-input"])[1]');
    searchBtn: By = By.xpath('(//button[@*])[1]');
    join: By = By.xpath('(//a[@id="jsSignupNavigator"])[1]');
    email: By = By.xpath('(//input[@class="input c1a815477 c5c5d6a3a"])[1]');
    password: By = By.xpath('(//input[@class="input c1a815477 c61ad6f21"])[1]');
    continue: By = By.xpath('(//button[@*])[2]');
    firstName: By = By.xpath('(//input[@*])[22]');
    lastName: By = By.xpath('(//input[@*])[23]');
    zipCode: By = By.xpath('(//input[@*])[24]');
    location: By = By.xpath('(//select[@*])[1]');
    mobile: By = By.xpath('(//input[@*])[25]');
    checkMark: By = By.xpath('(//div[@*])[109]');
    signUp: By = By.xpath('(//button[@class="btn btn-lg w-100 continue-okta-login sign-up"])[1]');




    constructor(){
        super({url:'https://www.ihop.com/en'})
    }
};