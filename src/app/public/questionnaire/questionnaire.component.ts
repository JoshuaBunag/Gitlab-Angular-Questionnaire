import { Component, OnInit } from '@angular/core';
import {DecisionTreeService} from '@services/decision-tree.service';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  height: number;
  weight: number;
  showResultDialog = false;
  result: string;

  constructor(private decisionTreeService: DecisionTreeService) { }

  ngOnInit(): void {
  }

  isHeightAndWeightFilled(): boolean {
    return this.weight != null && this.height != null;
  }

  makeDecisionInBackend(): void {
    this.showResultDialog = true;
    this.decisionTreeService.makeAppealDecision(this.height, this.weight).pipe(map((res: string) => {
        this.result = res;
      }),
      catchError((exc) => {
        return of(exc);
      })).subscribe();
  }

}
