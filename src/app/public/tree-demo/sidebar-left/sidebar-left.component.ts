import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { faUser, faTree } from '@fortawesome/free-solid-svg-icons';
import { ContextMenu } from 'primeng/contextmenu';
import { Listbox } from 'primeng/listbox';
import { Router } from '@angular/router';
import { DecisionTreeService } from '@services/decision-tree.service';
@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss'],
})
export class SidebarLeftComponent implements OnInit {
  listItemList: SelectItem[] = [];
  selectedListItem: any;
  lastCtxMenu: ContextMenu;
  newTreeFormVisible: boolean = true;
  newTreeName: string;
  progressSpinnerVisible: boolean = false;
  @Output() listItemEmitter = new EventEmitter<any>();
  @Output() draggableExport = new EventEmitter<any>();

  cities: any[];
  ctxItemList: MenuItem[] = [
    { label: 'Show', command: (event: any) => this.show(event, this) },
    { label: 'Remove' },
  ];

  constructor(private decisionTreeService: DecisionTreeService) { }

  ngOnInit(): void {
    this.decisionTreeService.getTreeList().subscribe((treeList) => {
      for (let tree of treeList) {

        let listBoxTree = {
          label: tree.name,
          value: {
            id: tree.id,
            icon: faTree
          },
        }
        this.listItemList = [...this.listItemList, listBoxTree];
      }
      this.listItemList = this.listItemList;


      if (this.listItemList.length == 0) {
        this.listItemList = [
          {
            label: 'Barack Obama',
            value: {
              icon: faTree,
            },
          },
          {
            label: 'Michelle Obama',
            value: {
              icon: faTree,
            },
          },
        ];
      }

    });
  }
  
  show(event: any, entity: any): void {
    this.listItemEmitter.next(this.selectedListItem);
  }
  showNewTreeForm() {
    this.newTreeFormVisible = true;
  }

  createNewTree() {
    console.log('Create New Tree: ' + this.newTreeName);
    this.progressSpinnerVisible = true;
    
    this.newTreeFormVisible = false;
    // setTimeout(function () {
    //   console.log('hide form now');
    //   this.progressSpinnerVisible = false;
    // }, 1000);
  }


  toggleCtxMenu(selectedListItem: any, ctxmenu: any): void {
    this.selectedListItem = selectedListItem;
    if (this.lastCtxMenu != null) {
      this.lastCtxMenu.containerViewChild.nativeElement.style.display = 'none';
    }
    this.lastCtxMenu = ctxmenu;
  }
}
