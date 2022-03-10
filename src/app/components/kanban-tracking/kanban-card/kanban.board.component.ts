/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { KanbanService } from '../module/kanban.service';
import { Subscription } from 'rxjs';
import { ITask, IBoard } from '../module/tasks.model';
import { MatDialog } from '@angular/material/dialog';
import { KanbanTaskFormComponent } from './kanban-form/kanban.task.form';
import { PartyRefService } from 'app/services/partyRef.service';
import { PartyService } from 'app/services/party.service';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban.board.component.html',
  styleUrls: ['./kanban.board.component.scss'],
})
export class KanbanBoardComponent implements OnInit, OnDestroy {
  constructor(
    public dialog: MatDialog,
    public partyService: PartyService,
    public kanbanService: KanbanService,
    public partyRefService: PartyRefService
  ) {
    partyRefService.partyUpdated.subscribe((party) => {
      this.party.setParty(party);
      this.partyRef = party.party_ref;
      this.refreshData(party.partyRef);
      console.log('Kanban Board party Ref changed to: ', party.partyRef);
    });
  }

  // notifyParentMenu

  public outTitle = 'KANBAN';
  public partyRef: string;
  party: PartyRefService;

  OPEN = 'Open';
  IN_PROGRESS = 'InProgress';
  IN_REVIEW = 'InReview';
  COMPLETED = 'Completed';
  selected: string;

  subOpen: Subscription;
  subProgress: Subscription;
  subReview: Subscription;
  subComplete: Subscription;
  bourds: Subscription[];

  openTasks: ITask[];
  progressTasks: ITask[];
  reviewTasks: ITask[];
  completeTasks: ITask[];

  // the following logic should be built out into multi dimentional array of broads and tasks
  allBoards: IBoard[];

  ngOnInit(): void {
    this.getFirstPartyByType('COMP');
  }

  onModifyTaskDialog(data) {
    console.log('Open Task Dialog', data);
    this.openDialog(data, 'Kanban Tasks');
  }

  openDialog(jsonData: any, title: string) {
    const dialogRef = this.dialog.open(KanbanTaskFormComponent, {
      width: '750px',
      data: jsonData,
    });
    dialogRef.afterClosed().subscribe((result) => {
      switch (result.event) {
        case 'Create':
          this.create(result.data);
          break;
        case 'Update':
          this.update(result.data);
          break;
        case 'Delete':
          this.delete(result.data);
          break;
        case 'Cancel':
          break;
      }
    });
  }

  create(data) {
    this.kanbanService.KanbanCreate(data);
    this.refreshData(data.party_ref);
  }

  update(data) {
    this.kanbanService
      .KanbanUpdate(data.task_id, data)
      .subscribe((value) => this.refreshData(data.party_ref));
  }

  delete(data) {
    this.kanbanService.kanbanDelete(data.task_id);
  }

  refreshDataW() {
    this.kanbanService
      .getKanbanTaskByRef(this.partyRef)
      .subscribe((task) => (this.allBoards = task));
  }

  getFirstPartyByType(partyType: string) {
    this.partyService.getFirstPartyByType(partyType).subscribe((val) => {
      this.partyRef = val.party_ref;
      this.refreshData(this.partyRef);
    });
  }

  refreshData(partyRef: string) {
    this.subOpen = this.kanbanService
      .getKanbanTaskByRefAndStatus(partyRef, this.OPEN)
      .subscribe((task) => (this.openTasks = task));

    this.subProgress = this.kanbanService
      .getKanbanTaskByRefAndStatus(partyRef, this.IN_PROGRESS)
      .subscribe((task) => (this.progressTasks = task));

    this.subReview = this.kanbanService
      .getKanbanTaskByRefAndStatus(partyRef, this.IN_REVIEW)
      .subscribe((task) => (this.reviewTasks = task));

    this.subComplete = this.kanbanService
      .getKanbanTaskByRefAndStatus(partyRef, this.COMPLETED)
      .subscribe((task) => (this.completeTasks = task));
  }

  drop(event: CdkDragDrop<string[]>): void {
    // transfers position of the data in memory,
    // if the drop was within the same container and reordering only Index is the position vertically

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.updateBoardRanking(event.container.data);
    } else {
      // transfer data to new container in memory only, if the drop was to a new container or board in our case
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.updateBoards(
        event.previousContainer.data,
        event.container.data,
        event.container.id
      );
    }
  }

  private updateBoardRanking(previousData: any) {
    // loop through just the previous day
    // previous status is the same so not updated
    const cnt = previousData.length;
    if (cnt > 0) {
      let i = 1;
      previousData.forEach((task) => {
        task.rankid = i;
        this.kanbanService.KanbanUpdate(task.task_id, task).subscribe({
          next: (value) => console.log(`Previous container data: ${value}`),
        });
        i++;
      });
    }
  }

  private updateBoards(
    previousData: any,
    newData: any,
    newContainerId: string
  ) {
    // previous status is the same so not updated
    this.updateBoardRanking(previousData);

    // loop through the board updated to set the status an rank.
    const cnt = newData.length;
    if (cnt > 0) {
      let i = 1;
      newData.forEach((task) => {
        task.status = newContainerId;
        task.rankid = i;
        this.kanbanService.KanbanUpdate(task.task_id, task).subscribe({
          next: (value) => console.log(`New container data: ${value}`),
        });
        i++;
      });
    }
  }

  ngOnDestroy() {
    this.subOpen.unsubscribe();
    this.subProgress.unsubscribe();
    this.subReview.unsubscribe();
    this.subComplete.unsubscribe();
    this.bourds.forEach((board) => {
      board.unsubscribe();
    });
  }
}
