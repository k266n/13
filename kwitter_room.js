const firebaseConfig = {
      apiKey: "AIzaSyA8Klh9Jetn-6eN9eD7DMI6UAapKqu2BQc",
      authDomain: "yyyy-8db90.firebaseapp.com",
      databaseURL: "https://yyyy-8db90-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "yyyy-8db90",
      storageBucket: "yyyy-8db90.appspot.com",
      messagingSenderId: "683484301713",
      appId: "1:683484301713:web:71f6804a2b64b766643230",
      measurementId: "G-N1LKVYLLEK"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            RN:room_name
      });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
