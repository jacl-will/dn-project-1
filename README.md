__Project 1 : Date Night__
===============================

__Description__
----------------
Date Night is a tool that couples, friends, and families can use to decide on a date/activity to do when everyone isn't sure, or can't agree on one. It makes the choice for you to give you more time to enjoy your date rather than be stuck in the planning phase. 

How it does this is by allowing the user to add their own ideas to a basic list of dates. Once the list is to their liking then they will click the button that will randomly select the date for them. 

They can hover over the dates to get an idea of what they can do if that date gets chosen. 

Video walkthrough here: [https://youtu.be/qcoyom13ppc]

__How to contribute__
---------------------
The code is connected to a db.json file. In order to contribute to this project you would need to download JSON server. 

_Setting up JSON Server_:
---
Information gathered from [https://www.digitalocean.com/community/tutorials/json-server]
To install JSON Server you will enter the below command into your terminal.

 `$ npm install -g json-server`

 Now you shoud be able to create a mock json server or add to the one listed within the db.json file. To do this you would format the data as follows:

 `"dates": [
    {
      "id": #,
      "dateName": "Name of date idea",
      "description": "Description of date idea."
    },
    {
      "id": #,
      "dateName": "Name of date idea",
      "description": "Description of date idea."
    },]`

In order to view the app with the information being pulled from the db.json file you will need to enter the following command: 

`json-server --watch db.json` 

This will open up the app with the fetched information from the json file. 

__Future desires for this project__ 
--------------
* Adding ability to delete dates from list that user does not want 
* Adding visual elements that would make the app more appealing such as pictures, pop up element once date is selected, and more
* Adding ability for users to put in preferences (such as price range, family friendly, seasonal, and more) or necessities (such as date accessibility for those with neurodivergences, physical disabilities and more)
* Add a feature that allows for local events to be added when user chooses to input zipcode


