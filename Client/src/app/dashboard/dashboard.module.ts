import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { CompanyComponent } from './company/company.component';
import { StoreService } from './store/store.service';

@NgModule({
  imports: [ThemeModule, DashboardRoutingModule],
  declarations: [DashboardComponent,CompanyComponent],
  entryComponents: [],
  providers: [StoreService]
})
export class DashboardModule {}
