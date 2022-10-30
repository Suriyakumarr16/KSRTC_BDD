package utilities;

import java.io.FileInputStream;
import java.time.Duration;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;

import pageObjects.LoginPage;
import pageObjects.SearchBusPage;


public class TestBase {
	
	public static WebDriver driver;
	public static LoginPage login_Page;
	public static SearchBusPage SearchBus_Page;



		public WebDriver getDriver() {
			
			try {
				ReadConfigFile File = new ReadConfigFile();
				String browserName = File.getBrowser();

				switch (browserName) {
				case "firefox": {
					System.setProperty("webdriver.gecko.driver", Constant.GECKO_DRIVER_DIRECTORY);
					DesiredCapabilities capabilities = new DesiredCapabilities();
					capabilities.setCapability("marionette", true);
					driver = new FirefoxDriver();
					driver.manage().window().maximize();
				}
					break;

				case "chrome": {
					System.setProperty("webdriver.chrome.driver", Constant.CHROME_DRIVER_DIRECTORY);
					driver = new ChromeDriver();
					driver.manage().window().maximize();
				}
					break;

				case "edge": {
					System.setProperty("webdriver.edge.driver", Constant.EDGE_DRIVER_DIRECTORY);
					driver = new EdgeDriver();
					driver.manage().window().maximize();
				}
					break;
				}
			}

			catch (Exception e) {
				System.out.println("unable to load browser : " + e.getMessage());
			} finally {
				login_Page = PageFactory.initElements(driver, LoginPage.class);
				SearchBus_Page = PageFactory.initElements(driver, SearchBusPage.class);
				driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
			}
			return driver;
		}
	

	public class ReadConfigFile {
		protected FileInputStream fis = null;
		protected Properties prop = null;

		public ReadConfigFile() {
			try {
				fis = new FileInputStream(Constant.CONFIG_PROPERTIES_DIRECTORY);
				prop = new Properties();
				prop.load(fis);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		public String getBrowser() {
			if (prop.getProperty("browserName") == null)
				return "";
			return prop.getProperty("browserName");
		}
		
		public String getURL() {
			if (prop.getProperty("url") == null)
				return "";
			return prop.getProperty("url");
		}
	}
}
