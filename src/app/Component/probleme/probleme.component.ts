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
    this.problemeForm = this.fb.group({
      description: ['', Validators.required],
      dateProbleme: ['', Validators.required],
      ordinateur: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadOrdinateurs();
    this.loadProblemes();

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      if(this.currentUser.role == "Technicien"){
        this.isTechnicien = true;
      }
    }
  }

  loadOrdinateurs() {
    this.ordinateurService.getOrdinateurs().subscribe(data => {
      this.ordinateurs = data;
      console.log(data)
    });
  }

  loadProblemes() {
    this.problemeService.getProblemes().subscribe(data => {
      this.problemes = data;
      console.log(data)
    });
  }

  onSubmit() {
    console.log(this.problemeForm.value)
    if (this.problemeForm.valid) {
      const formValue = this.problemeForm.value;
      const problemePayload = {
        description: formValue.description,
        dateProbleme: formValue.dateProbleme,
        ordinateur: {
          id: formValue.ordinateur
        }
      };

      this.problemeService.addProbleme(problemePayload).subscribe(data => {
        this.ordinateurs.push(data);
        this.problemeForm.reset();
        console.log(data)
        this.loadProblemes()
      });
    }
  }
}