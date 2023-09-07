export class FaceSnap {
  title: string
  description: string
  createdDate: Date
  snaps: number
  imgUrl: string
    
    constructor(title: string, description: string, createdDate: Date, snaps: number, imgUrl: string) {
      this.title = title
      this.description = description
      this.createdDate = createdDate
      this.snaps = snaps
      this.imgUrl = imgUrl
    }

}