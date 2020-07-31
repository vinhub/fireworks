function openPersonalizeForm() {
  closeAboutPopup();
  document.getElementById('personalizeForm').style.display = 'block';
  
  const urlParams = new URLSearchParams(window.location.search);
  var name = urlParams.get('name');
  var message = urlParams.get('message');
  var city = urlParams.get('city');

  if (!name)
    name = 'Vin Bhalerao';

  if (!message)
    message = 'Happy Independence Day!';
    
  if (!city)
    city = 'Seattle';
    
  document.getElementById('name').value = name;
  document.getElementById('message').value = message;
  document.getElementById('city').value = city;
}

function closePersonalizeForm() {
  document.getElementById('personalizeForm').style.display = 'none';
}

function openAboutPopup() {
  closePersonalizeForm();
  document.getElementById('aboutPopup').style.display = 'block';
}

function closeAboutPopup() {
  document.getElementById('aboutPopup').style.display = 'none';
}
