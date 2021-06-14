//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCRNukC3iK4oOSA06euYwisc30jw33Ur1I",
    authDomain: "kwitter-65a68.firebaseapp.com",
    databaseURL: "https://kwitter-65a68-default-rtdb.firebaseio.com",
    projectId: "kwitter-65a68",
    storageBucket: "kwitter-65a68.appspot.com",
    messagingSenderId: "791163848417",
    appId: "1:791163848417:web:041c8c78979b1323d199a0",
    measurementId: "G-3ZJL4D3FDX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push ({
       name:user_name,
       message:msg,   
       like:0
    });

    document.getElementById("msg").value = "";
}
