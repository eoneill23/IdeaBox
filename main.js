var titleInput = document.getElementById('idea-title-input');

var bodyInput = document.getElementById('idea-body-input');

var saveBtn = document.getElementById('save-btn');

var searchBtn = document.getElementById('search-btn');

var searchInput = document.getElementById('search-input');

var mainContent = document.getElementById('main');

var userPrompt = document.getElementById('user-prompt-text');

var ideas = JSON.parse(localStorage.getItem('ideaArray')) || [];

var mainSection = document.getElementById('main');

// var card = document.querySelector('article');
// card.dataset.id

titleInput.addEventListener('keyup', enableSaveBtn);

bodyInput.addEventListener('keyup', enableSaveBtn);

saveBtn.addEventListener('click', saveIdea);

// mainSection.addEventListener('click')

window.addEventListener('load', recallIdeas);

function enableSaveBtn() {
  saveBtn.disabled = false;
  disableSaveBtn();
}

function disableSaveBtn() {
  if (titleInput.value === "" || bodyInput.value === "") {
    saveBtn.disabled = true;
  }
}

function createIdeaObj() {
  var uniqueId = Date.now();
  var titleInputValue = titleInput.value;
  var bodyInputValue = bodyInput.value;
  var obj = {
    id: uniqueId,
    title: titleInputValue,
    body: bodyInputValue
  }
  return obj
} 

function saveIdea() {
  event.preventDefault();
  var ideaObj = createIdeaObj();
  var newIdea = new Idea(ideaObj);
  appendCard(newIdea);
  ideas.push(newIdea);
  var allIdeas = JSON.stringify(ideas);
  newIdea.saveToStorage(allIdeas);
  clearFields();
  disableSaveBtn();
};

function appendCard(idea) {
  userPrompt.classList.add('hidden');
  mainContent.insertAdjacentHTML('afterbegin', `<article data-id="${idea.id}">
      <header>
        <img src="images/star.svg" alt="Star rating" id="white-star-img">
        <img src="images/delete.svg" alt="Delete x" id="white-x-img">
      </header>
      <main id="card-body">
        <h3 id="idea-title-output">${idea.title}</h3>
        <p id="idea-body-output">
          ${idea.body}
        </p>
      </main>
      <footer>
        <img src="images/upvote.svg" alt="Quality upvote button" id="white-upvote-img">
        <p>Quality: Swill</p>
        <img src="images/downvote.svg" alt="Quality downvote button" id="white-downvote-img">
      </footer>
    </article>`)
}

function persistCard(title, body) {
  userPrompt.classList.add('hidden');
  mainContent.insertAdjacentHTML('afterbegin', `<article>
      <header>
        <img src="images/star.svg" alt="Star rating" id="white-star-img">
        <img src="images/delete.svg" alt="Delete x" id="white-x-img">
      </header>
      <main id="card-body">
        <h3 id="idea-title-output">${title}</h3>
        <p id="idea-body-output">
          ${body}
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

function recallIdeas() {
  for (var i=0; i < ideas.length; i++) {
    var reconstructedIdea = new Idea(ideas[i])
    persistCard(reconstructedIdea.title, reconstructedIdea.body);
  }
}