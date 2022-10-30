package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import utilities.TestBase;


public class MasterHooks extends TestBase {
@Before
public void initializeBrowser() 
{
	driver = getDriver();
}

@After
public void closeBrowser()
{
	if(driver!=null)
	{
		driver.manage().deleteAllCookies();
		driver.quit();
	}
}
}
