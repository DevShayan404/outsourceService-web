import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashLoadingComponent } from './cash-loading/cash-loading.component';
import { AchComponent } from './ach/ach.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cash-loading',
        component: CashLoadingComponent,
      },
      {
        path: 'ACH',
        component: AchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
