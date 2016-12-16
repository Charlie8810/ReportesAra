import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { InicioComponent } from './pages/inicio/inicio.component';
import { PulsoDiarioComponent } from './pages/pulso-diario/pulso-diario.component'

const routes: Routes = [
    // Root
    { path: '', component: InicioComponent},
    { path: 'pulso-diario', component: PulsoDiarioComponent}


];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
