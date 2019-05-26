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

  deleteFromStorage(index) {
    ideas.splice(index, 1)
    this.saveToStorage(ideas);
  }

  updateIdea(title, body) {
    this.title = title;
    this.body = body;
    this.saveToStorage(ideas);
  }

    //push reassigned obj into array
    //push new array into local storage

  updateQuality(){
  }
}