import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExcelComponent } from './components/excel/excel.component';
import { UnimatrizComponent } from './components/unimatriz/unimatriz.component';
import { ExportComponent } from './components/export/export.component';

const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'operaciones', component: ExcelComponent},
    {path: 'unimatriz', component: UnimatrizComponent},
    {path: 'random', component: ExportComponent},
    {path: '**', component: DashboardComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

