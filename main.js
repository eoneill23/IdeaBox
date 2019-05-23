var titleInput = document.getElementById('idea-title-input');

var bodyInput = document.getElementById('idea-body-input');

var saveBtn = document.getElementById('save-btn');

var searchBtn = document.getElementById('search-btn');

var searchInput = document.getElementById('search-input');

var mainContent = document.getElementById('main');

var userPrompt = document.getElementById('user-prompt-text');

var ideas = JSON.parse(localStorage.getItem('ideaArray')) || [];

titleInput.addEventListener('keyup', enableSaveBtn);

bodyInput.addEventListener('keyup', enableSaveBtn);

saveBtn.addEventListener('click', saveIdea);

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
  var titleInputValue = titleInput.value;
  var bodyInputValue = bodyInput.value;
  var uniqueId = Date.now();
  var obj = {
    id: uniqueId,
    title: titleInputValue,
    body: bodyInputValue
  }
  return obj
} 

function reinstantiateCard(parsedObjectArray) {
  var someShit = parsedObjectArray.map(appendCard());
  console.log('someShit ',someShit);
}

function saveIdea() {
  event.preventDefault();
  var ideaObj = createIdeaObj();
  var newIdea = new Idea(ideaObj);
  ideas.push(newIdea);
  var allIdeas = JSON.stringify(ideas);
  newIdea.saveToStorage(allIdeas);
  appendCard();
  clearFields();
  disableSaveBtn();
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
  // var reconstructedIdeas = 
  
  // var persistedIdea = new Idea()
  // var returnCard = ideas.map(appendCard(persistedIdea));
  // console.log(returnCard);
  // console.log(ideas);
}