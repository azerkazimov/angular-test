import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { NotePage } from './pages/note-page/note-page';
import { Contact } from './pages/contact/contact';
import { Movies } from './pages/movies/movies';
import { MoviesPage } from './pages/movies-page/movies-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'note/:id',
    component: NotePage,
  },
  {
    path: 'movies',
    component: Movies
  },
  {
    path: 'movies/:id',
    component: MoviesPage
  }
];
