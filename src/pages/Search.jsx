import React, { useEffect, useState, useRef } from 'react'

export default function BuscarJuegos() {
  const [token, setToken] = useState(null);
  const [games, setgames] = useState([]);
  const inputSearch = useRef(null);

  const axios = require('axios');

  function obtenerToken(busqueda) {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_TOKEN_URL,
      headers: {
        "Content-Type": process.env.REACT_APP_TOKEN_CONTENT_TYPE,
      },
      params: {
        "client_id": process.env.REACT_APP_CLIENT_ID,
        "client_secret": process.env.REACT_APP_CLIENT_SECRET,
        "grant_type": process.env.REACT_APP_GRANT_TYPE,
      }
    });

    busqueda ? busqueda = busqueda : busqueda = "a";

    instance.post().then((response) => {
      const instance2 = axios.create({
        baseURL: 'https://api.twitch.tv/helix/search/categories?query=' + busqueda,
        headers: {
          "Authorization": "Bearer " + response.data.access_token,
          "Client-Id": process.env.REACT_APP_CLIENT_ID,
        },
      });

      instance2.get().then((response) => {
        setgames(response.data.data);
      }).catch((error) => { });
    }).catch((error) => { });
  }

  useEffect(() => {
    obtenerToken();
  }, [setToken, setgames]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Buscar juegos </h1>

      <input className='border-black' type="search" onChange={() => obtenerToken(inputSearch.current.value)} ref={inputSearch} name="" id="" />
      {
        games.map((game) => {
          return (
            <div key={game.id}>
              <img src={game.box_art_url} alt="imagen" />
              <p>{game.name}</p>
            </div>
          )
        })
      }
      <p>
        {token}
      </p>
    </div>
  )
}