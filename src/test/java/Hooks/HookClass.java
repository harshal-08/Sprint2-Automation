package Hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HookClass {
	public static WebDriver driver;
	
	@Before
	public void initialization() throws InterruptedException{
		System.setProperty("webdriver.chrome.driver", ".\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://retailm1.upskills.in/admin");
		driver.manage().window().maximize();
		Thread.sleep(1000);
	}
	@After
	public void closedriver(){
		driver.quit();
	}
}
