export class Post {
  constructor(data) {
    this.body = data.body
    this.imgURL = data.imgUrl
    this.userPic = data.creator.picture
    this.userName = data.creator.name
    this.createdAt = data.createdAt
    this.likes = data.likes.length
    this.creator = data.creator
    this.id = data._id
  }

}