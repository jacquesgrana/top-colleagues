import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'tc-collegues',
  templateUrl: "./collegues.component.html"
})
export class ColleguesComponent implements OnInit {

  /**
   * déclaration d'une entrée (input) [nom]
   * pour notre composant [nom]=
   * [prenom]="" tc-coll
   */

  @Input() nom: string = "";


  /**
  * Je déclare une entrée [nom] pour notre composant
  * <tc-collegues [nom]= "" [prenom]=""></tc-collegues>
  */
  @Input("prenom") monPrenom !: string;


  @Output() chgPrenom : EventEmitter<string> = new EventEmitter<string>();

  uneImage = "/assets/logo.jpg";
  unChamp !: string; //'je suis un champ ts';

  /**
   * depuis ANGULAR v10 car on doit affecter la variable
   * soit a la declaration soit dans le constructeur
   */
  saisieTwoWay: string = "valeur par défaut";

  constructor() { }



  ngOnInit(): void {
    this.saisieTwoWay = this.nom;
    console.log(this.monPrenom);
  }

  mClique(valeurSaisie:string) {
    this.unChamp = valeurSaisie;
    this.chgPrenom.emit(this.unChamp);
    console.log('clic bien reçu : ', valeurSaisie);
  }
}
