import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';

export const routes: Routes = [
    {
      path: '', // Default route
      component: PageHomeComponent,
    },
    {
      path: 'home', // Default route
      component: PageHomeComponent,
    },
    {
      path: 'about',
      component: PageAboutComponent,
    },
    {
      path: '**', // Wildcard route for handling 404 (optional)
      component: PageNotFoundComponent,
    },
];
