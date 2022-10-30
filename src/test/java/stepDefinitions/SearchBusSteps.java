package stepDefinitions;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.junit.Assert;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.Constant;
import utilities.TestUtil;

public class SearchBusSteps extends TestUtil {


	@And("^user enters all the trip details from given sheetname \"([^\"]*)\" and rownumber \"([^\"]*)\"$")
	public void user_enters_all_the_trip_details_from_given_sheetname_and_rownumber(String sheetName, int rowNumber)
			throws Throwable {

		ExcelReader reader = new ExcelReader();
		List<Map<String, String>> testData = reader.getData(Constant.CONTROLLER_EXCEL_DIRECTORY, sheetName);

		String source_place = testData.get(rowNumber).get("source_place");
		String destination_place = testData.get(rowNumber).get("destination_place");
		String date_of_departure = testData.get(rowNumber).get("date_of_departure");
		String date_of_return = testData.get(rowNumber).get("date_of_return");
		
		SearchBus_Page.enterSourcePlace(source_place);
		SearchBus_Page.enterDesinationPlace(destination_place);
		SearchBus_Page.enterdateOfDeparture(date_of_departure);
		SearchBus_Page.enterdateOfReturn(date_of_return);
	}

	@When("^user clicks on Search Button$")
	public void user_clicks_on_Search_Button() {
		SearchBus_Page.clickSearchButton();
	}

	@Then("^user should be successfully navigated to Search Bus Page$")
	public void user_should_be_successfully_navigated_to_Search_Bus_Page() throws NullPointerException, IOException {

		Assert.assertTrue(SearchBus_Page.verifyModifySearchButtonPresence());
		TakeScreenshot("SearchBusPage");
	}

}
