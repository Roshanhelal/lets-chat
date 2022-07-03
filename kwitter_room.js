

// Your web app's Firebase configuration


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAHPtaCD_R0sRbn1wwBtRiu1kVlbwBXhZc",
  authDomain: "kwitter-c8c03.firebaseapp.com",
  databaseURL: "https://kwitter-c8c03-default-rtdb.firebaseio.com",
  projectId: "kwitter-c8c03",
  storageBucket: "kwitter-c8c03.appspot.com",
  messagingSenderId: "512890914691",
  appId: "1:512890914691:web:0001c2c0e37e5d803f58b6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  })
  localStorage.setItem("room_name", room_name)
  window.location="kwitter_page.html"
}

// Initialize Firebase
 initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
  window.location="index.html";
}


