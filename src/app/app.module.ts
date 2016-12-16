import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Routing } from './app.routes';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavBarComponent } from './widgets/nav-bar/nav-bar.component';
import { NavMenuComponent } from './widgets/nav-menu/nav-menu.component';
import { PulsoDiarioComponent } from './pages/pulso-diario/pulso-diario.component';
import { SeguimientoPreaprobadosComponent } from './pages/seguimiento-preaprobados/seguimiento-preaprobados.component';
import { CreditoPreaprobadosComponent } from './pages/credito-preaprobados/credito-preaprobados.component';
import { CreditoPresupuestoComponent } from './pages/credito-presupuesto/credito-presupuesto.component';
import { CreditoColocacionComponent } from './pages/credito-colocacion/credito-colocacion.component';
import { CreditoFinanciamientoComponent } from './pages/credito-financiamiento/credito-financiamiento.component';
import { CampNominasComponent } from './pages/camp-nominas/camp-nominas.component';
import { MapaEmpresasComponent } from './pages/mapa-empresas/mapa-empresas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavBarComponent,
    NavMenuComponent,
    PulsoDiarioComponent,
    SeguimientoPreaprobadosComponent,
    CreditoPreaprobadosComponent,
    CreditoPresupuestoComponent,
    CreditoColocacionComponent,
    CreditoFinanciamientoComponent,
    CampNominasComponent,
    MapaEmpresasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
