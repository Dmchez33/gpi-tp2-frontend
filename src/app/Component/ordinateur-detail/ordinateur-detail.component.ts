import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdinateurService } from 'src/app/Service/ordinateur/ordinateur.service';
import { ProblemeService } from 'src/app/Service/probleme/probleme.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-ordinateur-detail',
  templateUrl: './ordinateur-detail.component.html',
  styleUrls: ['./ordinateur-detail.component.scss']
})
export class OrdinateurDetailComponent implements OnInit {
  
  idOrdi:any
  detailOrdinateur:any;
  problemListByOrdinateur:any;
  constructor(private navigate: Location ,
    private route: ActivatedRoute,
    private serviceOrdinateur: OrdinateurService, 
    private serviceProbleme: ProblemeService){
    
  }
  ngOnInit(): void {
    this.idOrdi = this.route.snapshot.params['id'];
    
    this.getOrdinateurById(this.idOrdi);
    this.getProblemeByOrdinateurId(this.idOrdi);


  }

  getProblemeByOrdinateurId(id:any){
    this.serviceProbleme.getProblemeByOrdinateur(id).subscribe(data =>{
      this.problemListByOrdinateur = data;
      console.log(this.problemListByOrdinateur);
    })
  }

  getOrdinateurById(id:any){
    this.serviceOrdinateur.getOrdinateurById(id).subscribe(data =>{ 
      this.detailOrdinateur = data;
      console.log(data)
    })
  }

  goback(){
    this.navigate.back();
  }


}