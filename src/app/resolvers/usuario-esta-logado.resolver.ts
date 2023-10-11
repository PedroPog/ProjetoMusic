import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { SpotifyService } from "../services/spotify.service";

export const usuarioEstaLogadoResolver = () => new Promise(async (res, rej) => {
  const spotifyService = inject(SpotifyService);
  const router = inject(Router);

  const naoAutenticado = () => {
    localStorage.clear();
    router.navigateByUrl('/login');
    rej('USUARIO NAO AUTENTICADO!')
    return false;
  }

  const token = localStorage.getItem('token');

  if (!token) {
    return naoAutenticado();
  }

  const usuarioCriado = await spotifyService.inicializarUsuario();
  if (usuarioCriado)
    //setTimeout(() =>{
      res(true);
    //},5000);
  else
    res(naoAutenticado());

  return false;
})
