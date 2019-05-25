class Idea {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.body = obj.body;
    this.star = false;
    this.quality = 0;
  }

  saveToStorage(ideas) {
    var allIdeas = JSON.stringify(ideas)
    localStorage.setItem('ideasArray', allIdeas);
  }

  deleteFromStorage(index) {
    ideas.splice(index, 1);
    // JSON.stringify(ideas);
    // this.saveToStorage(ideas);
    // console.log('Hello, Amy', ideas)
  }

      // shorterArray(saveToStorage)

  // console.log('yellow', cardId)
  // for (var i=0; i < ideas.length; i++) {
  //   if (ideas[i].id === 'cardId')
  //     ideas.splice(ideas[i].id)


  // get stuff from storgage
  // reset new ideas into that array
  // save that array to storage

  updateIdea() {
  }
  updateQuality(){
  }
}