Feature: Search Neutrogena product
The customers search products


Background: 
Given I navigate to the Web Page
And I click the cookiy button


Scenario: Search Neutrogena product
When Customer should see the Neutrogena product:
    |  Weleda EN          |
    |  XLS Medical EN     |
    |  Avene EN           |
    |  Neutrogena EN      |
    |  Waterpik EN        |
    |  NUXE EN            |
    |  CeraVe EN          |
    |  La Roche Posay EN  |
And Customer selects the "Neutrogena" product from the Headroom
Then User should see the text "Neutrogena® products"
