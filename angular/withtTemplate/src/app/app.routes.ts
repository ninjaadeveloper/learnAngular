import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path:"",component:HomeComponent },
    { path:"shop",component:ShopComponent },
    { path:"about",component:AboutComponent }
];
