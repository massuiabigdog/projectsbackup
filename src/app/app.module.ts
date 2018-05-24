import { VERSION } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser';
import { Jquery } from 'jquery/dist/jquery.min.js'
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { CurveComponent } from './curve/curve.component';

import { routing } from './app.routing';

import { appRoutingProviders }  from './app.routes';
import { PageComponent } from './page/page.component';
import { JobListComponent } from "./Job-list.component";
import { JobDetailComponent } from "./Job-detail.component";
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    PageComponent,
    FooterComponent,
    JobDetailComponent,
    JobListComponent,
    PostComponent,
    HomeComponent,
    CurveComponent,
 ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
