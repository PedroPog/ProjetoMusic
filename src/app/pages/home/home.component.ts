import { Component} from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IMusica } from 'src/app/Interfaces/IMusica';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  musicas: IMusica[] = [];

  playIcone = faPlay;

  constructor(
    private service: SpotifyService,
  ){
    this.obterMusicas();
  }

  async obterMusicas(){
    this.musicas = await this.service.buscarMusicas();
    console.log(this.musicas);
  }
  obeterartista(musica: IMusica){
    return musica.artistas.map(artista => artista.nome).join(',');
  }

  async executarMusica(musica: IMusica){
    await  this.service.executarMusica(musica.id);
  }


}
