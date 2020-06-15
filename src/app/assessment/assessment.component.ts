import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Motorista } from '../Motorista';



@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  step1 = true;
  step2 = false;
  step3 = false;
  step4 = false;
  step5 = false;
  step6 = false;
  onLoading = false;
  ageRange: string;
  ocupation: string;
  timeOcupation: string;
  daywork: string;
  buttonActive = false;
  buttonInactive = true;

  url = 'http://localhost:5000/motorista'; 

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  motorista = {
    nome: null,
    email: null,
    senha: null,
    faixa_etaria: null,
    carga_horaria: null,
    alocacao: null,
    status: null,
    data_criacao: null
  }

  contentName(): void {
    this.motorista.nome = document.getElementsByName('nameTruck');
    if (!!this.motorista.nome) {
      this.buttonActive = true;
      this.buttonInactive = false;
    }
    else {
      this.buttonActive = false;
      this.buttonInactive = true;
    }
  }

  nextStep(): void {
    if (this.step1 === true) {
      this.step1 = false;
      this.step2 = true;
      return;
    }
  }

  returnStep(): void {
    if (this.step2 === true) {
      this.step2 = false;
      this.step1 = true;
      return;
    }
    if (this.step3 === true) {
      this.step3 = false;
      this.step2 = true;
      return;
    }
    if (this.step4 === true) {
      this.step4 = false;
      this.step3 = true;
      return;
    }
    if (this.step5 === true) {
      this.step5 = false;
      this.step4 = true;
      return;
    }
    if (this.step6 === true) {
      this.step6 = false;
      this.step5 = true;
    }
  }

  setInformations(type, element): void {
    this.loading();
    if (type === 'ageRange') {
      switch (element) {
        case 1:
          this.ageRange = '18-26';
          break;
        case 2:
          this.ageRange = '27-36';
          break;
        case 3:
          this.ageRange = '37-56';
          break;
        case 4:
          this.ageRange = '56 +';
          break;
        default:
          this.ageRange = null;
          break;
      }
    }
    if (type === 'ocupation') {
      switch (element) {
        case 1:
          this.ocupation = 'Carteira assinada';
          break;
        case 2:
          this.ocupation = 'Autônomo';
          break;
        case 3:
          this.ocupation = 'Os dois';
          break;
        default:
          this.ocupation = null;
          break;
      }
      if (type === 'timeOcupation') {
        switch (element) {
          case 1:
            this.timeOcupation = '1 a 10 anos';
            break;
          case 2:
            this.timeOcupation = '11 a 20 anos';
            break;
          case 3:
            this.timeOcupation = 'Mais de 20';
            break;
          default:
            this.timeOcupation = null;
            break;
        }
      }
      if (type === 'healthProblems') {
        switch (element) {
          case 1:
            this.timeOcupation = 'Hipertensão';
            break;
          case 2:
            this.timeOcupation = 'Diabetes';
            break;
          case 3:
            this.timeOcupation = 'Hérnia de disco';
            break;
          case 4:
            this.timeOcupation = 'Visão';
            break;
          case 5:
            this.timeOcupation = 'Cardíaco';
            break;
          case 6:
            this.timeOcupation = 'Nenhum';
            break;
          default:
            this.timeOcupation = null;
            break;
        }
      }
      if (type === 'daywork') {
        switch (element) {
          case 1:
            this.daywork = '1 a 2 dias';
            break;
          case 2:
            this.daywork = '3 a 5 dias';
            break;
          case 3:
            this.daywork = '5 a 7 dias';
            break;
          default:
            this.daywork = null;
            break;
        }
      }
    }
  }

  setLoading(): void {
    this.onLoading = true;
    setTimeout(() => {
      this.controlStep();
      this.onLoading = false;
    }, 1000);
  }

  loading(): void {
    setTimeout(() => {
      this.setLoading();
    }, 1000);
  }

  controlStep(): void {
    if (this.step2 === true) {
      this.step2 = false;
      this.step3 = true;
      return;
    }
    if (this.step3 === true) {
      this.step3 = false;
      this.step4 = true;
      return;
    }
    if (this.step4 === true) {
      this.step4 = false;
      this.step5 = true;
      return;
    }
    if (this.step5 === true) {
      this.step5 = false;
      this.step6 = true;
      return;
    }
    if (this.step6 === true) {
      this.step6 = false;
    }
  }

  getMotorista(): Observable<Motorista[]> {
    return this.httpClient.get<Motorista[]>(this.url)
      .pipe(
        retry(2))
  }

  save(motorista: Motorista): Observable<Motorista> {
    return this.httpClient.post<Motorista>(this.url, JSON.stringify(motorista), this.httpOptions)
      .pipe(
        retry(2)      
      )
  }

}
