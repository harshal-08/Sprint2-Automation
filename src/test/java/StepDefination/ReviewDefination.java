package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import Hooks.HookClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ReviewDefination {
	WebDriver driver = HookClass.driver;
	
//Login Background
	@Given("User is on the website")
	public void user_is_on_the_website() {
		try{
			String expected = "Administration";
		    String actual = driver.getTitle();
		    Assert.assertEquals(expected, actual);
		}
		catch(Exception e){
			System.out.println("User is not on the correct page "+e);
			Assert.fail();
		}
	}

	@When("User enter {string} & {string}")
	public void user_enter(String string, String string2) {
		try{
			string = "admin";
			string2 = "admin@123";
			driver.findElement(By.xpath("//input[@id='input-username']")).sendKeys(string);
			driver.findElement(By.xpath("//input[@id='input-password']")).sendKeys(string2);
		}
		catch(Exception e){
			System.out.println("User can not enter Username and Password "+e);
			Assert.fail();
		}
	}
	
	@When("User click on Login button")
	public void user_click_on_Login_button() {
		try{
			driver.findElement(By.xpath("//button[@class='btn btn-primary']")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on Login button "+e);
			Assert.fail();
		}
	}

	@When("User can see the dashboard")
	public void user_can_see_the_dashboard() {
		try{
			String expected = "Dashboard";
		    String actual = driver.getTitle();
		    Assert.assertEquals(expected, actual);
		    //Thread.sleep(3000);
		}
		catch(Exception e){
			System.out.println("User can not see the dashboard"+e);
			Assert.fail();
		}
	}
	
	@When("User click on Menu icon")
	public void user_click_on_Menu_icon() {
		try{
			driver.findElement(By.xpath("//a[@id='button-menu']")).click();
		    Thread.sleep(1000);
		}
		catch(Exception e){
			System.out.println("User can not click on Menu icon "+e);
			Assert.fail();
		}
	}

	@When("User click on Catalog")
	public void user_click_on_Catalog() {
		try{
			driver.findElement(By.xpath("//span[contains(text(),'Catalog')]")).click();
		    Thread.sleep(1000);
		}
		catch(Exception e){
			System.out.println("User can not click on Catalog "+e);
			Assert.fail();
		}
	}

	@When("User click on Reviews")
	public void user_click_on_Reviews() {
		try{
			driver.findElement(By.xpath("//ul[@class='collapse in']/li/a[text()='Reviews']")).click();
		    Thread.sleep(1000);
		}
		catch(Exception e){
			System.out.println("User can not click on Reviews "+e);
			Assert.fail();
		}
	}

	@Then("User can see Reviews Page")
	public void user_can_see_Reviews_Page() {
		try{
			String expected = "Reviews";
		    String actual = driver.getTitle();
		    Assert.assertEquals(expected, actual);
		}
		catch(Exception e){
			System.out.println("User can not see Review Page "+e);
			Assert.fail();
		}
	}

//Add New Review Functionality
	@Given("User click on Add New button in Review page")
	public void user_click_on_Add_New_button_in_Review_page() {
		try{
			driver.findElement(By.xpath("//i[@class='fa fa-plus']")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on Add New button in Review page "+e);
			Assert.fail();
	    }
	}
		
	@When("User enter Author{string} Product{string} Text{string} Rating{string} Date Added{string} Status{string}")
	public void user_enter_Author_Product_Text_Rating_Date_Added_Status(String string, String string2, String string3, String string4, String string5, String string6) {
		try{
			driver.findElement(By.id("input-author")).sendKeys(string);
			driver.findElement(By.id("input-product")).sendKeys(string2);
			Thread.sleep(3000);
			driver.findElement(By.xpath("//ul[@class='dropdown-menu']/li")).click();
			Thread.sleep(3000);
			driver.findElement(By.id("input-text")).sendKeys(string3);
			driver.findElement(By.xpath("//input[@value='"+string4+"']")).click();
			driver.findElement(By.id("input-date-added")).sendKeys(string5);
			Select objSelect =new Select(driver.findElement(By.id("input-status")));
			objSelect.selectByVisibleText(string6);
		}
		catch(Exception e){
			System.out.println("User can not enter Author Product Text Rating Date Added Status "+e);
			Assert.fail();
	    }
	}

	@When("User click on Save button")
	public void user_click_on_Save_button() {
		try{
			driver.findElement(By.xpath("//button[@class='btn btn-primary']")).click();
			//Thread.sleep(3000);

		}
		catch(Exception e){
			System.out.println("User can not click on Save button "+e);
			Assert.fail();
	    }
	}

	@Then("User can see Success message")
	public void user_can_see_Success_message() {	
		try{		
			Assert.assertTrue(driver.findElement(By.xpath("//div[@class='alert alert-success']")).isDisplayed());		
			//Thread.sleep(3000);
		}
		catch(Exception e){
			System.out.println("User can not see Success message "+e);
			Assert.fail();
	    }
	}

//Add new review Invalid
	@Then("User stays on same page and can not save details")
	public void user_stays_on_same_page_and_can_not_save_details() {
		try{		
			driver.findElement(By.xpath("//h3[@class='panel-title'][contains(text(),' Add Review')]"));
		}
		catch(Exception e){
			System.out.println("User can not see Add New Review page "+e);
			Assert.fail();
		}
	}

//Filter functionality by valid data
	@Given("User enter Product {string} Author{string} Status{string} Date Added{string} in Filter section")
	public void user_enter_Product_Author_Status_Date_Added_in_Filter_section(String string, String string2, String string3, String string4) {
		try{
			driver.findElement(By.xpath("//input[@id='input-product']")).sendKeys(string);
			driver.findElement(By.xpath("//input[@id='input-author']")).sendKeys(string2);
			Select objSelect =new Select(driver.findElement(By.id("input-status")));
			objSelect.selectByVisibleText(string3);
			driver.findElement(By.xpath("//input[@id='input-date-added']")).sendKeys(string4);
		}
		catch(Exception e){
			System.out.println("User can not enter Product Author Status Date Added in filter section "+e);
			Assert.fail();
	    }
	}
	
	@When("User click on filter button")
	public void user_click_on_filter_button() {
		try{
			driver.findElement(By.xpath("//button[@id='button-filter']")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on filter button "+e);
			Assert.fail();
	    }
		
	}
	
	@Then("User can see filtered result record of {string} Author{string} Status{string} Date Added Table{string} in Review list table")
	public void user_can_see_filtered_result_record_of_Author_Status_Date_Added_Table_in_Review_list_table(String string, String string2, String string3, String string4) {
		try{
			driver.findElement(By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[2][contains(text(),'"+string+"')]"));
			driver.findElement(By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[3][contains(text(),'"+string2+"')]"));
			driver.findElement(By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[5][contains(text(),'"+string3+"')]"));
			driver.findElement(By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[6][contains(text(),'"+string4+"')]"));
		}
		catch(Exception e){
			System.out.println("User can not see filtered result "+e);
			Assert.fail();
	    }
	}

//Filter Functionality by invalid data
	@Then("User can see Message {string}")
	public void user_can_see_Message(String string) {
		try{
			driver.findElement(By.xpath("//div[@class='table-responsive']/table/tbody/tr/td[contains(text(),'"+string+"')]"));
		}
		catch(Exception e){
			System.out.println("User can not see message "+e);
			Assert.fail();
	    }
	}

//Edit Review Functionality valid
	@Given("User click on Edit button in Review page")
	public void user_click_on_Edit_button_in_Review_page() {
		try{
			driver.findElement(By.xpath("//tbody/tr[8]/td[7]/a[@class='btn btn-primary']")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on Edit button in Review page "+e);
			Assert.fail();
		}
	}

	@When("User clear previous data record")
	public void user_clear_previous_data_record() {
		try{
			driver.findElement(By.id("input-author")).clear();
			driver.findElement(By.id("input-product")).clear();
			driver.findElement(By.id("input-text")).clear();
			driver.findElement(By.id("input-date-added")).clear();
		}
		catch(Exception e){
			System.out.println("User can not clear previous data "+e);
			Assert.fail();
		}
	}

	@When("User enter new data for Author{string} Product{string} Text{string} Rating{string} Date Added{string} Status{string}")
	public void user_enter_new_data_for_Author_Product_Text_Rating_Date_Added_Status(String string, String string2, String string3, String string4, String string5, String string6) throws InterruptedException {	
		try{
			driver.findElement(By.id("input-author")).sendKeys(string);
			driver.findElement(By.id("input-product")).sendKeys(string2);
			Thread.sleep(1000);
			driver.findElement(By.xpath("//ul[@class='dropdown-menu']/li")).click();
			Thread.sleep(1000);
			driver.findElement(By.id("input-text")).sendKeys(string3);
			driver.findElement(By.xpath("//input[@value='"+string4+"']")).click();
			driver.findElement(By.id("input-date-added")).sendKeys(string5);
			Select objSelect =new Select(driver.findElement(By.id("input-status")));
			objSelect.selectByVisibleText(string6);
		}
		catch(Exception e){
			System.out.println("User can not enter new data "+e);
			Assert.fail();
		}
	}

//edit review with invalid data
	@Then("User stays on edit page and can not save details")
	public void user_stays_on_edit_page_and_can_not_save_details() {
		try{		
			driver.findElement(By.xpath("//h3[@class='panel-title'][contains(text(),' Edit Review')]"));
		}
		catch(Exception e){
			System.out.println("User can not see Add New Review page "+e);
			Assert.fail();
		}
	}


	
//Delete Functionality	
	@Given("User click on checkbox of a review in Review page")
	public void user_click_on_checkbox_of_a_review_in_Review_page() {
		try{
			driver.findElement(By.xpath("//tbody/tr/td/input[@name='selected[]']")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on checkbox of a review in Review page "+e);
			Assert.fail();
		}
	}

	@When("User click on Delete button")
	public void user_click_on_Delete_button() {
		try{
			driver.findElement(By.xpath("//button[@class='btn btn-danger']")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on Delete button in Review page "+e);
			Assert.fail();
		}
	}

	@When("User click on Ok in alert box")
	public void user_click_on_Ok_in_alert_box() {
		try{
			driver.switchTo().alert().accept();
		}
		catch(Exception e){
			System.out.println("User can not click on Ok in alert box in Review page "+e);
			Assert.fail();
		}
	}

//Order Review
	@Given("User can see Review list table")
	public void user_can_see_Review_list_table() {		
		try{
			driver.findElement(By.xpath("//table[@class='table table-bordered table-hover']")).isDisplayed();
		}
		catch(Exception e){
			System.out.println("User can not Review list table "+e);
			Assert.fail();
		}
	}

	@When("User click on Author table header in Review page")
	public void user_click_on_Author_table_header_in_Review_page() {
		try{	
			driver.findElement(By.xpath("//thead/tr/td[3]/a")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on Author table header in Review page "+e);
			Assert.fail();
		}
	}

	@When("User can see ordered Author{string} column")
	public void user_can_see_ordered_Author_column(String string) {
		try{		
			driver.findElement(By.xpath("//table[@class='table table-bordered table-hover']/tbody/tr[1]/td[3][contains(text(),'"+string+"')]"));
		}
		catch(Exception e){
			System.out.println("User can not see ordered Author column "+e);
			Assert.fail();
		}
	}

	@When("User click on Product table header in Review page")
	public void user_click_on_Product_table_header_in_Review_page() {
		try{	
			driver.findElement(By.xpath("//thead/tr/td[2]/a")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on Product table header in Review page "+e);
			Assert.fail();
		}
	}

	@When("User can see ordered Product{string} column")
	public void user_can_see_ordered_Product_column(String string) {
		try{		
			driver.findElement(By.xpath("//table[@class='table table-bordered table-hover']/tbody/tr[1]/td[2][contains(text(),'"+string+"')]"));
		}
		catch(Exception e){
			System.out.println("User can not see ordered Product column "+e);
			Assert.fail();
		}
	}

	@When("User click on Rating table header in Review page")
	public void user_click_on_Rating_table_header_in_Review_page() {
		try{	
			driver.findElement(By.xpath("//thead/tr/td[4]/a")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on Rating table header in Review page "+e);
			Assert.fail();
		}
	}

	@When("User can see ordered Rating{string} column")
	public void user_can_see_ordered_Rating_column(String string) {
		try{		
			driver.findElement(By.xpath("//table[@class='table table-bordered table-hover']/tbody/tr[1]/td[4][contains(text(),'"+string+"')]"));
		}
		catch(Exception e){
			System.out.println("User can not see ordered Rating column "+e);
			Assert.fail();
		}
	}

	@When("User click on Date Added table header in Review page")
	public void user_click_on_Date_Added_table_header_in_Review_page() {
		try{	
			driver.findElement(By.xpath("//thead/tr/td[6]/a")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on Date Added table header in Review page "+e);
			Assert.fail();
		}
	}

	@When("User can see ordered Date Added{string} column")
	public void user_can_see_ordered_Date_Added_column(String string) {
		try{		
			driver.findElement(By.xpath("//table[@class='table table-bordered table-hover']/tbody/tr[1]/td[6][contains(text(),'"+string+"')]"));
		}
		catch(Exception e){
			System.out.println("User can not see ordered Date Added column "+e);
			Assert.fail();
		}
	}

	@When("User click on Status table header in Review page")
	public void user_click_on_Status_table_header_in_Review_page() {
		try{	
			driver.findElement(By.xpath("//thead/tr/td[5]/a")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on Status table header in Review page "+e);
			Assert.fail();
		}
	}

	@Then("User can see ordered Status{string} column")
	public void user_can_see_ordered_Status_column(String string) {
		try{		
			driver.findElement(By.xpath("//table[@class='table table-bordered table-hover']/tbody/tr[1]/td[5][contains(text(),'"+string+"')]"));
		}
		catch(Exception e){
			System.out.println("User can not see ordered Status column "+e);
			Assert.fail();
		}
	}

//Pagination functionality
	@Given("User is on the first page {string} of Review list")
	public void user_is_on_the_first_page_of_Review_list(String string) {
		try{		
			
			driver.findElement(By.xpath("//div[@class='col-sm-6 text-right'][contains(text(),'"+string+"')]"));
		}
		catch(Exception e){
			System.out.println("User can not on first page "+e);
			Assert.fail();
		}
	}

	@When("User click on button for second page")
	public void user_click_on_button_for_second_page() {
		try{
			driver.findElement(By.xpath("//ul[@class='pagination']/li[2]/a")).click();;
		}
		catch(Exception e){
			System.out.println("User can not click on button for second page "+e);
			Assert.fail();
		}
	}

	@When("User can see second page {string} of Review list")
	public void user_can_see_second_page_of_Review_list(String string) {
		try{
			driver.findElement(By.xpath("//div[@class='col-sm-6 text-right'][contains(text(),'"+string+"')]"));
		}
		catch(Exception e){
			System.out.println("User can not see second page "+e);
			Assert.fail();
		}
	}

	@When("User click on button for third page")
	public void user_click_on_button_for_third_page() {
		try{		
			driver.findElement(By.xpath("//ul[@class='pagination']/li[5]/a")).click();;
		}
		catch(Exception e){
			System.out.println("User can not click on button for third page "+e);
			Assert.fail();
		}
	}

	@Then("User can see third page {string} of Review list")
	public void user_can_see_third_page_of_Review_list(String string) {
		try{		
			driver.findElement(By.xpath("//div[@class='col-sm-6 text-right'][contains(text(),'"+string+"')]"));
		}
		catch(Exception e){
			System.out.println("User can not see third page "+e);
			Assert.fail();
		}
	}
	
//Cancel button
	@Given("User is on the Review list page")
	public void user_is_on_the_Review_list_page() {
		try{		
			driver.findElement(By.xpath("//h3[@class='panel-title'][contains(text(),' Review List')]"));
		}
		catch(Exception e){
			System.out.println("User is not on Review list page "+e);
			Assert.fail();
		}
	}

	@When("User can see Add New Review page")
	public void user_can_see_Add_New_Review_page() {
		try{		
			driver.findElement(By.xpath("//h3[@class='panel-title'][contains(text(),' Add Review')]"));
		}
		catch(Exception e){
			System.out.println("User can not see Add New Review page "+e);
			Assert.fail();
		}
	}

	@When("User click on Cancel button")
	public void user_click_on_Cancel_button() {
		try{		
			driver.findElement(By.xpath("//a[@class='btn btn-default']")).click();
		}
		catch(Exception e){
			System.out.println("User can not click on Cancel button "+e);
			Assert.fail();
		}
	}
	
	@When("Use can see edit review page")
	public void use_can_see_edit_review_page() {
		try{		
			driver.findElement(By.xpath("//h3[@class='panel-title'][contains(text(),' Edit Review')]"));
		}
		catch(Exception e){
			System.out.println("User can not see edit review page "+e);
			Assert.fail();
		}
	}

	@Then("User can see the Review list page again")
	public void user_can_see_the_Review_list_page_again() {
		try{		
			driver.findElement(By.xpath("//h3[@class='panel-title'][contains(text(),' Review List')]"));
		}
		catch(Exception e){
			System.out.println("User can not see the Review list page again "+e);
			Assert.fail();
		}
	}


	}
