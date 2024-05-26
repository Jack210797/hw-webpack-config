class Post {
  constructor(title, img) {
  this.title = title
  this.date = new Date()
  this.img = img
  }

  toString() {
  return JSON.stringify({
  title: this.title,
  this: this.img,
  date: this.date.toJSON()
  })
  }
  }