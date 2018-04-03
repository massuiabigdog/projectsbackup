import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { routing } from './app.routing';
import { PageComponent } from './page/page.component';
import { JobListComponent } from "./Job-list.component";
import { JobDetailComponent } from "./Job-detail.component";
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    PageComponent,
    JobDetailComponent,
    JobListComponent,
 ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
