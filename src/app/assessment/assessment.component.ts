import { Component, OnInit } from '@angular/core';

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

  constructor(

  ) { }

  ngOnInit(): void {

  }

  nextStep(): void {
    if (this.step1 === true) {
      this.step1 = false;
      this.step2 = true;
      return;
    }
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

}
