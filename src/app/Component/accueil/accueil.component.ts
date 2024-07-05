
import { Component, OnInit } from '@angular/core';

import { StatistiquesService } from 'src/app/Service/statistique/statistique.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  nombreProblemesParSE: any[] = [];
  delaiMoyenIntervention!: number;
  frequenceProblemes: any[] = [];
  frequenceProbleme: any[] = [];



  constructor(private statistiquesService: StatistiquesService) { }

  ngOnInit() {
    this.statistiquesService.getNombreProblemesParSE().subscribe(data => {
      this.nombreProblemesParSE = data.map(item => ({
        name: item.typeSE,
        value: item.count


      }));
      console.log(this.nombreProblemesParSE);
    });

    this.statistiquesService.getDelaiMoyenIntervention().subscribe(data => {
      this.delaiMoyenIntervention = data;
    });

    this.statistiquesService.getFrequenceProbleme('2024-01-01', '2024-06-30').subscribe(data => {
      this.frequenceProblemes = data.map(item => ({
        name: item.description,
        value: item.count
      }));
      this.frequenceProbleme = this.transformToLineChartData(data);
      console.log(this.frequenceProbleme);
    });
    console.log(localStorage.getItem('currentUser'))
  }

  transformToLineChartData(data: any[]): any[] {
    return data.map(item => ({
      name: item.description,
      series: [{
        name: item.count,
        value: item.description
      }]
    }));

  }



  view: [number, number] = [600, 200];

  legendPosition: [String, String] = ['right', 'below']
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


}
