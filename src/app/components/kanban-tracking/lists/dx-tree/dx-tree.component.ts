/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ITask } from '../../module/tasks.model';
import { KanbanService } from '../../module/kanban.service';
import { DxTreeListComponent } from 'devextreme-angular';
import { toNumber } from 'lodash';
import { PartyRefService } from 'app/services/partyRef.service';

const QUERY = gql`
    fragment KanbanTaskList on kb_task {
        task_id
        Id
        parentId
        party_ref
        title
        description
        status
        summary
        type
        priority
        tags
        estimate
        assignee
        rankid
        color
        classname
        dependencies
        start_date
        due_date
    }
    query KanbanTaskByRef($party_ref: String!) {
        KanbanTaskByRef(partyRef: $party_ref) {
            ...KanbanTaskList
        }
    }
`;

interface IType {
    type: string;
    description: string;
    updatedte: Date;
    updateusr: string;
}

interface IPriority {
    priority: string;
    description: string;
    updatedte: Date;
    updateusr: string;
}

export type Query = {
    KanbanTaskByRef: ITask[];
};

export class Change<T> {
    type: 'insert' | 'update' | 'remove';
    key: any;
    data: Partial<T>;
}

@Component({
    selector: 'dependency-tree',
    templateUrl: './dx-tree.component.html',
    styleUrls: ['./dx-tree.component.scss'],
})
export class TreeComponent implements OnInit {
    @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
    expandedRowKeys: Array<number> = [1];
    selectedTask: ITask;
    taskGql$!: Observable<ITask[]>;
    changes: Change<ITask>[] = [];
    taskId!: string;
    parentId!: number;
    isLoading = false;

    @Input() public partyType = 'COMP';
    @Input() public partyRef = 'HKTC';

    constructor(public apollo: Apollo, public kanbanService: KanbanService) {
        this.onReorder = this.onReorder.bind(this);
    }

    ngOnInit() {
        const partyRef = 'HKTC';
        this.taskGql$ = this.getTaskByRef(partyRef);
        console.log('Dependency Tasks : onInit()');
    }

    refreshData() {
        this.treeList.instance.refresh();
        // ===== or =====
        const treeListDataSource = this.treeList.instance.getDataSource();
        treeListDataSource.reload();
    }

    public updateData(task: string, parent: number) {
        console.log('Tasks dependencies: ', this.partyRef);
        this.updateParentTask(task, parent);
    }

    async updateParentTask(taskId: string, parentId: number) {
        return this.kanbanService.updateTaskParent(taskId, parentId).subscribe({
        next: (val) => {
        console.log(val);
      },
      error: err =>
        console.log('The update had an error :' + err.message),
    });

    }
    getTaskByRef(party_ref: string) {
        const comp = { party_ref };
        return this.apollo
            .watchQuery<Query>({
                query: QUERY,
                variables: comp,
            })
            .valueChanges.pipe(map(result => result.data.KanbanTaskByRef));
    }

    selectTask(e) {
        e.component.byKey(e.currentSelectedRowKeys[0]).done((task) => {
            if (task) {
                this.selectedTask = task;
            }
        });
    }

    onDragChange(e) {
        console.log('onDragChange');
        const visibleRows = e.component.getVisibleRows();
        const sourceNode = e.component.getNodeByKey(e.itemData.Id);
        let targetNode = visibleRows[e.toIndex].node;

        while (targetNode && targetNode.data) {
            if (targetNode.data.Id === sourceNode.data.Id) {
                e.cancel = true;
                break;
            }
            targetNode = targetNode.parent;
        }
    }

    onReorder(e) {
        console.log('onReorder');
        const visibleRows = e.component.getVisibleRows();
        const targetData = visibleRows[e.toIndex].data;
        const sourceNode = e.component.getNodeByKey(e.itemData.Id);
        console.log('targetData ID: ', targetData.Id);
        if (e.dropInsideItem) {
            e.itemData.parentId = targetData.Id;
            e.component.refresh();
        }
        this.taskId = e.itemData.task_id;
        this.parentId = e.itemData.parentId;
        console.log(`task ${this.taskId} parent ${this.parentId}`);
        const parentId = toNumber(this.parentId);
        this.updateData(this.taskId, parentId);
    }
}
