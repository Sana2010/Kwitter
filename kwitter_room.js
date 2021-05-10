//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyATzhV-dA016t-5uyR5Om2LsPfq3eqUYHM",
    authDomain: "kwitter-b4404.firebaseapp.com",
    databaseURL: "https://kwitter-b4404-default-rtdb.firebaseio.com",
    projectId: "kwitter-b4404",
    storageBucket: "kwitter-b4404.appspot.com",
    messagingSenderId: "182974923609",
    appId: "1:182974923609:web:f11cce7be195e344400248",
    measurementId: "G-LGQ2B449W6"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html";

}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;

childKey  = childSnapshot.key;
Room_names = childKey;

console.log("room name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
});
});
}

getData();

function redirectToRoomName(name)
{
console.log(name); 
localStorage.setItem("room_name",name); 
window.location = "kwitter_page.html"; 
} 

function logout() 
{ 
localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name"); 
window.location = "index.html"; 
}