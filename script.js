$(document).ready(function() {

    var firebaseConfig = {
        apiKey: "AIzaSyASRk4gxerHvVRp80Gy0xKomhljHIIveJw",
        authDomain: "choo-choo-22ed0.firebaseapp.com",
        databaseURL: "https://choo-choo-22ed0.firebaseio.com",
        projectId: "choo-choo-22ed0",
        storageBucket: "",
        messagingSenderId: "391822017201",
        appId: "1:391822017201:web:514fd5eda640e4a1a19890"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// GET A REFERENCE TO THE DATABASE
var database = firebase.database();

// GLOBAL VARIABLES
var trainName;
var trainDestination;
var trainFrequency;
var firstTrain;

// EVERYTHING ABOVE ^^^^ GOES IN THE DATABASE
var trainNextArrival;
var trainMinutesAway;

// POPULATE FIREBASE DATABASE WITH INITIAL DATA

// CREATE ON CLICK EVENT TO CAPTURE FORM VALUES
$("#add-train").on("click", function(event) {

  event.preventDefault();

  trainName = $("#train-input").val().trim();
  trainDestination = $("#destination-input").val().trim();
  trainFrequency = $("#frequency-input").val().trim();
  firstTrain = $("#time-input").val().trim();

  console.log(trainName);
  console.log(trainDestination);
  console.log(trainFrequency);
  console.log(firstTrain);


  database.ref().push({

    dbtrainName: trainName,
    dbtrainDestination: trainDestination,
    dbtrainFrequency: trainFrequency,
    dbfirstName: firstTrain

  })
    alert("Train added...!")

  $("#train-input").val("");
  $("#destination-input").val("");
  $("#frequency-input").val("");
  $("#time-input").val("");

});

database.ref().on("#child_added", function(snapshot) {
// CONSOLE LOG DATA
console.log(snapshot.value());


var tName = snapshot.val().dbtrainName;
var tDestination = snapshot.val().dbTrainDestination;
var tFrequency = snapshot.val().dbtrainFrequency;
var tFirstTrain = snapshot.val().dbfirstTrain;

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(tFirstTrain, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

// Store everyhting into a variable
//nest arrival and miniates aways calulates here
var tr = $("<tr>");
// display results indside table
tr.append("<td>" + tName + "</td>"),
tr.append("<td>" + tDestination + "</td>"),
tr.append("<td>" + tFrequency + "</td>"),
tr.append("<td>" + moment(nextTrain).format("hh:mm") + "</td>"),
tr.append("<td>" + tMinutesTillTrain + "</td>"),



$("tbody").append(tr)


//create vars to holds tables elements and content
// append all table data(td) to the table row (tr)
// append to the tbody element



});


});





