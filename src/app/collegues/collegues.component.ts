import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-collegues',
  template: ` <h1>Ici un template</h1>
              <!-- [] => binding de propriété-->
              <img [src]="uneImage" alt="une Image par binding" [ngClass]="'logo'">

              <!-- *=> directive de structure d'angular -->
              <p *ngIf="unChamp">
                    <!-- {{ }} =>interpolation l'affichage d'une variable ou
                    d'un retour d'une méthode par exemple -->
                    {{ unChamp }}
                    <!-- pipe => ça permet de transformer l'affichage de la donnée -->
                    {{ unChamp | uppercase}}
              </p>
  `,
  styleUrls: [ './collegues.component.scss' ]
})

export class ColleguesComponent implements OnInit {

  uneImage = "assets/logo.jpg";
  unChamp = 'je suis un champ ts';

  constructor() { }

  ngOnInit(): void {
  }

}
