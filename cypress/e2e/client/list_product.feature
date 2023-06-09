Feature: List Products
The online store customers can check the List all products 
in section Categories and Apply filter.

Background: 
Given I navigate to the Web Page
And I click the cookiy button
@focus 
Scenario: The user chooses in the Categories Section
When User see in the header icon "categories" and wraper icon
And In the wraper icon user can select the "dropdown"
And The section Categories user select the "Health"
Then User click the title "Mood"
And View the Mood section
And The user must apply the "A-Z" filte


Scenario: User can select the Categories Section
When User see in the header icon "categories" and wraper icon
And In the wraper icon user can select the "dropdown"
And The section Categories user select the "Health"
Then User should see the following fields in the form:
| Aromatherapy      |
| Bone care         |
| Circulatory care  |
| Digestive care    |
| Ear care          |
| First-aid kit     |
| Infusions         |
| Measuring devices |
| Mood              |

