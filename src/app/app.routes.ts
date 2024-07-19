import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdoptionComponent } from './components/adoption/adoption.component';
import { GroomingComponent } from './components/grooming/grooming.component';
import { DaycareComponent } from './components/daycare/daycare.component';
import { TrainingComponent } from './components/training/training.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

export const routes: Routes = [
	{path:'',title:'home',component:HomeComponent},
	{path:'about',title:'about',component:AboutComponent},
	{path:'adoption',title:'adoption',component:AdoptionComponent},
	{path:'grooming',title:'grooming',component:GroomingComponent},
	{path:'daycare',title:'daycare',component:DaycareComponent},
	{path:'training',title:'training',component:TrainingComponent},
	{path:'shopping',title:'shopping',component:ShoppingComponent},

	{path:'contact',title:'contact',component:ContactComponent},

];
