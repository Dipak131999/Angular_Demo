import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, LoginAuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
      canActivate:[AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./external/external.module').then((m) => m.ExternalModule),
     canActivate:[LoginAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
