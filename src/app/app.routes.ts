import { Routes } from "@angular/router";
import { authGuard } from "./guards/auth.guard";

export const AppRotas: Routes = [
  {
    path:'',
    redirectTo:'player',
    pathMatch: 'full'
  },
  {
    path:'player',
    loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerModule),
    canActivate: [authGuard]
    /*resolve: {
      usuarioEstaLogado: authResolver,
    }*/
  },
  {
    path:'login',
    loadChildren:() => import('./pages/login/login.module').then(m => m.LoginModule)
  }
]
