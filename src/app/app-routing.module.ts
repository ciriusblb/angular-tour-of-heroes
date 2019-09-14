import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

// path: una cadena que coincide con la URL en la barra de direcciones del navegador.
// component: el componente que el enrutador debe crear al navegar a esta ruta.

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true})],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


// --flatcoloca el archivo en src/applugar de su propia carpeta.
// --module=apple dice a la CLI que lo registre en la importsmatriz de AppModule.

// Se llama al método forRoot()porque configura el enrutador en el nivel raíz de la aplicación.

// El forRoot()método proporciona los proveedores de servicios y las directivas necesarias para el enrutamiento,
// y realiza la navegación inicial en función de la URL actual del navegador.
