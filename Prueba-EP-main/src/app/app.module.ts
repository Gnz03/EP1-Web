import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { ProyectosComponent } from './home/proyectos/proyectos.component';
import { ServiciosComponent } from './home/servicios/servicios.component';
import { AccionComponent } from './home/accion/accion.component';
import { TestimoniosComponent } from './home/testimonios/testimonios.component';
import { BlogComponent } from './home/blog/blog.component';
import { PartnersComponent } from './home/partners/partners.component';
import { CopyComponent } from './common/copy/copy.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainBannerComponent,
    NosotrosComponent,
    ProyectosComponent,
    ServiciosComponent,
    AccionComponent,
    TestimoniosComponent,
    BlogComponent,
    PartnersComponent,
    CopyComponent,
    ContactoComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
