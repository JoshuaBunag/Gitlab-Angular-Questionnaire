import {Component, OnInit} from '@angular/core';
import {DecisionTreeService} from '@services/decision-tree.service';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Knot} from '@entities/knot';
import {DecisionService} from '@services/decision.service';
import {Rule} from '@entities/rule';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  //case 1
  height: number;
  weight: number;
  showResultDialog = false;
  result: string;

  //case 2
  question: string = undefined;
  answer: string;
  knots: Knot[] = [];
  currentRule: Rule;
  questionnaireResult: string;

  constructor(
    private decisionTreeService: DecisionTreeService,
    private decisionService: DecisionService
  ) {
  }

  ngOnInit(): void {
    this.initQuestion();
  }

  initQuestion(): void {
    // TODO : select options for tree, atm just tree 1 loaded
    this.decisionTreeService.getRootRule(1).subscribe((knots) => {
      this.knots = knots;
      console.log('knots => ', knots);
      this.currentRule = this.decisionTreeService.getRootKnot(knots) as Rule;
      this.question = this.currentRule.name;
    });
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

  processAnswer(): void {
    let nextKnot = this.decisionService.findNextKnot(this.knots, this.currentRule, this.answer);
    // TODO : add constants (like enum) for knot types to compare with
    // TODO : clean up here
    if (nextKnot && nextKnot.knotType != 'SCENARIO') {
      this.questionnaireResult = undefined;
      this.currentRule = nextKnot as Rule;
      this.question = this.currentRule.name;
      this.answer = undefined;
    } else {
      this.questionnaireResult = nextKnot.name;
      this.currentRule = undefined;
      this.question = undefined;
      this.answer = undefined;
    }
  }

}
