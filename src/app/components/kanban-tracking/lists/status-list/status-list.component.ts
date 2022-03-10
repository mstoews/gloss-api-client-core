import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { KanbanService } from '../../module/kanban.service';

export type Query = {
  statusType: StatusType[];
};

export interface StatusType  {
  status: string;
  description: string;
  updatedte: string;
  updateusr: string;
}

@Component({
  selector: 'status-list',
  templateUrl: './status-list.component.html'
})
export class StatusListComponent  {

  status!: Observable<StatusType[]>;

  constructor(private kanbanService: KanbanService)
   {
    this.status = this.kanbanService.getKanbanStatus();
  }
}
