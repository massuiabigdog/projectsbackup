import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PageComponent } from "./page/page.component";
import { JobListComponent } from "./Job-list.component";
import { JobDetailComponent } from "./Job-detail.component";
import { PostComponent } from './post/post.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

import { NgModule } from "@angular/core";

 const APP_ROUTES: Routes = [
        { path: '', redirectTo: '/home', pathMatch: 'full'},
        { path: 'about', component: AboutComponent},
        { path: 'page', component: PageComponent},   
        { path: 'contact', component: ContactComponent},   
        { path: 'home', component: HomeComponent},   
        { path: 'post/:id', component: PostComponent},
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
export const routingComponents = [PageComponent, AboutComponent, JobListComponent, JobDetailComponent, PostComponent]



// export const routing = RouterModule.forRoot(APP_ROUTES);


export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);