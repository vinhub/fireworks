function openPersonalizeForm() {
  closeAboutPopup();
  document.getElementById('personalizeForm').style.display = 'block';
  
  const urlParams = new URLSearchParams(window.location.search);
  var name = urlParams.get('name');
  var message = urlParams.get('message');

  if (!name)
    name = 'Vin Bhalerao';

  if (!message)
    message = 'Happy Independence Day!';
    
  document.getElementById('name').value = name;
  document.getElementById('message').value = message;
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
