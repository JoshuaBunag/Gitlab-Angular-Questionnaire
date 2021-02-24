import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Rule } from '../entities/rule';
import { Scenario } from '../entities/scenario';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Step } from '../entities/step';
import { NextStepAllocation } from '../entities/next-step-allocation';

@Injectable({
  providedIn: 'root'
})
export class DecisionTreeService {

  constructor(private http: HttpClient) { }

  getRootRule(): Observable<Rule> {

    let scen1 = new Scenario(1, undefined, "Scenario: Smaller than 20", "SCENARIO");
    let scen2 = new Scenario(2, undefined, "Scenario: BETWEEN 20/30", "SCENARIO");    
    let scen3 = new Scenario(3, undefined, "Scenario: OLDER than 30", "SCENARIO");    

    
    let nextStepAllocation1 = new NextStepAllocation(1,"GREATER_THAN","30",undefined,undefined, undefined,scen3);
    let nextStepAllocation2 = new NextStepAllocation(2,"ELSE", undefined,undefined,undefined, undefined,scen2);
    let rule2 = new Rule(4, undefined, "Regel 2", "NUMBER_RULE", false, "AGE");
    rule2.addNextStepAllocation(nextStepAllocation1);
    rule2.addNextStepAllocation(nextStepAllocation2);
    
    let nextStepAllocation3 = new NextStepAllocation(3,"SMALLER_THAN", "20", undefined,undefined, undefined, scen1);
    let nextStepAllocation4 = new NextStepAllocation(4,"ELSE", undefined, undefined,undefined, undefined, rule2);

    let rootRule: Rule = new Rule(1, undefined, "root rule", "NUMBER_RULE", true, "AGE");
    rootRule.addNextStepAllocation(nextStepAllocation3);
    rootRule.addNextStepAllocation(nextStepAllocation4);

    return of(rootRule);
    //return this.http.get<any[]>(environment.apiBaseUrl + '/api/gui/menu-items/all');
  }
}
