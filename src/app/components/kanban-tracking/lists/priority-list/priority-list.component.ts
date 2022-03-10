import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KanbanService } from '../../module/kanban.service';


export type PriorityQuery = {
  priorityType: PriorityType[];
};

export interface PriorityType  {
  priority: string;
  description: string;
  updatedte: string;
  updateusr: string;
}
@Component({
  selector: 'priority-list',
  templateUrl: './priority-list.component.html',
})
export class PriorityListComponent  {

    priority!: Observable<PriorityType[]>;

    constructor(private kanbanService: KanbanService)
     {
      this.priority = this.kanbanService.getKanbanPriorities();
    }
  }
