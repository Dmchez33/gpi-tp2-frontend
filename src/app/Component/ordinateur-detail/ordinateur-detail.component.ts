import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Pour récupérer les paramètres de l'URL
import { OrdinateurService } from 'src/app/Service/ordinateur/ordinateur.service'; // Service pour les opérations sur les ordinateurs
import { ProblemeService } from 'src/app/Service/probleme/probleme.service'; // Service pour les opérations sur les problèmes
import { Location } from '@angular/common'; // Pour la gestion de la navigation précédente

@Component({
  selector: 'app-ordinateur-detail',
  templateUrl: './ordinateur-detail.component.html',
  styleUrls: ['./ordinateur-detail.component.scss']
})
export class OrdinateurDetailComponent implements OnInit {
  
  idOrdi: any; // Identifiant de l'ordinateur récupéré depuis les paramètres d'URL
  detailOrdinateur: any; // Détails de l'ordinateur récupérés du service
  problemListByOrdinateur: any; // Liste des problèmes associés à cet ordinateur

  constructor(
    private navigate: Location, // Pour gérer la navigation précédente
    private route: ActivatedRoute, // Pour récupérer les paramètres de l'URL
    private serviceOrdinateur: OrdinateurService, // Service pour les opérations sur les ordinateurs
    private serviceProbleme: ProblemeService // Service pour les opérations sur les problèmes
  ) { }
  
  ngOnInit(): void {
    this.idOrdi = this.route.snapshot.params['id']; // Récupération de l'ID de l'ordinateur depuis les paramètres d'URL
    
    this.getOrdinateurById(this.idOrdi); // Appel pour récupérer les détails de l'ordinateur
    this.getProblemeByOrdinateurId(this.idOrdi); // Appel pour récupérer la liste des problèmes associés à l'ordinateur
  }

  // Méthode pour récupérer les problèmes associés à un ordinateur spécifique
  getProblemeByOrdinateurId(id: any) {
    this.serviceProbleme.getProblemeByOrdinateur(id).subscribe(data => {
      this.problemListByOrdinateur = data; // Assignation des problèmes récupérés à la variable problemListByOrdinateur
      console.log(this.problemListByOrdinateur); // Affichage des problèmes dans la console à des fins de débogage
    });
  }

  // Méthode pour récupérer les détails d'un ordinateur spécifique
  getOrdinateurById(id: any) {
    this.serviceOrdinateur.getOrdinateurById(id).subscribe(data => { 
      this.detailOrdinateur = data; // Assignation des détails de l'ordinateur récupérés à la variable detailOrdinateur
      console.log(data); // Affichage des détails dans la console à des fins de débogage
    });
  }

  // Méthode pour revenir à la page précédente
  goback() {
    this.navigate.back(); // Utilisation de Location.back() pour revenir à la page précédente
  }
}
