function openCreateForm() {
  closeCreditsPopup();
  document.getElementById('createForm').style.display = 'block';
}

function closeCreateForm() {
  document.getElementById('createForm').style.display = 'none';
}

function openCreditsPopup() {
  closeCreateForm();
  document.getElementById('creditsPopup').style.display = 'block';
}

function closeCreditsPopup() {
  document.getElementById('creditsPopup').style.display = 'none';
}
