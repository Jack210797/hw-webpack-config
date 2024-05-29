export default class Post {
  constructor(title, img) {
    this.date = new Date()
    this.title = title
    this.img = img
  }

  toString() {
    return JSON.stringify({
      date: this.date.toJSON(),
      title: this.title,
      this: this.img,
    },
    null, 2)
  }
}