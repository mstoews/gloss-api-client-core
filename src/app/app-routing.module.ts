import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroComponent,
    canActivate: [AuthGuard],
  },
  {
   path: 'kanban',
   loadChildren: () =>
     import('./components/kanban-tracking/module/kanban.module').then((m) => m.KanbanTasksModule),
   canActivate: [AuthGuard]
  },
  {
    path: 'static',
    loadChildren: () =>
      import('./static/static.data.module').then((m) => m.StaticDataModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    redirectTo: 'introduction',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
