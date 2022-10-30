$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E2Etests.feature");
formatter.feature({
  "line": 1,
  "name": "KSRTC Login Functionality",
  "description": "",
  "id": "ksrtc-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Login into KSRTC",
  "description": "",
  "id": "ksrtc-login-functionality;login-into-ksrtc",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User clicks on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters username and password from given sheetname \"\u003cSheetName\u003e\" and rownumber \"\u003cRowNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "appropriate login message should be displayed on screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "ksrtc-login-functionality;login-into-ksrtc;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 15,
      "id": "ksrtc-login-functionality;login-into-ksrtc;;1"
    },
    {
      "cells": [
        "LoginData",
        "0"
      ],
      "line": 16,
      "id": "ksrtc-login-functionality;login-into-ksrtc;;2"
    },
    {
      "cells": [
        "LoginData",
        "1"
      ],
      "line": 17,
      "id": "ksrtc-login-functionality;login-into-ksrtc;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4136710100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to KSRTC Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_KSRTC_Website()"
});
formatter.result({
  "duration": 31099763700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login into KSRTC",
  "description": "",
  "id": "ksrtc-login-functionality;login-into-ksrtc;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User clicks on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters username and password from given sheetname \"LoginData\" and rownumber \"0\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "appropriate login message should be displayed on screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_SignIn_Button()"
});
formatter.result({
  "duration": 8047699700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginData",
      "offset": 56
    },
    {
      "val": "0",
      "offset": 82
    }
  ],
  "location": "LoginSteps.user_enters_username_and_password_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 794311700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 4146788700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.appropriate_login_message_should_be_displayed_on_screen()"
});
formatter.result({
  "duration": 647014300,
  "status": "passed"
});
formatter.after({
  "duration": 8819286700,
  "status": "passed"
});
formatter.before({
  "duration": 2029436100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to KSRTC Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_KSRTC_Website()"
});
formatter.result({
  "duration": 41657389900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login into KSRTC",
  "description": "",
  "id": "ksrtc-login-functionality;login-into-ksrtc;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User clicks on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters username and password from given sheetname \"LoginData\" and rownumber \"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "appropriate login message should be displayed on screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_SignIn_Button()"
});
formatter.result({
  "duration": 15502045400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LoginData",
      "offset": 56
    },
    {
      "val": "1",
      "offset": 82
    }
  ],
  "location": "LoginSteps.user_enters_username_and_password_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 218060600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 3481398400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.appropriate_login_message_should_be_displayed_on_screen()"
});
formatter.result({
  "duration": 10985373800,
  "status": "passed"
});
formatter.after({
  "duration": 2866418000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Search for a Bus",
  "description": "",
  "id": "ksrtc-login-functionality;search-for-a-bus",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@searchbus"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user enters all the trip details from given sheetname \"\u003cSheetName\u003e\" and rownumber \"\u003cRowNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Search Button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user should be successfully navigated to Search Bus Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "ksrtc-login-functionality;search-for-a-bus;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 26,
      "id": "ksrtc-login-functionality;search-for-a-bus;;1"
    },
    {
      "cells": [
        "TripDetails",
        "0"
      ],
      "line": 27,
      "id": "ksrtc-login-functionality;search-for-a-bus;;2"
    },
    {
      "cells": [
        "TripDetails",
        "1"
      ],
      "line": 28,
      "id": "ksrtc-login-functionality;search-for-a-bus;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3066373300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to KSRTC Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_KSRTC_Website()"
});
formatter.result({
  "duration": 14392605700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Search for a Bus",
  "description": "",
  "id": "ksrtc-login-functionality;search-for-a-bus;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@searchbus"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user enters all the trip details from given sheetname \"TripDetails\" and rownumber \"0\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Search Button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user should be successfully navigated to Search Bus Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TripDetails",
      "offset": 55
    },
    {
      "val": "0",
      "offset": 83
    }
  ],
  "location": "SearchBusSteps.user_enters_all_the_trip_details_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 3761508400,
  "status": "passed"
});
formatter.match({
  "location": "SearchBusSteps.user_clicks_on_Search_Button()"
});
formatter.result({
  "duration": 6484753500,
  "status": "passed"
});
formatter.match({
  "location": "SearchBusSteps.user_should_be_successfully_navigated_to_Search_Bus_Page()"
});
formatter.result({
  "duration": 339922500,
  "status": "passed"
});
formatter.after({
  "duration": 5631303000,
  "status": "passed"
});
formatter.before({
  "duration": 3646966300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User navigates to KSRTC Website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_KSRTC_Website()"
});
formatter.result({
  "duration": 37666111000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Search for a Bus",
  "description": "",
  "id": "ksrtc-login-functionality;search-for-a-bus;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@searchbus"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user enters all the trip details from given sheetname \"TripDetails\" and rownumber \"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on Search Button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user should be successfully navigated to Search Bus Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TripDetails",
      "offset": 55
    },
    {
      "val": "1",
      "offset": 83
    }
  ],
  "location": "SearchBusSteps.user_enters_all_the_trip_details_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 3956890300,
  "status": "passed"
});
formatter.match({
  "location": "SearchBusSteps.user_clicks_on_Search_Button()"
});
formatter.result({
  "duration": 2677719900,
  "status": "passed"
});
formatter.match({
  "location": "SearchBusSteps.user_should_be_successfully_navigated_to_Search_Bus_Page()"
});
formatter.result({
  "duration": 270931900,
  "status": "passed"
});
formatter.after({
  "duration": 3765286000,
  "status": "passed"
});
});