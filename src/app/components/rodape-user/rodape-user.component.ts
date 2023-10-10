import { Component, OnInit } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-rodape-user',
  templateUrl: './rodape-user.component.html',
  styleUrls: ['./rodape-user.component.scss']
})
export class RodapeUserComponent implements OnInit{

  logoutIcone = faSignOut;
  usuario: IUsuario = null;

  constructor(
    private service: SpotifyService,
  ){}
  ngOnInit(): void {
    this.service.obterSpotifyUsuario();
    console.log(this.service.usuario);
  }
}
