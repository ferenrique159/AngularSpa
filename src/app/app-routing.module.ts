import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesIndvComponent } from './components/heroes-indv/heroes-indv.component';

const routes: Routes = [

  { path:  'home', component: HomeComponent },
  { path : 'about', component : AboutComponent },
  { path : 'heroes', component : HeroesComponent },
  { path : 'heroes/:id', component : HeroesIndvComponent },
  { path : 'buscar/:buscarHeroe', component : SearchComponent },
  { path : '**', pathMatch: 'full', redirectTo : 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
