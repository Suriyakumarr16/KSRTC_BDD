package stepDefinitions;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.junit.Assert;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.Constant;

import utilities.TestUtil;

public class LoginSteps extends TestUtil {

	WebDriver driver;
		

	@Given("^User navigates to KSRTC Website$")
	public void user_navigates_to_KSRTC_Website() {
		login_Page.launchURL();

	}

	@And("^User clicks on SignIn Button$")
	public void user_clicks_on_SignIn_Button() {
		login_Page.clickSigInButton();
	}

	@And("^user clicks on the login button$")
	public void user_clicks_on_the_login_button() {
		login_Page.clickLoginButton();

	}

	@When("^User enters username and password from given sheetname \"([^\"]*)\" and rownumber \"([^\"]*)\"$")
	public void user_enters_username_and_password_from_given_sheetname_and_rownumber(String sheetName, int rowNumber)
			throws Throwable {

		ExcelReader reader = new ExcelReader();
		List<Map<String, String>> testData = reader.getData(Constant.CONTROLLER_EXCEL_DIRECTORY, sheetName);

		String username = testData.get(rowNumber).get("username");
		String password = testData.get(rowNumber).get("password");

		login_Page.enterUserName(username);
		login_Page.enterpassWord(password);
	
	}

	@Then("^appropriate login message should be displayed on screen$")
	public void appropriate_login_message_should_be_displayed_on_screen() throws NullPointerException, IOException  {
		try {

			if (login_Page.verifyDropdownPresence()) {

				Assert.assertTrue(login_Page.welcome_msg.isDisplayed());
				TakeScreenshot("ValidLogin");
			}
		} catch (Exception e) {
			Assert.assertTrue(login_Page.error_msg.isDisplayed());
			TakeScreenshot("InvalidLogin");

		}
		
	}

}
