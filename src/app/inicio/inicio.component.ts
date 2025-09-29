import { Component, OnInit } from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {IonicModule} from "@ionic/angular";
import {CalendarioComponent} from "../calendario/calendario.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CalendarioComponent,
  ]
})
export class InicioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
