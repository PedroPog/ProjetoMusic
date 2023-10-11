import { addMilliseconds, format } from "date-fns";
import { IArtista } from "../Interfaces/IArtista";
import { IMusica } from "../Interfaces/IMusica";
import { IPlaylist } from "../Interfaces/IPlaylist";
import { IUsuario } from "../Interfaces/IUsuario";

export function SpotifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario{
   return {
     id: user.id,
     nome: user.display_name,
     imagemUrl: user.images.pop().url
   }
}

export function SpotifyPlaylistParaPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
  return {
    id: playlist.id,
    nome: playlist.name
  };
}


export function SpotifyArtistaParaArtista(spotifyArtista: SpotifyApi.ArtistObjectFull) :  IArtista{
  return {
    id: spotifyArtista.id,
    imagemUrl: spotifyArtista.images.sort((a,b) => a.width - b.width).pop().url,
    nome: spotifyArtista.name
  };
}

export function SpotifyTrackParaMusica(spotify: SpotifyApi.TrackObjectFull): IMusica{
  const msParaMinutos = (ms: number) =>{
    const data = addMilliseconds(new Date(0), ms);
    return format(data, 'mm:ss');
  }
  return{
    id: spotify.uri,
    titulo: spotify.name,
    album:{
      id: spotify.album.id,
      nome: spotify.album.name,
      imagemUrl: spotify.album.images.shift().url,
    },
    artistas: spotify.artists.map(artista =>({
      id: artista.id,
      nome: artista.name,
    })),
    tempo: msParaMinutos(spotify.duration_ms)
  }
}
