
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'maFacture',
        loadChildren: () => import('../facture/facture.module').then( m => m.FacturePageModule)
      },
      {
        path:'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'inscription',
        loadChildren: () => import('../inscription/inscription.module').then( m => m.InscriptionPageModule)
      },
        {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path:'achatTicketParSolde',
        loadChildren: () => import('../achat-ticket-par-solde/achat-ticket-par-solde.module').then( m => m.AchatTicketParSoldePageModule)
      },
      {
        path: 'achatTicketParCarte',
        loadChildren: () => import('../achat-ticket-par-carte/achat-ticket-par-carte.module').then( m => m.AchatTicketParCartePageModule)
      }
      ,
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
