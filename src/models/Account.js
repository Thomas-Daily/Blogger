export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio || ''
    this.coverImg = data.coverImg || 'https://cdn.wallpapersafari.com/39/75/I9nwgp.jpg'
    this.github = data.github || ''
    this.linkedin = data.linkedin || ''
    this.resume = data.resume || ''
    this.class = data.class || ''
    this.graduated = data.graduated || false

    // TODO add additional properties if needed
  }
}

