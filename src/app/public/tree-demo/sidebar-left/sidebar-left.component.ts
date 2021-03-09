import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { faUser, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { ContextMenu } from 'primeng/contextmenu';
import { Listbox } from 'primeng/listbox';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss'],
})
export class SidebarLeftComponent implements OnInit {
  listItemList: SelectItem[];
  ctxItemList: MenuItem[];
  selectedListItem: any;

  @Output() listItemEmitter = new EventEmitter<any>();
  @Output() draggableExport = new EventEmitter<any>();

  cities: any[];

  constructor() {}

  ngOnInit(): void {
    this.ctxItemList = [
      { label: 'Show', command: (event: any) => this.show(event, this) },
      { label: 'Remove' },
    ];
    this.listItemList = [
      {
        label: 'Barack Obama',
        value: {
          ctxActions: [
            {
              label: 'Show',
              entity: {
                id: 1,
                name: 'Barack Obama',
                code: 'BO',
                entityType: 'OBJ_PARTY',
              }
            }
          ],
          icon: faUser,
        },
      },
    ];
  }
  // addEvent() {
  //   this.cities = [...this.cities, { name: 'Makati', Code: 'mkt' }];
  //   console.log('h');
  // }

  show(event: any, entity: any): void {
    this.listItemEmitter.next(this.selectedListItem);
  }

  toggleCtxMenu(listItem: any): void {
    this.selectedListItem = listItem;
        // if (this.lastCtxMenu != null) {
    //   this.lastCtxMenu.containerViewChild.nativeElement.style.display = 'none';
    // }
    // this.ctxItems = value.ctxActions;
    
    // this.lastCtxMenu = ctxmenu;
  }

 
}
