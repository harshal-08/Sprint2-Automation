$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/review.feature");
formatter.feature({
  "name": "Review feature in Retail website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add New Review functionality with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newReviewValid"
    }
  ]
});
formatter.step({
  "name": "User click on Add New button in Review page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter Author\"\u003cAuthor\u003e\" Product\"\u003cProduct\u003e\" Text\"\u003cText\u003e\" Rating\"\u003cRating\u003e\" Date Added\"\u003cDate Added\u003e\" Status\"\u003cStatus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.step({
  "name": "User can see Success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Author",
        "Product",
        "Text",
        "Rating",
        "Date Added",
        "Status"
      ]
    },
    {
      "cells": [
        "abcd",
        "Ring",
        "xyz",
        "1",
        "2021-10-07 09:19:46",
        "Disabled"
      ]
    },
    {
      "cells": [
        "elle",
        "Engagement Ring",
        "good",
        "4",
        "2021-09-01",
        "Disabled"
      ]
    }
  ]
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New Review functionality with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newReviewValid"
    }
  ]
});
formatter.step({
  "name": "User click on Add New button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Add_New_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Author\"abcd\" Product\"Ring\" Text\"xyz\" Rating\"1\" Date Added\"2021-10-07 09:19:46\" Status\"Disabled\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Success message",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New Review functionality with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newReviewValid"
    }
  ]
});
formatter.step({
  "name": "User click on Add New button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Add_New_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Author\"elle\" Product\"Engagement Ring\" Text\"good\" Rating\"4\" Date Added\"2021-09-01\" Status\"Disabled\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Success message",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add New Review functionality with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newReviewInvalid"
    }
  ]
});
formatter.step({
  "name": "User click on Add New button in Review page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter Author\"\u003cAuthor\u003e\" Product\"\u003cProduct\u003e\" Text\"\u003cText\u003e\" Rating\"\u003cRating\u003e\" Date Added\"\u003cDate Added\u003e\" Status\"\u003cStatus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.step({
  "name": "User stays on same page and can not save details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Author",
        "Product",
        "Text",
        "Rating",
        "Date Added",
        "Status"
      ]
    },
    {
      "cells": [
        "$%!@",
        "Iphone",
        "@@$",
        "2",
        "2021-11-06",
        "Enabled"
      ]
    },
    {
      "cells": [
        "a",
        "Electronic",
        "m",
        "3",
        "22-10-2021",
        "Enabled"
      ]
    },
    {
      "cells": [
        "123",
        "Television",
        "564",
        "4",
        "01-01-2021",
        "Disabled"
      ]
    },
    {
      "cells": [
        "we56",
        "Engagement Ring",
        "tu89",
        "5",
        "08/09/2021",
        "Enabled"
      ]
    }
  ]
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New Review functionality with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newReviewInvalid"
    }
  ]
});
formatter.step({
  "name": "User click on Add New button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Add_New_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Author\"$%!@\" Product\"Iphone\" Text\"@@$\" Rating\"2\" Date Added\"2021-11-06\" Status\"Enabled\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User stays on same page and can not save details",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_stays_on_same_page_and_can_not_save_details()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.ReviewDefination.user_stays_on_same_page_and_can_not_save_details(ReviewDefination.java:183)\r\n\tat ✽.User stays on same page and can not save details(file:src/test/java/Feature/review.feature:48)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New Review functionality with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newReviewInvalid"
    }
  ]
});
formatter.step({
  "name": "User click on Add New button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Add_New_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Author\"a\" Product\"Electronic\" Text\"m\" Rating\"3\" Date Added\"22-10-2021\" Status\"Enabled\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User stays on same page and can not save details",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_stays_on_same_page_and_can_not_save_details()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New Review functionality with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newReviewInvalid"
    }
  ]
});
formatter.step({
  "name": "User click on Add New button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Add_New_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Author\"123\" Product\"Television\" Text\"564\" Rating\"4\" Date Added\"01-01-2021\" Status\"Disabled\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User stays on same page and can not save details",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_stays_on_same_page_and_can_not_save_details()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.ReviewDefination.user_stays_on_same_page_and_can_not_save_details(ReviewDefination.java:183)\r\n\tat ✽.User stays on same page and can not save details(file:src/test/java/Feature/review.feature:48)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New Review functionality with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newReviewInvalid"
    }
  ]
});
formatter.step({
  "name": "User click on Add New button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Add_New_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter Author\"we56\" Product\"Engagement Ring\" Text\"tu89\" Rating\"5\" Date Added\"08/09/2021\" Status\"Enabled\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User stays on same page and can not save details",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_stays_on_same_page_and_can_not_save_details()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.ReviewDefination.user_stays_on_same_page_and_can_not_save_details(ReviewDefination.java:183)\r\n\tat ✽.User stays on same page and can not save details(file:src/test/java/Feature/review.feature:48)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Filter functionality by valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filterValid"
    }
  ]
});
formatter.step({
  "name": "User enter Product \"\u003cProduct Name\u003e\" Author\"\u003cAuthor\u003e\" Status\"\u003cStatus\u003e\" Date Added\"\u003cDate Added\u003e\" in Filter section",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "When "
});
formatter.step({
  "name": "User can see filtered result record of \"\u003cProduct Name\u003e\" Author\"\u003cAuthor\u003e\" Status\"\u003cStatus\u003e\" Date Added Table\"\u003cDate Added Table\u003e\" in Review list table",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product Name",
        "Author",
        "Status",
        "Date Added",
        "Date Added Table"
      ]
    },
    {
      "cells": [
        "Engagement Ring",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "elle",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "Disabled",
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "2021-09-01",
        "01/09/2021"
      ]
    },
    {
      "cells": [
        "Engagement Ring",
        "elle",
        "Disabled",
        "2021-09-01",
        "01/09/2021"
      ]
    }
  ]
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter functionality by valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filterValid"
    }
  ]
});
formatter.step({
  "name": "User enter Product \"Engagement Ring\" Author\"\" Status\"\" Date Added\"\" in Filter section",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Product_Author_Status_Date_Added_in_Filter_section(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see filtered result record of \"Engagement Ring\" Author\"\" Status\"\" Date Added Table\"\" in Review list table",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_filtered_result_record_of_Author_Status_Date_Added_Table_in_Review_list_table(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter functionality by valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filterValid"
    }
  ]
});
formatter.step({
  "name": "User enter Product \"\" Author\"elle\" Status\"\" Date Added\"\" in Filter section",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Product_Author_Status_Date_Added_in_Filter_section(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see filtered result record of \"\" Author\"elle\" Status\"\" Date Added Table\"\" in Review list table",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_filtered_result_record_of_Author_Status_Date_Added_Table_in_Review_list_table(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter functionality by valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filterValid"
    }
  ]
});
formatter.step({
  "name": "User enter Product \"\" Author\"\" Status\"Disabled\" Date Added\"\" in Filter section",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Product_Author_Status_Date_Added_in_Filter_section(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see filtered result record of \"\" Author\"\" Status\"Disabled\" Date Added Table\"\" in Review list table",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_filtered_result_record_of_Author_Status_Date_Added_Table_in_Review_list_table(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter functionality by valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filterValid"
    }
  ]
});
formatter.step({
  "name": "User enter Product \"\" Author\"\" Status\"\" Date Added\"2021-09-01\" in Filter section",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Product_Author_Status_Date_Added_in_Filter_section(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see filtered result record of \"\" Author\"\" Status\"\" Date Added Table\"01/09/2021\" in Review list table",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_filtered_result_record_of_Author_Status_Date_Added_Table_in_Review_list_table(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter functionality by valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filterValid"
    }
  ]
});
formatter.step({
  "name": "User enter Product \"Engagement Ring\" Author\"elle\" Status\"Disabled\" Date Added\"2021-09-01\" in Filter section",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Product_Author_Status_Date_Added_in_Filter_section(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see filtered result record of \"Engagement Ring\" Author\"elle\" Status\"Disabled\" Date Added Table\"01/09/2021\" in Review list table",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_filtered_result_record_of_Author_Status_Date_Added_Table_in_Review_list_table(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Filter functionality by invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filterInvalid"
    }
  ]
});
formatter.step({
  "name": "User enter Product \"\u003cProduct Name\u003e\" Author\"\u003cAuthor\u003e\" Status\"\u003cStatus\u003e\" Date Added\"\u003cDate Added\u003e\" in Filter section",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "When "
});
formatter.step({
  "name": "User can see Message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product Name",
        "Author",
        "Status",
        "Date Added",
        "message"
      ]
    },
    {
      "cells": [
        "Carss",
        "",
        "",
        "",
        "No results!"
      ]
    },
    {
      "cells": [
        "",
        "qwe",
        "",
        "",
        "No results!"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "2019/09/22",
        "No results!"
      ]
    }
  ]
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter functionality by invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filterInvalid"
    }
  ]
});
formatter.step({
  "name": "User enter Product \"Carss\" Author\"\" Status\"\" Date Added\"\" in Filter section",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Product_Author_Status_Date_Added_in_Filter_section(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Message \"No results!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter functionality by invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filterInvalid"
    }
  ]
});
formatter.step({
  "name": "User enter Product \"\" Author\"qwe\" Status\"\" Date Added\"\" in Filter section",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Product_Author_Status_Date_Added_in_Filter_section(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Message \"No results!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter functionality by invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filterInvalid"
    }
  ]
});
formatter.step({
  "name": "User enter Product \"\" Author\"\" Status\"\" Date Added\"2019/09/22\" in Filter section",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_enter_Product_Author_Status_Date_Added_in_Filter_section(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Message \"No results!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit functionality with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editReviewValid"
    }
  ]
});
formatter.step({
  "name": "User click on Edit button in Review page",
  "keyword": "Given "
});
formatter.step({
  "name": "User clear previous data record",
  "keyword": "When "
});
formatter.step({
  "name": "User enter new data for Author\"\u003cAuthor\u003e\" Product\"\u003cProduct\u003e\" Text\"\u003cText\u003e\" Rating\"\u003cRating\u003e\" Date Added\"\u003cDate Added\u003e\" Status\"\u003cStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.step({
  "name": "User can see Success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Author",
        "Product",
        "Text",
        "Rating",
        "Date Added",
        "Status"
      ]
    },
    {
      "cells": [
        "Rose",
        "Iphone",
        "Nice product",
        "4",
        "2021-11-06",
        "Enabled"
      ]
    }
  ]
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit functionality with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editReviewValid"
    }
  ]
});
formatter.step({
  "name": "User click on Edit button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Edit_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear previous data record",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_clear_previous_data_record()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter new data for Author\"Rose\" Product\"Iphone\" Text\"Nice product\" Rating\"4\" Date Added\"2021-11-06\" Status\"Enabled\"",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_enter_new_data_for_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Success message",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit functionality with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editReviewInvalid"
    }
  ]
});
formatter.step({
  "name": "User click on Edit button in Review page",
  "keyword": "Given "
});
formatter.step({
  "name": "User clear previous data record",
  "keyword": "When "
});
formatter.step({
  "name": "User enter new data for Author\"\u003cAuthor\u003e\" Product\"\u003cProduct\u003e\" Text\"\u003cText\u003e\" Rating\"\u003cRating\u003e\" Date Added\"\u003cDate Added\u003e\" Status\"\u003cStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.step({
  "name": "User stays on edit page and can not save details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Author",
        "Product",
        "Text",
        "Rating",
        "Date Added",
        "Status"
      ]
    },
    {
      "cells": [
        "$%!@",
        "Television",
        "@@@",
        "1",
        "06/11/2021",
        "Disabled"
      ]
    },
    {
      "cells": [
        "a",
        "Electronic",
        "m",
        "3",
        "22-10-2021",
        "Enabled"
      ]
    },
    {
      "cells": [
        "8797",
        "Television",
        "564",
        "4",
        "01-01-2021",
        "Disabled"
      ]
    },
    {
      "cells": [
        "wuyuq56",
        "Engagement Ring",
        "tu89",
        "5",
        "08/09/2021",
        "Enabled"
      ]
    }
  ]
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit functionality with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editReviewInvalid"
    }
  ]
});
formatter.step({
  "name": "User click on Edit button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Edit_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear previous data record",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_clear_previous_data_record()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter new data for Author\"$%!@\" Product\"Television\" Text\"@@@\" Rating\"1\" Date Added\"06/11/2021\" Status\"Disabled\"",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_enter_new_data_for_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User stays on edit page and can not save details",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_stays_on_edit_page_and_can_not_save_details()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.ReviewDefination.user_stays_on_edit_page_and_can_not_save_details(ReviewDefination.java:295)\r\n\tat ✽.User stays on edit page and can not save details(file:src/test/java/Feature/review.feature:101)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit functionality with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editReviewInvalid"
    }
  ]
});
formatter.step({
  "name": "User click on Edit button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Edit_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear previous data record",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_clear_previous_data_record()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter new data for Author\"a\" Product\"Electronic\" Text\"m\" Rating\"3\" Date Added\"22-10-2021\" Status\"Enabled\"",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_enter_new_data_for_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User stays on edit page and can not save details",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_stays_on_edit_page_and_can_not_save_details()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit functionality with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editReviewInvalid"
    }
  ]
});
formatter.step({
  "name": "User click on Edit button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Edit_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear previous data record",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_clear_previous_data_record()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter new data for Author\"8797\" Product\"Television\" Text\"564\" Rating\"4\" Date Added\"01-01-2021\" Status\"Disabled\"",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_enter_new_data_for_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User stays on edit page and can not save details",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_stays_on_edit_page_and_can_not_save_details()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.ReviewDefination.user_stays_on_edit_page_and_can_not_save_details(ReviewDefination.java:295)\r\n\tat ✽.User stays on edit page and can not save details(file:src/test/java/Feature/review.feature:101)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit functionality with invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editReviewInvalid"
    }
  ]
});
formatter.step({
  "name": "User click on Edit button in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Edit_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear previous data record",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_clear_previous_data_record()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter new data for Author\"wuyuq56\" Product\"Engagement Ring\" Text\"tu89\" Rating\"5\" Date Added\"08/09/2021\" Status\"Enabled\"",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_enter_new_data_for_Author_Product_Text_Rating_Date_Added_Status(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User stays on edit page and can not save details",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_stays_on_edit_page_and_can_not_save_details()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.ReviewDefination.user_stays_on_edit_page_and_can_not_save_details(ReviewDefination.java:295)\r\n\tat ✽.User stays on edit page and can not save details(file:src/test/java/Feature/review.feature:101)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deleteReview"
    }
  ]
});
formatter.step({
  "name": "User click on checkbox of a review in Review page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_checkbox_of_a_review_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Delete button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Ok in alert box",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Ok_in_alert_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Success message",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Order functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orderReview"
    }
  ]
});
formatter.step({
  "name": "User can see Review list table",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on Author table header in Review page",
  "keyword": "When "
});
formatter.step({
  "name": "User can see ordered Author\"\u003cAuthor\u003e\" column",
  "keyword": "And "
});
formatter.step({
  "name": "User click on Product table header in Review page",
  "keyword": "When "
});
formatter.step({
  "name": "User can see ordered Product\"\u003cProduct\u003e\" column",
  "keyword": "And "
});
formatter.step({
  "name": "User click on Rating table header in Review page",
  "keyword": "When "
});
formatter.step({
  "name": "User can see ordered Rating\"\u003cRating\u003e\" column",
  "keyword": "And "
});
formatter.step({
  "name": "User click on Date Added table header in Review page",
  "keyword": "When "
});
formatter.step({
  "name": "User can see ordered Date Added\"\u003cDate Added\u003e\" column",
  "keyword": "And "
});
formatter.step({
  "name": "User click on Status table header in Review page",
  "keyword": "When "
});
formatter.step({
  "name": "User can see ordered Status\"\u003cStatus\u003e\" column",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Author",
        "Product",
        "Rating",
        "Date Added",
        "Status"
      ]
    },
    {
      "cells": [
        "$%!@",
        "Television",
        "1",
        "06/11/2021",
        "Disabled"
      ]
    }
  ]
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Order functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orderReview"
    }
  ]
});
formatter.step({
  "name": "User can see Review list table",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Review_list_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Author table header in Review page",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Author_table_header_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see ordered Author\"$%!@\" column",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_ordered_Author_column(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Product table header in Review page",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Product_table_header_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see ordered Product\"Television\" column",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_ordered_Product_column(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Rating table header in Review page",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Rating_table_header_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see ordered Rating\"1\" column",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_ordered_Rating_column(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Date Added table header in Review page",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Date_Added_table_header_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see ordered Date Added\"06/11/2021\" column",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_ordered_Date_Added_column(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Status table header in Review page",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Status_table_header_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see ordered Status\"Disabled\" column",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_ordered_Status_column(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Pagination functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pagination"
    }
  ]
});
formatter.step({
  "name": "User is on the first page \"\u003cfirst page\u003e\" of Review list",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on button for second page",
  "keyword": "When "
});
formatter.step({
  "name": "User can see second page \"\u003csecond page\u003e\" of Review list",
  "keyword": "And "
});
formatter.step({
  "name": "User click on button for third page",
  "keyword": "When "
});
formatter.step({
  "name": "User can see third page \"\u003cthird page\u003e\" of Review list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first page",
        "second page",
        "third page"
      ]
    },
    {
      "cells": [
        "Showing 1 to 25",
        "Showing 26 to 50",
        "Showing 51 to"
      ]
    }
  ]
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pagination functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pagination"
    }
  ]
});
formatter.step({
  "name": "User is on the first page \"Showing 1 to 25\" of Review list",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_first_page_of_Review_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on button for second page",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_button_for_second_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see second page \"Showing 26 to 50\" of Review list",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_second_page_of_Review_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on button for third page",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_button_for_third_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see third page \"Showing 51 to\" of Review list",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_third_page_of_Review_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the website",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"Username\" \u0026 \"Password\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_enter(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Menu icon",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Catalog",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Catalog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Reviews",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Reviews Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Reviews_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cancel functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cancelButton"
    }
  ]
});
formatter.step({
  "name": "User is on the Review list page",
  "keyword": "Given "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_Review_list_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Add New button in Review page",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Add_New_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Add New Review page",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_Add_New_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Cancel button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Cancel_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Review list page",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.user_is_on_the_Review_list_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Edit button in Review page",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Edit_button_in_Review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Use can see edit review page",
  "keyword": "And "
});
formatter.match({
  "location": "ReviewDefination.use_can_see_edit_review_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Cancel button",
  "keyword": "When "
});
formatter.match({
  "location": "ReviewDefination.user_click_on_Cancel_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the Review list page again",
  "keyword": "Then "
});
formatter.match({
  "location": "ReviewDefination.user_can_see_the_Review_list_page_again()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});