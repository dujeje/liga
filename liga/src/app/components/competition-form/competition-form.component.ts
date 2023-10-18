import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.scss']
})
export class CompetitionFormComponent {
  competitionForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.competitionForm = this.fb.group({
      competitionName: ['', Validators.required],
      competitors: ['', [Validators.required, Validators.min(4), Validators.max(8)]],
      scoringSystem: [
        '',
        [Validators.required, Validators.pattern(/^\d+\/\d+\/\d+$/)]
      ],
    });
  }
}
