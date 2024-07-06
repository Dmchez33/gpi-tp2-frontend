import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdinateurService } from 'src/app/Service/ordinateur/ordinateur.service';
import { ProblemeService } from 'src/app/Service/probleme/probleme.service';

@Component({
  selector: 'app-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.scss']
})
export class ProblemeComponent implements OnInit {
  ordinateurs: any[] = [];
  problemes: any[] = [];
  problemeForm: FormGroup;
  currentUser!: any;
  isTechnicien = false;

  constructor(
    private ordinateurService: OrdinateurService,
    private problemeService: ProblemeService,
    private fb: FormBuilder
  ) {
    // Initialisation du formulaire de problème avec des validateurs
    this.problemeForm = this.fb.group({
      description: ['', Validators.required],
      dateProbleme: ['', Validators.required],
      ordinateur: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Chargement des ordinateurs disponibles
    this.loadOrdinateurs();
    // Chargement des problèmes existants
    this.loadProblemes();

    // Vérification du rôle de l'utilisateur actuel pour déterminer s'il est technicien
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      if (this.currentUser.role == "Technicien") {
        this.isTechnicien = true;
      }
    }
  }

  // Méthode pour charger la liste des ordinateurs
  loadOrdinateurs() {
    this.ordinateurService.getOrdinateurs().subscribe(data => {
      this.ordinateurs = data;
      console.log(data); // Affichage des données dans la console
    });
  }

  // Méthode pour charger la liste des problèmes
  loadProblemes() {
    this.problemeService.getProblemes().subscribe(data => {
      this.problemes = data;
      console.log(data); // Affichage des données dans la console
    });
  }

  // Méthode appelée lors de la soumission du formulaire de problème
  onSubmit() {
    console.log(this.problemeForm.value); // Affichage des valeurs du formulaire dans la console

    // Vérification de la validité du formulaire
    if (this.problemeForm.valid) {
      const formValue = this.problemeForm.value;
      
      // Création du payload à envoyer au service de problème
      const problemePayload = {
        description: formValue.description,
        dateProbleme: formValue.dateProbleme,
        ordinateur: {
          id: formValue.ordinateur
        }
      };

      // Appel du service pour ajouter un nouveau problème
      this.problemeService.addProbleme(problemePayload).subscribe(data => {
        this.ordinateurs.push(data); // Ajout du problème à la liste des ordinateurs
        this.problemeForm.reset(); // Réinitialisation du formulaire
        console.log(data); // Affichage des données dans la console
        this.loadProblemes(); // Rechargement de la liste des problèmes après ajout
      });
    }
  }
}
