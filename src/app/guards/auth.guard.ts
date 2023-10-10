import { SpotifyService } from 'src/app/services/spotify.service';
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class authGuard{
  constructor(
    private router: Router,
    private sportService: SpotifyService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    const token = localStorage.getItem('token');
    if(!token){
      this.notAuth();
    }
    return new Promise((res)=>{
      const usuario = this.sportService.inicializarUsuario();

      if(usuario){
        res(true);
      }else{
        res(this.notAuth());
      }
    })
  }

  notAuth(){
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }

}
