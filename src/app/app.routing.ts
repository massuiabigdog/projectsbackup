import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { PageComponent } from "./page/page.component";
import { DepartmentListComponent } from "./department-list.component";
import { DepartmentDetailComponent } from "./department-detail.component";
import { NgModule } from "@angular/core";

 const APP_ROUTES: Routes = [
         { path: '', redirectTo: '/about', pathMatch: 'full'},
         { path: 'about', component: AboutComponent},
{ path: 'page', component: PageComponent},   
        { path: 'departments/:id', component: DepartmentDetailComponent},
 ];

// const routes: Routes = [
//         { path: 'about', component: AboutComponent},
//         { path: 'departments/:id', component: DepartmentDetailComponent},
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
export const routingComponents = [PageComponent, AboutComponent, DepartmentListComponent, DepartmentDetailComponent]



export const routing = RouterModule.forRoot(APP_ROUTES);