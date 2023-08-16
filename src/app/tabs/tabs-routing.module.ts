import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'books',
        loadChildren: () => import('../books/books.module').then(m => m.BooksPageModule)
      },
      {
        path: 'songs',
        loadChildren: () => import('../songs/songs.module').then(m => m.SongsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/books',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
