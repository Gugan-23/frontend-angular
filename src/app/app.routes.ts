import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import {EventDetailsComponent} from './event-details/event-details.component';
import {ContactComponent} from './contact/contact.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {CarrerComponent}  from './carrer/carrer.component';
import { ProductsfetchComponent } from './productsfetch/productsfetch.component';
import {ViewproductComponent} from './viewproduct/viewproduct.component'
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Events', component: EventsComponent },
  
  { path: 'viewproduct/:id', component: ViewproductComponent },
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Contact', component: ContactusComponent },
  { path: 'user-detail/:id', component: UserDetailComponent } ,
  {path :'event/:id',component :EventDetailsComponent},
  { path: 'event-details/:id', component: EventDetailsComponent },
  
  { path: 'carrer', component: CarrerComponent },
  { path: 'products', component: ProductsfetchComponent },
  {path :'Contactus',component : ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
