import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-demo',
  templateUrl: './tree-demo.component.html',
  styleUrls: ['./tree-demo.component.scss']
})
export class TreeDemoComponent implements OnInit {

  entity: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  showEntity(entity: any): void {
    console.log('show entity');
    this.entity = entity;
    console.log(entity);
  }
}
