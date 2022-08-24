import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-collegues',
  template: `
  <h1>Ici un template</h1>
  <!-- [] => binding de propriete -->
  <img [src]="uneImage" alt="une image par binding">

  <!-- directive de structure ANGULAR -->
  <p *nbIf="unChamp">
    <!-- {{}} : interpolation : affiche d'une variable ou
  d'un retour de méthode -->

    {{unChamp}}
    <!-- pipe : transforme l'affichage de la données -->

    {{unChamp | uppercase}}
  </p>
  `
})
export class ColleguesComponent implements OnInit {

  uneImage = "assets/logo.jpg";
  unChamp = 'je uis un champ ts';

  constructor() { }

  ngOnInit(): void {
  }

}
