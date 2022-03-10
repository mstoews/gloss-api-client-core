import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { KanbanService } from '../../module/kanban.service';

export interface ActionType  {
  type: string;
  description: string;
  updatedte: string;
  updateusr: string;
}
@Component({
  selector: 'action-type-list',
  templateUrl: './type-list.component.html'
})
export class TypeListComponent  {

  actionType!: Observable<ActionType[]>;

  constructor(private kanbanService: KanbanService)
   {
    this.actionType = this.kanbanService.getKanbanType();
  }
}

