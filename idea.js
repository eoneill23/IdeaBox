class Idea {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.body = obj.body;
    this.star = false;
    this.quality = 0;
  }
  saveToStorage(param) {
    localStorage.setItem('ideaArray', param);
  }
  deleteFromStorage() {
  }
  updateIdea() {
  }
  updateQuality(){
  }
}