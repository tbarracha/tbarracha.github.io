import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';

export const routes: Routes = [
    { path: '', component: PageHomeComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' }
];
