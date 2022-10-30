package pageObjects;

import java.time.Duration;
import java.util.List;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

import utilities.TestBase;


public class SearchBusPage extends TestBase  {
	
	
	Actions act = new Actions(driver);

	public @FindBy(xpath = "//div/input[@value='Leaving From:']") WebElement leavingfrom_fieldbox;

	public @FindBy(css = "input[name='toPlaceName']") WebElement goingto_fieldbox;

	public @FindBy(css = "div input[value='Date Of Departure']") WebElement dateofdeparture_datepicker;

	public @FindBy(css = "a[title='Next']") WebElement calender_next_btn;

	public @FindBy(className = "ui-state-default") List<WebElement> fromdate_list;

	public @FindBy(xpath = "//div/following-sibling::input[@name='txtReturnJourneyDate']") WebElement dateofreturn_datepicker;

	public @FindBy(className = "ui-state-default") List<WebElement> todate_list;
	
	public @FindBy(css = "button[class*='btn-booking']") WebElement search_btn;

	public @FindBy(xpath = "//div/button[@class='search-modify-btn']") WebElement modifysearch_btn;

	public SearchBusPage enterSourcePlace(String source_place) {
		leavingfrom_fieldbox.click();
		act.moveToElement(leavingfrom_fieldbox).sendKeys(source_place).sendKeys(Keys.ARROW_DOWN).sendKeys(Keys.ENTER).build().perform();
		return new SearchBusPage();
	}

	public SearchBusPage enterDesinationPlace(String destination_place) {
		goingto_fieldbox.click();
		act.moveToElement(goingto_fieldbox).sendKeys(destination_place).pause(Duration.ofSeconds(2)).sendKeys(Keys.ENTER).build().perform();
		return new SearchBusPage();
	}

	public SearchBusPage enterdateOfDeparture(String date_of_departure) {
		dateofdeparture_datepicker.click();
		calender_next_btn.click();
		int count = fromdate_list.size();

		for (int i = 0; i < count; i++) {
			String text = fromdate_list.get(i).getText();
			if (text.equals(date_of_departure)) {

				fromdate_list.get(i).click();
				break;
			}

		}
		return new SearchBusPage();
	}

	public SearchBusPage enterdateOfReturn(String date_of_return) {
		dateofreturn_datepicker.click();
		int count = todate_list.size();

		for (int i = 0; i < count; i++) {
			String text = todate_list.get(i).getText();
			if (text.equals(date_of_return)) {

				todate_list.get(i).click();
				break;
			}

		}
		return new SearchBusPage();
	}

	public SearchBusPage clickSearchButton() {
		search_btn.click();
		return new SearchBusPage();
	}

	public boolean verifyModifySearchButtonPresence() {
		modifysearch_btn.isDisplayed();
		return true;
	}

	public SearchBusPage() {
	super();
	}
}

	
