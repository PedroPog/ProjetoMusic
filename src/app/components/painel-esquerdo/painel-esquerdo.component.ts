import { Component } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent {

  menuSelecionado = 'Home';

  playlists: IPlaylist[] = [];

  homeIcone = faHome;
  pesquisaIcone = faSearch;
  artistaIcone = faGuitar;
  playlistIcone = faMusic;

  constructor(
    private service: SpotifyService
  ){
    this.buscarPlaylist();
  }

  botaoClick(botao: string){
    this.menuSelecionado = botao;
  }
  async buscarPlaylist(){
    this.playlists = await this.service.buscarPlaylistUsuario(); ///usar a o await para transformar um promise para object
  }
}
