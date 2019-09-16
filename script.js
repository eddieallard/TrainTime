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
var destination;
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
trainDesination = $("#destination-input").val().trim();
trainFrequency = $("#frequency-input").val().trim();
firstTrain = $("#time-input").val().trim();

console.log(trainName);

database.re().push({
    dbtrtainName: trainName,
    dbTrainDestination: trainDestination,
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
var tfirstTrain = snapshot.val().dbfirstTrain;

// Store everyhting into a variable
//nest arrival and miniates aways calulates here
var tr = $("<tr>");
// display results indside table
tr.append("<td>" + tName + "</td>"),
tr.append("<td>" + tDestination + "</td>"),
tr.append("<td>" + tFrequency + "</td>"),
tr.append("<td> to be calculated </td>"),
tr.append("<td> to be calculated </td>"),



$("tbody").append(tr)


//create vars to holds tables elements and content
// append all table data(td) to the table row (tr)
// append to the tbody element



});


});





