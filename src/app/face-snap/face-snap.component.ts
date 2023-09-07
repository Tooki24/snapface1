import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap

  buttonText: string = "Snap!"
  snapped:boolean = false
  isSnapped():boolean {
    if (this.snapped) {
      this.faceSnap.snaps--
      this.snapped = false
      this.buttonText = "Snap!"
      return this.snapped
    } else {
      this.faceSnap.snaps++
      this.snapped = true
      this.buttonText = "Désnap!"
      return this.snapped
    }
  }
}
