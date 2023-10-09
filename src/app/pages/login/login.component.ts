import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(
    private service: SpotifyService,
    private router: Router,
  ){}

  ngOnInit(){
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback(){
    const token = this.service.obterTokenUrlCallback();
    if(token){
      this.service.definirAcessToken(token);
      this.router.navigate(['/player']);
    }

  }

  abrirPaginaLogin(){
    window.location.href = this.service.obterUrlLogin();
  }
}
