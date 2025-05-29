import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/authentication/login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/authentication/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'workouts', loadChildren: () => import('./pages/workouts/workouts.module').then(m => m.WorkoutsPageModule) },
  { path: 'workout-details/:id', loadChildren: () => import('./pages/workout-details/workout-details.module').then(m => m.WorkoutDetailsPageModule) },
  { path: 'progress', loadChildren: () => import('./pages/progress/progress.module').then(m => m.ProgressPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
