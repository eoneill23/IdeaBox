class Idea {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.body = obj.body;
    this.star = false;
    this.quality = 0;
  }
  saveToStorage(ideas) {
    localStorage.setItem('ideasArray', ideas);
  }
  deleteFromStorage(oldIdeas) {
  // get stuff from storgage
  // reset new ideas into that array
  // save that array to storage


  }
  updateIdea() {
  }
  updateQuality(){
  }
}