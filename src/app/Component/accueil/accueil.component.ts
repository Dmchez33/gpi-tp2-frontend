import { Component, OnInit } from '@angular/core';

import { StatistiquesService } from 'src/app/Service/statistique/statistique.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  // Tableaux pour stocker les données récupérées des services
  nombreProblemesParSE: any[] = [];
  delaiMoyenIntervention!: number;
  frequenceProblemes: any[] = [];
  frequenceProbleme: any[] = [];

  constructor(private statistiquesService: StatistiquesService) { }

  ngOnInit() {
    // Appel du service pour récupérer le nombre de problèmes par spécialiste en support technique
    this.statistiquesService.getNombreProblemesParSE().subscribe(data => {
      // Mapping des données pour les adapter à la structure utilisée par le graphique
      this.nombreProblemesParSE = data.map(item => ({
        name: item.typeSE,  // Nom du spécialiste
        value: item.count   // Nombre de problèmes associés à ce spécialiste
      }));
      console.log(this.nombreProblemesParSE);
    });

    // Appel du service pour récupérer le délai moyen d'intervention
    this.statistiquesService.getDelaiMoyenIntervention().subscribe(data => {
      this.delaiMoyenIntervention = data;  // Stockage du délai moyen d'intervention
    });

    // Appel du service pour récupérer la fréquence des problèmes sur une période spécifique
    this.statistiquesService.getFrequenceProbleme('2024-01-01', '2024-06-30').subscribe(data => {
      // Mapping des données pour les adapter à la structure utilisée par les graphiques
      this.frequenceProblemes = data.map(item => ({
        name: item.description,  // Description du problème
        value: item.count         // Nombre de fois que ce problème a été rencontré
      }));
      // Transformation des données pour adapter à un autre format de graphique
      this.frequenceProbleme = this.transformToLineChartData(data);
      console.log(this.frequenceProbleme);
    });

    console.log(localStorage.getItem('currentUser'));  // Exemple de récupération de données utilisateur depuis localStorage
  }

  // Méthode pour transformer les données en format adapté à un graphique en ligne
  transformToLineChartData(data: any[]): any[] {
    return data.map(item => ({
      name: item.description,  // Description du problème
      series: [{
        name: item.count,      // Nombre de fois que ce problème a été rencontré
        value: item.description  // Description du problème (optionnel)
      }]
    }));
  }

  // Propriétés supplémentaires pour la configuration du graphique
  view: [number, number] = [600, 200];  // Dimensions du graphique
  legendPosition: [String, String] = ['right', 'below'];  // Position de la légende
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']  // Palette de couleurs utilisée par le graphique
  };

}
