import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareersComponent } from './components/careers/careers.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about-us',
        component:AboutComponent
    },
    {
        path:'contact-us',
        component:ContactUsComponent
    },
    {
        path:'careers',
        component:CareersComponent
    }
];
