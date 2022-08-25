/**
 *
 * Créer un nouveau composant
addClient
dans le template
on veut saisir
nom, prenom, adresse
Mettre un bouton "ajout"
lorsqu'on clique sur le bouton "ajout" on ajoute dans un tableau
le nom, prenom, adresse
 *
 */


import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
//import {Personne} from './../model/personne';

@Component({
  selector: 'tc-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})

export class AddClientComponent implements OnInit {

  personne !: Personne;

  users : Array<Personne> = new Array<Personne>();

  constructor() { }

  ngOnInit(): void {
    this.personne = new Personne('vide', 'vide', 'vide');
  }

  ajoutUtil(){

    /**
     * {...this.personne} : clone de l'objet courant
     */
    this.users.push({...this.personne});

  }

}
