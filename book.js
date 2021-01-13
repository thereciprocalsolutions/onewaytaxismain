var firebaseConfig = {
    apiKey: "AIzaSyCs942o5j1RaeMeWNZdMA_EoKEWSL_H6Ao",
    authDomain: "contactform-4160c.firebaseapp.com",
    databaseURL: "https://contactform-4160c.firebaseio.com",
    projectId: "contactform-4160c",
    storageBucket: "contactform-4160c.appspot.com",
    messagingSenderId: "289550506731",
    appId: "1:289550506731:web:884703b5cddff91c237cae"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('onwaytaxis-bookingform');
  
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
  
  
    // Save message
    saveMessage(name, phone, pickup, drop, date, time);
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
  function saveMessage(name, phone, pickup, drop, date, time){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:name,
      phone:phone,
      pickup:pickup,
      drop:drop,
      date:date,
      time:time,
    });

    var result = 'Customer Name:  ' + name + '%0APhone Number: ' + phone +'%0APickup Location: ' + pickup+  '%0ADrop Location: ' + drop + '%0APickup Date: ' + date +'%0APickup Time: '+time;

    const request = new XMLHttpRequest();
					  const url = 'https://api.telegram.org/bot1406227246:AAE8E0duxxALW69up2zZnvBWYtayQbUfJBI/sendMessage?chat_id=-1001423454167&text='+result;
			
					  request.open("post", url);
					  request.send();
            window.open('#', '_self');
          

  }
