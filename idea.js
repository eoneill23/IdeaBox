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
    return idea.id != id
    });
    console.log('Hi, Alyssa ' , shortArray)
    savetoStorage(shortArray)
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