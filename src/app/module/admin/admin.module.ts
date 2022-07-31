import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [DashboardComponent, UpdateUserComponent, AddProductComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
