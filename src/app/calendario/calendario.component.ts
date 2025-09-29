import { Component, OnInit } from '@angular/core';
import {IonContent, IonDatetime} from "@ionic/angular/standalone";

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonDatetime
  ]
})
export class CalendarioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
