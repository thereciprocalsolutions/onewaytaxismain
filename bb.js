var firebaseConfig = {
  apiKey: "AIzaSyCs942o5j1RaeMeWNZdMA_EoKEWSL_H6Ao",
  authDomain: "contactform-4160c.firebaseapp.com",
  databaseURL: "https://contactform-4160c.firebaseio.com",
  projectId: "contactform-4160c",
  storageBucket: "contactform-4160c.appspot.com",
  messagingSenderId: "289550506731",
  appId: "1:289550506731:web:4b58222da2294a78237cae"
};
  firebase.initializeApp(firebaseConfig);

  
  // Reference messages collection
  var messagesRef = firebase.database().ref('taxi-book');
  
  // Listen for form submit
  document.getElementById('bookingForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var pickup = getInputVal('pickup');
    var drop = getInputVal('drop');
    var time = getInputVal('time');
    var date = getInputVal('date');
    var ser = getInputVal('ser');
    var cars = getInputVal('cars');
  
  
    // Save message
    saveMessage(name, phone, pickup, drop, date, time, ser, cars);
   alert("You're Booking has been submitted.Soon we'll contact you Or You can contact us on whatsapp anytime.");
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    
  
    // Hide alert after 3 seconds
    setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
    },7000);
    
    //window.open('bookingSuccess.html', '_blank');
  
    // Clear form
    document.getElementById('bookingForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, phone, pickup, drop, date, time, ser, cars){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:name,
      phone:phone,
      pickup:pickup,
      drop:drop,
      date:date,
      time:time,
      ser:ser,
      cars:cars
    });
  }
