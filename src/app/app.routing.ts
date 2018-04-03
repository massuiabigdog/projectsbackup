import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { PageComponent } from "./page/page.component";
import { JobListComponent } from "./Job-list.component";
import { JobDetailComponent } from "./Job-detail.component";
import { NgModule } from "@angular/core";

 const APP_ROUTES: Routes = [
         { path: '', redirectTo: '/about', pathMatch: 'full'},
         { path: 'about', component: AboutComponent},
{ path: 'page', component: PageComponent},   
        { path: 'Jobs/:name', component: JobDetailComponent},
 ];

// const routes: Routes = [
//         { path: 'about', component: AboutComponent},
//         { path: 'Jobs/:id', component: JobDetailComponent},
//         { path: 'page/:slug', component: PageComponent},        
        
// ];

@NgModule({
        imports: [
                RouterModule.forRoot(APP_ROUTES)
        ],
        exports: [
                RouterModule
        ]
})

export class AppRoutingModule{}
export const routingComponents = [PageComponent, AboutComponent, JobListComponent, JobDetailComponent]



export const routing = RouterModule.forRoot(APP_ROUTES);