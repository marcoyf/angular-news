import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'headlines',
    // component: HeadlinesComponent
    // lazy loading module
    loadChildren: () => import('./headlines/headlines.module').then(m => m.HeadlinesModule)
  },
  {
    path: 'sources',
    // component: SourcesComponent
    // lazy loading module
    loadChildren: () => import('./sources/sources.module').then(m => m.SourcesModule)
  },
  {
    path: 'favorites',
    // component: FavoritesComponent
    // lazy loading module
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
