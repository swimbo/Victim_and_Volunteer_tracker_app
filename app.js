var VictimQty = prompt("How many disaster victims do you wish to enter?","e.g. 23")

var vicArray1 = []
var vicArray2 = []
var vicArray3 = []

for(i = 0; i < VictimQty; i++){
  vicArray1.push(prompt("Their name","e.g. Joe Smith"))
  vicArray2.push(prompt("Their phone number","555-555-5555"))
  vicArray3.push(prompt("Their street address","e.g. 1234 Busted Home Blvd"))
}

var VolunteerQty = prompt("How many volunteers do you wish to enter?","e.g. 23")
var Volunteer1 = []
var Volunteer2 = []
var Volunteer3 = []

for(i = 0; i < VolunteerQty; i++){
  vicArray1.push(prompt("Their name","e.g. Joe Smith"))
  vicArray2.push(prompt("Their phone number","555-555-5555"))
  vicArray3.push(prompt("Their street address","e.g. 1234 Busted Home Blvd"))
}

// Requirements
// Create a Javascript application (A Javascript-driven web page. Just set up your basic HTML and a script tag that will run your script on page load.) that allows the user to match people in need with volunteers during a disaster relief effort.
//
// First prompt the user to ask how many disaster victims they wish to enter.
// For each disaster victim that will be added, prompt the user to enter their name, phone number, and street. You don't need to validate the information. Add each newly entered user to three arrays, one for each piece of information, using array.push.
//
// ? Think! How will you know how many times to prompt the user for a name/phone/street? How can you make this dynamic so that it works for any number of people?
//
// Repeat steps 1 and 2, but this time you are asking for volunteers. You'll need a separate set of arrays.
//
// ? Note: There is an easier way to store this info than in 3 separate arrays for each set of people. We'll learn how to do that when we cover objects. Bonus: Implement this exercise using only 2 total arrays of objects.
//
// At the end, print out, in a single alert, the number of persons in need, the number of volunteers, and a list of all persons in need and all volunteers. You may format this in any way that looks reasonable.
