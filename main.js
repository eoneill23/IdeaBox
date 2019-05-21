var titleInput = document.getElementById('idea-title-input');

var bodyInput = document.getElementById('idea-body-input');

var saveBtn = document.getElementById('save-btn');

var searchBtn = document.getElementById('search-btn');

var searchInput = document.getElementById('search-input');

titleInput.addEventListener('keyup', enableSaveBtn)

bodyInput.addEventListener('keyup', enableSaveBtn)

function enableSaveBtn(){
  saveBtn.disabled = false;
  disableSaveBtn();
}

function disableSaveBtn(){
  if (titleInput.value === "" || bodyInput.value === "") {
    saveBtn.disabled = true;
  }
}