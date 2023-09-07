import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap
  mySnap2!: FaceSnap
  ngOnInit() {
    
    this.mySnap = new FaceSnap('Archibald',
    'Mon meilleur ami depuis tout petit !',
    new Date(),
    0,
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',)
    
    this.mySnap2 = new FaceSnap('Toto',
      'un autre copain',
      new Date(),
      12,
      'https://cdn.pixabay.com/photo/2023/08/07/14/08/caterpillar-8175147_960_720.jpg')
  }
}
