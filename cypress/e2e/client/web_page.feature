
Feature: Visit Web Page
The online store customers can see the pages to select products.

Background: 
Given I navigate to the Web Page
And I click the cookiy button

@focus 
Scenario: Customer can see the title and Search bar
Then I should see the title "PromoFarma"
And I should see the search bar "Search from among 150.000 products from over 7.000 brands"


@focus 
Scenario Outline: User can see the Menu Area and <dropdown>
When User see in the header icon "categories" and wraper icon
And In the wraper icon user can select the "dropdown"
And the <dropdown> User should see the field
Then User should be see "My account" and "My basket"
Examples:
 | dropdown            |
 | Beauty and Skincare |
 | Health              |
 | Hygiene             |
 | Dietetics           |
 | Babies and Mums     |
 | Opticians           |
 | Orthopedics         |
 | Herbalist           |
 | Natural Cosmetics   |
#  |  Offers             |
#  |  Brands             |
#  |  Best sellers       |
