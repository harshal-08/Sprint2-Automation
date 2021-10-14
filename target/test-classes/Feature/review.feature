#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Review feature in Retail website

  Background: Login Functionality
    Given User is on the website
    When User enter "Username" & "Password"
    And User click on Login button
    And User can see the dashboard
    When User click on Menu icon
    And User click on Catalog
    And User click on Reviews
    Then User can see Reviews Page

  @newReviewValid
  Scenario Outline: Add New Review functionality with valid data
    Given User click on Add New button in Review page
    When User enter Author"<Author>" Product"<Product>" Text"<Text>" Rating"<Rating>" Date Added"<Date Added>" Status"<Status>"
    And User click on Save button
    Then User can see Success message

    Examples: 
      | Author | Product         | Text | Rating | Date Added          | Status   |
      | abcd   | Ring            | xyz  |      1 | 2021-10-07 09:19:46 | Disabled |
      | elle   | Engagement Ring | good |      4 | 2021-09-01          | Disabled |

  @newReviewInvalid
  Scenario Outline: Add New Review functionality with invalid data
    Given User click on Add New button in Review page
    When User enter Author"<Author>" Product"<Product>" Text"<Text>" Rating"<Rating>" Date Added"<Date Added>" Status"<Status>"
    And User click on Save button
    Then User stays on same page and can not save details

    Examples: 
      | Author | Product         | Text | Rating | Date Added | Status   |
      | $%!@   | Iphone          | @@$  |      2 | 2021-11-06 | Enabled  |
      | a      | Electronic      | m    |      3 | 22-10-2021 | Enabled  |
      |    123 | Television      |  564 |      4 | 01-01-2021 | Disabled |
      | we56   | Engagement Ring | tu89 |      5 | 08/09/2021 | Enabled  |

  @filterValid
  Scenario Outline: Filter functionality by valid data
    Given User enter Product "<Product Name>" Author"<Author>" Status"<Status>" Date Added"<Date Added>" in Filter section
    When User click on filter button
    Then User can see filtered result record of "<Product Name>" Author"<Author>" Status"<Status>" Date Added Table"<Date Added Table>" in Review list table

    Examples: 
      | Product Name    | Author | Status   | Date Added | Date Added Table |
      | Engagement Ring |        |          |            |                  |
      |                 | elle   |          |            |                  |
      |                 |        | Disabled |            |                  |
      |                 |        |          | 2021-09-01 | 01/09/2021       |
      | Engagement Ring | elle   | Disabled | 2021-09-01 | 01/09/2021       |

  @filterInvalid
  Scenario Outline: Filter functionality by invalid data
    Given User enter Product "<Product Name>" Author"<Author>" Status"<Status>" Date Added"<Date Added>" in Filter section
    When User click on filter button
    Then User can see Message "<message>"

    Examples: 
      | Product Name | Author | Status | Date Added | message     |
      | Carss        |        |        |            | No results! |
      |              | qwe    |        |            | No results! |
      |              |        |        | 2019/09/22 | No results! |

  @editReviewValid
  Scenario Outline: Edit functionality with valid data
    Given User click on Edit button in Review page
    When User clear previous data record
    And User enter new data for Author"<Author>" Product"<Product>" Text"<Text>" Rating"<Rating>" Date Added"<Date Added>" Status"<Status>"
    And User click on Save button
    Then User can see Success message

    Examples: 
      | Author | Product | Text         | Rating | Date Added | Status  |
      | Rose   | Iphone  | Nice product |      4 | 2021-11-06 | Enabled |

  @editReviewInvalid
  Scenario Outline: Edit functionality with invalid data
    Given User click on Edit button in Review page
    When User clear previous data record
    And User enter new data for Author"<Author>" Product"<Product>" Text"<Text>" Rating"<Rating>" Date Added"<Date Added>" Status"<Status>"
    And User click on Save button
    Then User stays on edit page and can not save details

    Examples: 
      | Author  | Product         | Text | Rating | Date Added | Status   |
      | $%!@    | Television      | @@@  |      1 | 06/11/2021 | Disabled |
      | a       | Electronic      | m    |      3 | 22-10-2021 | Enabled  |
      |    8797 | Television      |  564 |      4 | 01-01-2021 | Disabled |
      | wuyuq56 | Engagement Ring | tu89 |      5 | 08/09/2021 | Enabled  |

  @deleteReview
  Scenario: Delete functionality
    Given User click on checkbox of a review in Review page
    When User click on Delete button
    And User click on Ok in alert box
    Then User can see Success message

  @orderReview
  Scenario Outline: Order functionality
    Given User can see Review list table
    When User click on Author table header in Review page
    And User can see ordered Author"<Author>" column
    When User click on Product table header in Review page
    And User can see ordered Product"<Product>" column
    When User click on Rating table header in Review page
    And User can see ordered Rating"<Rating>" column
    When User click on Date Added table header in Review page
    And User can see ordered Date Added"<Date Added>" column
    When User click on Status table header in Review page
    Then User can see ordered Status"<Status>" column

    Examples: 
      | Author | Product    | Rating | Date Added | Status   |
      | $%!@   | Television |      1 | 06/11/2021 | Disabled |

  @pagination
  Scenario Outline: Pagination functionality
    Given User is on the first page "<first page>" of Review list
    When User click on button for second page
    And User can see second page "<second page>" of Review list
    When User click on button for third page
    Then User can see third page "<third page>" of Review list

    Examples: 
      | first page      | second page      | third page    |
      | Showing 1 to 25 | Showing 26 to 50 | Showing 51 to |

  @cancelButton
  Scenario: Cancel functionality
    Given User is on the Review list page
    When User click on Add New button in Review page
    And User can see Add New Review page
    When User click on Cancel button
    And User is on the Review list page
    When User click on Edit button in Review page
    And Use can see edit review page
    When User click on Cancel button
    Then User can see the Review list page again
