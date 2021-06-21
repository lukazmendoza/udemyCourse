import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { TabsComponent } from './tabs/tabs.component';

const routes = [
  {
    path: 'characters',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent },
    ],
  },
  {
    path: 'new-character',
    loadChildren:
      './create-character/create-character.module.ts#CreateCharacterModule',
  },
  { path: '**', redirectTo: '/characters' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
