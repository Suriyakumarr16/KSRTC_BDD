package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions(features = { "src/test/java/features/" }, glue = {
		"stepDefinitions" }, monochrome = true, tags = {"@login,@searchbus"}, plugin = { "pretty", "html:target/cucumber-html-report",
				"json:target/cucumber.json"})

public class TestRunner extends AbstractTestNGCucumberTests {

}
