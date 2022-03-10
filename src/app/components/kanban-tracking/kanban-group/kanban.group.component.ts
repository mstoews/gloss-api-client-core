import { Component, OnInit, Input, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { KanbanService } from '../module/kanban.service';
import { KanbanBoardComponent } from '../kanban-card/kanban.board.component';
import { PartyRefService } from 'app/services/partyRef.service';
import { PartyService } from 'app/services/party.service';

@Component({
  selector: 'app-kanban-group',
  templateUrl: './kanban.group.component.html',
  styleUrls: ['./kanban.group.component.scss'],
  providers: [KanbanService],

})
export class KanbanGroupComponent implements AfterViewInit {

  @Output() public FormPartyRefChanged: EventEmitter<any> = new EventEmitter();
  @ViewChild('tabGroup', { static: true }) tabGroup: MatTabGroup;

  // @Input() public party: Party;
  @Input() public partyRef: string;

  formGroup: FormGroup;
  currentTab = 0;

  @ViewChild(KanbanGroupComponent) public kanbanBoardComponent: KanbanBoardComponent;

  constructor(
    public formBuilder: FormBuilder,
    public partyService: PartyService,
    public kanbanService: KanbanService,
    public partyRefService: PartyRefService) {
        partyRefService.partyUpdated.subscribe((partyRef) => {
            this.partyRef = partyRef;
            console.log('partyRef value is updated on saved', partyRef);
        });

  }

  ngAfterViewInit() {
    // console.log(`AfterViewInit from CmpFormComponent`);
    // this.inPartyRef = 'HKTC';
    // this.onFirstPartyType(this.inPartyRef);
    // const partyRef = this.kanbanService.getFirstPartyByType('COMP');
    // console.log('kanban.group.component:', this.inPartyRef);
  }

  public updateKanbanTasks()
  {
    // this.kanbanService.setKanbanRef(this.inPartyRef);
    this.currentTab = this.tabGroup.selectedIndex;
    // console.log('Refreshing tabs selected', this.currentTab);
    let param = {index: 0, tab: 'MatTab'};
    if (this.currentTab === 0) {
      this.onTabClick(param);
    }
    else {
      param = {index: this.currentTab, tab: 'MatTab'};
      this.onTabClick(param);
    }
  }


  onTabClick(event: { index: any; tab?: string }){
    {
      this.currentTab = event.index;
      switch (event.index) {
        case 0: {
           // this.kanbanBoardComponent.updateData();
          break;
        }
        case 1: {
          // console.log('Reference Tab');
          // this.refComponent.refreshData();
          break;
        }
        case 2: {
          // console.log('Class Tab');
          break;
        }
        case 3: {
          // console.log('Flag Tab');
          break;
        }
        case 4: {
          // console.log('Narrative Tab');

          break;
        }
        case 5: {
          // console.log('Association Tab was selected!!', this.partyType);

          break;

        }
        case 6: {
          // console.log('Instrument Tab');

          break;
        }
        default:
          break;
      }
    }
  }

  onClickAdd(event: { index: any; tab?: string }) {
    this.currentTab = event.index;
    switch (event.index) {
      case 0: {
        // this.kanbanBoardComponent.openDialog();
        break;
      }
      case 1: {
        // console.log('Reference Tab');
        break;
      }
      case 2: {
        // console.log('Class Tab');
        break;
      }
      case 3: {
        // console.log('Flag Tab');
        break;
      }
      case 4: {
        // console.log('Narrative Tab');
        break;
      }
      case 5: {
        // console.log('Association Add');
        break;
      }
      case 6: {
        // console.log('Association Add');
        break;
      }

      default:
        break;
    }
  }


  createForm() {
    this.formGroup = this.formBuilder.group({
    });
  }
}
