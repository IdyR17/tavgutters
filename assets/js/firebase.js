(function(){
var config =  {
  apiKey: "AIzaSyCu2IOejMAhqpnkUjG2JYuznne6B_8wLns",
  authDomain: "tavgutters-f8da8.firebaseapp.com",
  databaseURL: "https://tavgutters-f8da8.firebaseio.com",
  projectId: "tavgutters-f8da8",
  storageBucket: "tavgutters-f8da8.appspot.com",
  messagingSenderId: "103649998343"
};

firebase.initializeApp(config);

var db = firebase.database();
var googleProvider = new firebase.auth.GoogleAuthProvider();

function googleSignIn(){
  firebase
  .auth()
  .signInWithPopup(googleProvider).then(function(result) {
    location.href = location.href + 'user'
      // var token = result.credential.accessToken;
      // var user = result.user;
    
      // console.log(token)
      // console.log(user)
  }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
  });
}

var loginButton = document.getElementsByClassName('login-btn')[0]

loginButton.addEventListener('click', googleSignIn)
}())