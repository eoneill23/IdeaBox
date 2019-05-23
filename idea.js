class Idea {
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = 0;
  }
  saveToStorage(pram) {
    localStorage.setItem('ideaArray', pram);
  }
  deleteFromStorage() {
  }
  updateIdea() {
  }
  updateQuality(){
  }
}
