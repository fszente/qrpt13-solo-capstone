import {By} from 'selenium-webdriver'; 
import {BasePage} from './basePage'; 

export class Frani extends BasePage {
    pauseVideo: By = By.xpath('(//button[@*])[4]');
    playVideo: By = By.xpath('(//button[@*])[4]');
    orderNow: By = By.xpath('(//a[@class="navbar-cta__link navbar-header-order-button js-header-order-button"])[1]');
    milkshakes: By = By.xpath('(//div[@class="h4 card-heading"])[23]');
    houseMadeMilkshakes: By = By.xpath('(//div[@class="subcategory-description"])[1]');
    vanilla: By = By.xpath('(//div[@class="category-description"])[1]');
    addToBag: By = By.xpath('(//button[@*])[6]');


    constructor(){
        super({url:'https://www.ihop.com/en'})
    }
};