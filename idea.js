class Idea {
  constructor(object) {
    this.id = object.id;
    this.title = object.title;
    this.body = object.body;
    this.star = false;
    this.quality = 0;
  }
  saveToStorage() {

  }
  deleteFromStorage() {

  }
  updateIdea() {

  }
  updateQuality(){
  }
}


module.exports = Idea;