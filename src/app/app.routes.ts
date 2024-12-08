import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';

export const routes: Routes = [
    {
      path: '', // Default route
      component: PageHomeComponent,
    },
    {
      path: '**', // Wildcard route for handling 404 (optional)
      redirectTo: '',
    },
];
