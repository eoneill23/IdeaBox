var titleInput = document.getElementById('idea-title-input');

var bodyInput = document.getElementById('idea-body-input');

var saveBtn = document.getElementById('save-btn');

var searchBtn = document.getElementById('search-btn');

var searchInput = document.getElementById('search-input');

var mainContent = document.getElementById('main');

var userPrompt = document.getElementById('user-prompt-text');

var ideas = JSON.parse(localStorage.getItem('ideasArray')) || [];

var card = document.querySelector('article');
// card.dataset.id

titleInput.addEventListener('keyup', enableSaveBtn);

bodyInput.addEventListener('keyup', enableSaveBtn);

saveBtn.addEventListener('click', saveIdea);

mainContent.addEventListener('click', deleteCard)

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
  newIdea.saveToStorage(ideas);
  clearFields();
  disableSaveBtn();
};

function appendCard(idea) {
  userPrompt.classList.add('hidden');
  mainContent.insertAdjacentHTML('afterbegin', `<article class="card" data-id="${idea.id}">
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

function persistCard(title, body, id) {
  userPrompt.classList.add('hidden');
  mainContent.insertAdjacentHTML('afterbegin', `<article class="card" data-id="${id}">
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
    persistCard(reconstructedIdea.title, reconstructedIdea.body, reconstructedIdea.id);
  }
}

function deleteCard(event) {
  if (event.target.closest('#white-x-img')) {
  var cardId = event.target.closest('.card').getAttribute('data-id');
  console.log(cardId)
  var cardIndex = ideas.findIndex(el => el.id == cardId)
  console.log(cardIndex)
  event.target.closest('.card').remove();
  var dltCard = new DeleteCard(cardId);
  dltCard.deleteFromStorage(cardIndex);
  dltCard.saveToStorage(ideas);
  }
}

class DeleteCard extends Idea {
  constructor(id) {
    super(id);
  }
}



  // deleteFromStorage(oldIdeas)


//Get ID from event capture (line 124)
//Make a new instantiation of class Idea
//  make the object information
// var a;sldkf = new Idea ({id: ID, title: '', })

// var oldIdeas = asldkjsldfkj

// newObject.deleteFromStorage(oldIDeas)



//deleteFromStorage should be invoked in deleteCard function.
//We are going to have to push our object through to be able to identify a card by its unique ID
//pull down array from local storage
//use find method to find object with that unique ID
//put shorter array back into local storage


