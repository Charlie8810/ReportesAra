import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
    // Root
    { path: '', component: InicioComponent},


];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
