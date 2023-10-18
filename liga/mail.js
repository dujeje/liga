  const firebaseConfig = {
    apiKey: "AIzaSyCkvnRCI9cAPzbno-yKn-Eo36NWjvqB41Q",
    authDomain: "liga-1222a.firebaseapp.com",
    databaseURL: "https://liga-1222a-default-rtdb.firebaseio.com",
    projectId: "liga-1222a",
    storageBucket: "liga-1222a.appspot.com",
    messagingSenderId: "367341370369",
    appId: "1:367341370369:web:d13ac8029399ff11b11400"
  };

  firebase.initializeApp(firebaseConfig);

  const competitionFormDB = firebase.database().ref('competitionForm');

  document.getElementById("competitionForm").addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    var competitionName = getElementVal('competition-name');
    var competitors = getElementVal('competitors');
    var scoringSystem = getElementVal('scoring-system');

    console.log(competitionName, competitors, scoringSystem);

  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }