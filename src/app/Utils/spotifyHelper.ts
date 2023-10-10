import { IPlaylist } from "../interfaces/IPlaylist";
import { IUsuario } from "../interfaces/IUsuario";

export function SpotifyUserParaUsuari(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario{
  return{
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url
  }
}

export function SpotifyPlaylistParaPlaylist(playlist:SpotifyApi.PlaylistObjectSimplified):IPlaylist{
  const imagemUrl = playlist.images ? playlist.images.pop()?.url : null;

  return{
    id: playlist.id,
    nome: playlist.name,
    imagemUrl: imagemUrl
  }
}
