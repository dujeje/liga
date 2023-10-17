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
      competitors: ['', Validators.required],
      scoringSystem: ['', Validators.required]
    });
  }

  saveCompetition() {
    if (this.competitionForm.invalid) {
      return;  
    }

    const competitionData = this.competitionForm.value;

    // Zamijenite ovaj URL s pravim URL-om vašeg backend-a
    const apiUrl = 'https://api.example.com/competition';

    // Postavite zaglavlja zahtjeva ako je potrebno (ovdje koristimo primjer za osnovnu autentikaciju)
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer your-access-token'
      })
    };

    this.http.post(apiUrl, competitionData, httpOptions).subscribe(
      (response) => {
        console.log('Natjecanje uspješno spremljeno:', response);
        this.competitionForm.reset(); // Resetirajte formu nakon uspješnog spremanja
      },
      (error) => {
        console.error('Greška prilikom spremanja natjecanja:', error);
      }
    );
  }
}
