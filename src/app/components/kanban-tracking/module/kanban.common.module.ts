import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTreeModule } from '@angular/material/tree';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';



import {
  DxButtonModule,
  DxDataGridModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxPivotGridModule,
  DxToolbarModule,
  DxPieChartModule,
  DxChartModule,
  DxFormModule,
  DxSortableModule,
  DxTreeViewModule,
  DxGanttModule,
  DxDateBoxModule,
  DxTreeListModule

 } from 'devextreme-angular';



const modules = [
  FormsModule,
  DragDropModule,
  MatDialogModule,
  MatChipsModule,
  MatButtonToggleModule,
  ReactiveFormsModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatTreeModule,
  DxDataGridModule,
  DxFormModule,
  DxButtonModule,
  DxSortableModule,
  DxTreeViewModule,
  DxTreeListModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxPivotGridModule,
  DxToolbarModule,
  DxPieChartModule,
  DxChartModule,
  DxGanttModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxDateBoxModule,
  // NgApexchartsModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatMenuModule,
  MatDividerModule,
  DragDropModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
})

export class KanbanCommonModule { }
