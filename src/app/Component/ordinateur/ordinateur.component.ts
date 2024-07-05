import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ordinateur } from 'src/app/Interface/Ordinateur';
import { OrdinateurService } from 'src/app/Service/ordinateur/ordinateur.service';

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.scss']
})
export class OrdinateurComponent implements OnInit {
  ordinateurs: any[] = [];
  ordinateurForm: FormGroup;

  constructor(
    private ordinateurService: OrdinateurService,
    private fb: FormBuilder
  ) {
    this.ordinateurForm = this.fb.group({
      bureau: ['',Validators.required],
      proprietaire: ['',Validators.required],
      typeSE: ['',Validators.required],
      dateInstall: ['',Validators.required],
      caracteristiques: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadOrdinateurs();
  }

  loadOrdinateurs() {
    this.ordinateurService.getOrdinateurs().subscribe(data => {
      this.ordinateurs = data;
      console.log(data)
    });
  }

  onSubmit() {
    this.ordinateurService.addOrdinateur(this.ordinateurForm.value).subscribe(data => {
      this.ordinateurs.push(data);
      this.ordinateurForm.reset();
      console.log(data)
      this.loadOrdinateurs()
    });
  }
}
