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
var titleOutput = document.getElementById('idea-title-output');

var bodyOutput = document.getElementById('idea-body-output');

titleInput.addEventListener('keyup', enableSaveBtn);

bodyInput.addEventListener('keyup', enableSaveBtn);

saveBtn.addEventListener('click', saveIdea);

mainContent.addEventListener('click', deleteCard);

//  

window.addEventListener('load', reinstantiateIdeas(ideas));

// titleOutput.addEventListener('click', getUniqueId(obj));

// bodyOutput.addEventListener('click', getUniqueId(obj));

mainContent.addEventListener('onchange', updateContent);



function enableSaveBtn() {
  saveBtn.disabled = false;
  disableSaveBtn();
}

function disableSaveBtn() {
  if (titleInput.value === "" || bodyInput.value === "") {
    saveBtn.disabled = true;
  }
}

function reinstantiateIdeas() {
  var newIdeas = ideas; 
  //PULL IDEAS ARRAY DOWN AND RUN EACH OBJECT THROUGH CONSTRUCTOR
   newIdeas.map(function(object) {
    turnObjectIntoIdeas(object);
    appendCard(object);
    return newIdeas;
   })
   ideas = newIdeas;
}

function turnObjectIntoIdeas(obj){
  var uniqueId = obj.id
  var ideaTitle = obj.title
  var ideaBody = obj.body
  idea = new Idea({
    id: uniqueId,
    title: ideaTitle,
    body: ideaBody,
  })
  console.log('happy bday Amy!', idea)
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

// function persistCard(title, body, id) {
//   userPrompt.classList.add('hidden');
//   mainContent.insertAdjacentHTML('afterbegin', `<article class="card" data-id="${id}">
//       <header>
//         <img src="images/star.svg" alt="Star rating" id="white-star-img">
//         <img src="images/delete.svg" alt="Delete x" id="white-x-img">
//       </header>
//       <main id="card-body">
//         <h3 id="idea-title-output" contenteditable="true" data-title="${title}">${title}</h3>
//         <p id="idea-body-output" contenteditable="true">
//           ${body}
//         </p>
//       </main>
//       <footer>
//         <img src="images/upvote.svg" alt="Quality upvote button" id="white-upvote-img">
//         <p>Quality: Swill</p>
//         <img src="images/downvote.svg" alt="Quality downvote button" id="white-downvote-img">
//       </footer>
//     </article>`)
// }

function clearFields() {
  titleInput.value = '';
  bodyInput.value = '';
}

// function recallIdeas() {
//   for (var i=0; i < ideas.length; i++) {
//     var reconstructedIdea = new Idea(ideas[i])
//     persistCard(reconstructedIdea.title, reconstructedIdea.body, reconstructedIdea.id);
//   }
// }

function deleteCard(event) {
  if (event.target.closest('#white-x-img')) {
  var cardId = getUniqueId(event);
  event.target.closest('.card').remove();
  idea.deleteFromStorage(ideas, cardId);
  console.log('hi ', cardId);
  }
}

function getUniqueId(event) {
  return event.target.closest('.card').getAttribute('data-id');
}

function updateContent(event) {
  var cardId = getUniqueId(event);
  var title = event.target.closest('.card').getAttribute('data-title');
  console.log('hi ', title);
  
  // editedObj.title = titleOutput.value;
  // editedObj.body = bodyOutput.value;
  }



//grab value of update title text
//assign to a var
//reassign obj.title to our new var
//invoke update idea
//update local storage
//




