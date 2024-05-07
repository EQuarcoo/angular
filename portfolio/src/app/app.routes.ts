import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'works', component:WorksComponent},
    {path:'contact-us', component:ContactUsComponent},
    {path:'gallery', component:GalleryComponent}

];
