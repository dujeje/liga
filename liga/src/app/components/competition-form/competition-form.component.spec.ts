import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.scss']
})
export class CompetitionFormComponent implements OnInit {
  competitionForm: FormGroup;  // Definirajte FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.competitionForm = this.formBuilder.group({
      competitionName: ['', Validators.required],
      competitors: ['', Validators.required],
      scoringSystem: ['', Validators.required]  
    });
  }

  ngOnInit(): void {
    
  }
}
