import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterventionService } from 'src/app/Service/intervention/intervention.service';
import { OrdinateurService } from 'src/app/Service/ordinateur/ordinateur.service';
import { ProblemeService } from 'src/app/Service/probleme/probleme.service';
import { SolutionService } from 'src/app/Service/solution/solution.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-probleme-detail',
  templateUrl: './probleme-detail.component.html',
  styleUrls: ['./probleme-detail.component.scss']
})
export class ProblemeDetailComponent implements OnInit {
  
  idProbleme:any
  solutionListByProbleme:any[] = [];
  interventionListByProbleme:any[] = [];
  detailProbleme:any;
  interventionForm: FormGroup;
  solutionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navigate: Location ,
    private route: ActivatedRoute, 
    private serviceSolution: SolutionService, 
    private serviceIntervention: InterventionService, 
    private serviceProbleme: ProblemeService){

      this.interventionForm = this.fb.group({
        dateIntervention: ['',Validators.required],
        dureeIntervention: ['',Validators.required],
        probleme: ['',],
        solution: ['',Validators.required]
      });

      this.solutionForm = this.fb.group({
        diagnostic: ['',Validators.required],
        action: ['',Validators.required],
        dureeMoyenne: ['',Validators.required],
        probleme: ['',]
      });
    
  }
  ngOnInit(): void {
    this.idProbleme = this.route.snapshot.params['id'];
    
    this.getProblemeById(this.idProbleme);
    this.getInterventionByProblemeId(this.idProbleme);
    this.getSolutionByProblemeId(this.idProbleme);


  }

  getSolutionByProblemeId(id:any){
    this.serviceSolution.getSolutionByProbleme(id).subscribe(data =>{
      this.solutionListByProbleme = data;
      console.log(this.solutionListByProbleme);
    })
  }

  getInterventionByProblemeId(id:any){
    this.serviceIntervention.getInterventionByProbleme(id).subscribe(data =>{
      this.interventionListByProbleme = data;
      console.log(this.interventionListByProbleme);
    })
  }

  getProblemeById(id:any){
    this.serviceProbleme.getProblemeById(id).subscribe(data =>{ 
      this.detailProbleme = data;
      console.log(data)
    })
  }


  onSubmitIntervention(id:any) {
    console.log(this.interventionForm.value)
    if (this.interventionForm.valid) {
      const formValue = this.interventionForm.value;
      const problemePayload = {
        dateIntervention: formValue.dateIntervention,
        dureeIntervention: formValue.dureeIntervention,
        probleme: {
          id: id
        },
        solution: {
          id: formValue.solution
        }
      };

      this.serviceIntervention.addIntervention(problemePayload).subscribe(data => {
        this.interventionListByProbleme.push(data);
        this.interventionForm.reset();
        console.log(data)
        this.getInterventionByProblemeId(id)
      });
    }
  }

  onSubmitSolution(id:any) {
    console.log(this.solutionForm.value)
    if (this.solutionForm.valid) {
      const formValue = this.solutionForm.value;
      const solutionPayload = {
        diagnostic: formValue.diagnostic,
        action: formValue.action,
        dureeMoyenne: formValue.dureeMoyenne,
        probleme: {
          id: id
        },
      };

      this.serviceSolution.addSolution(solutionPayload).subscribe(data => {
        this.solutionListByProbleme.push(data);
        this.solutionForm.reset();
        console.log(data)
        this.getSolutionByProblemeId(id)
      });
    }
  }


  goback(){
    this.navigate.back();
  }


}
