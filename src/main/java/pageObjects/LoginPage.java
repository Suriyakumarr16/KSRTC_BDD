package pageObjects;





import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import utilities.TestBase;


public class LoginPage extends TestBase  {
	
	ReadConfigFile File = new ReadConfigFile();
	String url = File.getURL();

	public @FindBy(xpath = "//a[contains(text(),'Sign In')]") WebElement signin_btn;

	public @FindBy(css = "input[name='userName']") WebElement username_fieldbox;

	public @FindBy(css = "div input[type='password']") WebElement password_fieldbox;

	public @FindBy(css = "input[class*='btn-login']") WebElement login_btn;

	public @FindBy(xpath = "//div[@class='dropdown']") WebElement account_dropdown;

	public @FindBy(xpath = "//li/div[contains(text(),'Welcome')]") WebElement welcome_msg;

	public @FindBy(xpath = "//div/strong[contains(text(),'Login incorrect')]") WebElement error_msg;

	public LoginPage launchURL() {
		driver.get(url);
		return new LoginPage();
	}

	public LoginPage clickSigInButton() {
		signin_btn.click();
		return new LoginPage();
	}

	public LoginPage enterUserName(String username) {
		username_fieldbox.sendKeys(username);
		return new LoginPage();
	}

	public LoginPage enterpassWord(String password) {
		password_fieldbox.sendKeys(password);
		return new LoginPage();
	}

	public LoginPage clickLoginButton() {
		login_btn.click();
		return new LoginPage();
	}

	public boolean verifyDropdownPresence() {
		account_dropdown.isDisplayed();
		return true;
	}

	public WebElement WelcomeMessage() {
		return welcome_msg;
	}

	public WebElement ErrorMessage() {
		return error_msg;
	}

	public LoginPage() {
		super();
	}
}
