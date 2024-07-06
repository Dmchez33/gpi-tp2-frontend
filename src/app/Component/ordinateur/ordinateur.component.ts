import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ordinateur } from 'src/app/Interface/Ordinateur'; // Import de l'interface Ordinateur
import { OrdinateurService } from 'src/app/Service/ordinateur/ordinateur.service'; // Service pour gérer les opérations avec les ordinateurs

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.scss']
})
export class OrdinateurComponent implements OnInit {
  ordinateurs: any[] = []; // Tableau pour stocker les ordinateurs récupérés
  ordinateurForm: FormGroup; // Formulaire réactif pour ajouter un nouvel ordinateur

  constructor(
    private ordinateurService: OrdinateurService, // Service pour les opérations sur les ordinateurs
    private fb: FormBuilder // FormBuilder pour construire le formulaire
  ) {
    // Initialisation du formulaire avec des validations
    this.ordinateurForm = this.fb.group({
      bureau: ['', Validators.required], // Champ bureau requis
      proprietaire: ['', Validators.required], // Champ propriétaire requis
      typeSE: ['', Validators.required], // Champ type de SE requis
      dateInstall: ['', Validators.required], // Champ date d'installation requis
      caracteristiques: ['', Validators.required] // Champ caractéristiques requis
    });
  }

  ngOnInit(): void {
    this.loadOrdinateurs(); // Chargement des ordinateurs au démarrage du composant
  }

  // Méthode pour charger la liste des ordinateurs depuis le service
  loadOrdinateurs() {
    this.ordinateurService.getOrdinateurs().subscribe(data => {
      this.ordinateurs = data; // Stockage des ordinateurs récupérés dans la variable ordinateurs
      console.log(data); // Affichage des données récupérées dans la console
    });
  }

  // Méthode pour soumettre le formulaire d'ajout d'ordinateur
  onSubmit() {
    this.ordinateurService.addOrdinateur(this.ordinateurForm.value).subscribe(data => {
      this.ordinateurs.push(data); // Ajout du nouvel ordinateur à la liste existante
      this.ordinateurForm.reset(); // Réinitialisation du formulaire après l'ajout
      console.log(data); // Affichage des données ajoutées dans la console
      this.loadOrdinateurs(); // Rechargement de la liste des ordinateurs après l'ajout
    });
  }
}
