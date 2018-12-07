import { NgModule } from '@angular/core';
import {Routes, RouterModule, RouterOutlet} from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
const app_rutas: Routes = [
    {path: 'home', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item/:id', component: ItemComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_rutas, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRutasModule {}
