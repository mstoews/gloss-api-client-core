import { AgGridModule } from '@ag-grid-community/angular';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MenuBarService } from 'app/services/menu.bar.service';
import { GridComponent } from '../components/grid/grid.component';
import { MenubarComponent } from '../components/menubar/menubar.component';

import { ShellComponent } from './shell.component';
import { NavItemComponent } from './static-sidebar/nav-list-item/nav-item.component';
import { StaticSidebarComponent } from './static-sidebar/static-sidebar.component';

const components = [
  ShellComponent,
  StaticSidebarComponent,
  GridComponent,
  MenubarComponent,
  NavItemComponent,
];

const modules = [
  CommonModule,
  RouterModule,
  MatExpansionModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule,
  MatBadgeModule,
  MatSelectModule,
  MatCheckboxModule,
  MatTabsModule,
  MatDialogModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRippleModule,
  MatRadioModule,
  MatTooltipModule,
  AgGridModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules,
  ],
  providers: [ MenuBarService ],

})
export class SharedModule { }
