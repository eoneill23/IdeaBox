var titleInput = document.getElementById('idea-title-input');

var bodyInput = document.getElementById('idea-body-input');

var saveBtn = document.getElementById('save-btn');

var searchBtn = document.getElementById('search-btn');

var searchInput = document.getElementById('search-input');

var mainContent = document.getElementById('main');

var userPrompt = document.getElementById('user-prompt-text');

var ideas = JSON.parse(localStorage.getItem('ideasArray')) || [];

var card = document.querySelector('article');

titleInput.addEventListener('keyup', enableSaveBtn);

bodyInput.addEventListener('keyup', enableSaveBtn);

saveBtn.addEventListener('click', handleSaveButton);

mainContent.addEventListener('click', clickHandler);
 
mainContent.addEventListener('focusout', updateContent);

mainContent.addEventListener('keydown', enterUpdateContent);

window.addEventListener('load', mapLocalStorage(ideas));


function enableSaveBtn() {
  saveBtn.disabled = false;
  disableSaveBtn();
}

function disableSaveBtn() {
  if (titleInput.value === "" || bodyInput.value === "") {
    saveBtn.disabled = true;
  }
}

function mapLocalStorage(oldIdeas) {
  console.log('load')
  var newIdeas = oldIdeas.map(function(object) {
    return turnObjectIntoIdeas(object);
  })
  ideas = newIdeas;
}

function turnObjectIntoIdeas(obj){
  var uniqueId = obj.id
  var ideaTitle = obj.title
  var ideaBody = obj.body
  var ideaStar = obj.star
  console.log('Yooooooooooooo ', ideaStar)
  var newIdea = new Idea({
    id: uniqueId,
    title: ideaTitle,
    body: ideaBody,
    star: ideaStar,
  })
  appendCard(newIdea);
  return newIdea;
}

function handleSaveButton() {
  event.preventDefault();
  var newIdea = new Idea({id: Date.now(), title: titleInput.value, body: bodyInput.value, star: false, quality: 0});
  turnObjectIntoIdeas(newIdea)
  ideas.push(newIdea);
  newIdea.saveToStorage(ideas);
  clearFields();
  disableSaveBtn();
};

function appendCard(idea) {
  userPrompt.classList.add('hidden');
  var starStatus = idea.star ? 'star-active.svg' : 'star.svg' 
  mainContent.insertAdjacentHTML('afterbegin', `<article class="card" data-id="${idea.id}">
      <header>
        <img src="images/${starStatus}" alt="Star rating" id="white-star-img">
        <img src="images/delete.svg" alt="Delete x" id="white-x-img">
      </header>
      <main id="card-body">
        <h3 id="idea-title-output" contenteditable="true">${idea.title}</h3>
        <p id="idea-body-output" contenteditable="true">
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

function clearFields() {
  titleInput.value = '';
  bodyInput.value = '';
}

function clickHandler(event) {
  deleteCard(event)
  updateStarBtn(event)
}

function deleteCard(event) {
  if (event.target.closest('#white-x-img')) {
  console.log('Allo, guvnah')
  var cardId = getUniqueId(event);
  var cardIndex = getCardIndex(cardId)
  event.target.closest('.card').remove();
  ideas[cardIndex].deleteFromStorage(cardIndex);
  }
}

function getUniqueId(event) {
  return event.target.closest('.card').getAttribute('data-id');
}

function getCardIndex(id){
  return ideas.findIndex(function(arrayObj) {
    return arrayObj.id == parseInt(id)
  })
}

function updateContent(event) {
  var cardId = getUniqueId(event);
  var cardIndex = getCardIndex(cardId);
  var newTitle = document.querySelector(`.card[data-id="${cardId}"] #idea-title-output`).innerText;
  var newBody = document.querySelector(`.card[data-id="${cardId}"] #idea-body-output`).innerText;
  ideas[cardIndex].updateIdea(newTitle, newBody);
  var blurTitle = document.querySelector(`.card[data-id="${cardId}"] #idea-title-output`).blur();
  var blurBody = document.querySelector(`.card[data-id="${cardId}"] #idea-body-output`).blur();
}

function enterUpdateContent(event) {
  var key = event.keyCode
  if (key === 13) {
      event.preventDefault();
      updateContent(event);
  }
 } 

 function updateStarBtn(event) {
  if (event.target.closest('#white-star-img')) {  
  var cardId = getUniqueId(event);
  var cardIndex = getCardIndex(cardId);
  var yellowStar = 'images/star-active.svg'; 
  var oldStar = document.querySelector(`.card[data-id="${cardId}"] #white-star-img`);
  oldStar.src = yellowStar
  ideas[cardIndex].updateStar();
  if (ideas[cardIndex].star === false) {
    var whiteStar = 'images/star.svg'
    oldStar.src = whiteStar;
    } else {
      oldStar.src = yellowStar;
    }
  }
}