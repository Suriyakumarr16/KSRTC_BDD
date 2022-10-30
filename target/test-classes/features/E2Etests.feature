Feature: KSRTC Login Functionality 

Background: 
Given User navigates to KSRTC Website 
	

@login
Scenario Outline: Login into KSRTC 
And User clicks on SignIn Button 
And User enters username and password from given sheetname "<SheetName>" and rownumber "<RowNumber>"
When user clicks on the login button 
Then appropriate login message should be displayed on screen 
	
Examples: 
| SheetName | RowNumber | 
| LoginData | 0         | 
| LoginData | 1         |

@searchbus 
Scenario Outline: Search for a Bus 
And user enters all the trip details from given sheetname "<SheetName>" and rownumber "<RowNumber>"
When user clicks on Search Button 
Then user should be successfully navigated to Search Bus Page 
			
Examples: 
| SheetName   | RowNumber | 
| TripDetails | 0         | 
| TripDetails | 1         |
				
				      
 