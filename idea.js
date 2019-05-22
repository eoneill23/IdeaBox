class Idea {
  constructor(title, body, id) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = 0;
  }
  saveToStorage(pram) {
    localStorage.setItem('this.id', pram);
  }
  deleteFromStorage() {
  }
  updateIdea() {
  }
  updateQuality(){
  }
}
