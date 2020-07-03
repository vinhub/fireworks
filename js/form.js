function openPersonalizeForm() {
  closeAboutPopup();
  document.getElementById('personalizeForm').style.display = 'block';
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
