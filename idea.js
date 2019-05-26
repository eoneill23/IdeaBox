class Idea {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.body = obj.body;
    this.star = obj.star || false;
    this.quality = obj.quality || 0;
  }

  saveToStorage(ideas) {
    var allIdeas = JSON.stringify(ideas)
    localStorage.setItem('ideasArray', allIdeas);
  }

  deleteFromStorage(shortIdeas, id) {
    var shortArray = shortIdeas.filter(function(idea) {
    return idea.id !== id;
    });
    shortIdeas = shortArray
    this.saveToStorage(shortIdeas);
    console.log('Hi, Alyssa ' , shortIdeas)
  }

  updateIdea() {
    //push reassigned obj into array
    //push new array into local storage
  }
  updateQuality(){
  }
}