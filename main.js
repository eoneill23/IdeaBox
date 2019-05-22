var titleInput = document.getElementById('idea-title-input');

var bodyInput = document.getElementById('idea-body-input');

var saveBtn = document.getElementById('save-btn');

var searchBtn = document.getElementById('search-btn');

var searchInput = document.getElementById('search-input');

var mainContent = document.getElementById('main');

var userPrompt = document.getElementById('user-prompt-text')

titleInput.addEventListener('keyup', enableSaveBtn);

bodyInput.addEventListener('keyup', enableSaveBtn)

function enableSaveBtn() {
  saveBtn.disabled = false;
  disableSaveBtn();
}

function disableSaveBtn() {
  if (titleInput.value === "" || bodyInput.value === "") {
    saveBtn.disabled = true;
  }
}

saveBtn.addEventListener('click', saveIdea)

function saveIdea() {
  event.preventDefault();
  var titleInputValue = titleInput.value;
  var bodyInputValue = bodyInput.value;
  var uniqueId = Date.now();
  var newIdea = new Idea(titleInputValue, bodyInputValue, uniqueId);
  var stringifiedIdea = stringifyIdea(newIdea);
  newIdea.saveToStorage(stringifiedIdea);
  appendCard();
  clearFields();
  disableSaveBtn();
  console.log(newIdea)
};

function appendCard() {
  userPrompt.classList.add('hidden');
  mainContent.insertAdjacentHTML('afterbegin', `<article>
      <header>
        <img src="images/star.svg" alt="Star rating" id="white-star-img">
        <img src="images/delete.svg" alt="Delete x" id="white-x-img">
      </header>
      <main id="card-body">
        <h3 id="idea-title-output">${titleInput.value}</h3>
        <p id="idea-body-output">
          ${bodyInput.value}
        </p>
      </main>
      <footer>
        <img src="images/upvote.svg" alt="Quality upvote button" id="white-upvote-img">
        <p>Quality: Swill</p>
        <img src="images/downvote.svg" alt="Quality downvote button" id="white-downvote-img">
      </footer>
    </article>`)
}

function clearFields() {
  titleInput.value = '';
  bodyInput.value = '';
}

function stringifyIdea(idea){
  var stringifiedIdea = JSON.stringify(idea);

  console.log('hello');
  return stringifiedIdea;
}
