import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { LibraryModule } from '../../shared-module/library/library.module';
import { AchComponent } from './ach/ach.component';
import { CashLoadingComponent } from './cash-loading/cash-loading.component';

@NgModule({
  declarations: [AchComponent, CashLoadingComponent],
  imports: [CommonModule, ServiceRoutingModule, LibraryModule],
})
export class ServiceModule {}
