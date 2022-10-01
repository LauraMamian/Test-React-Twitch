import React, { useEffect, useState, useRef } from 'react'

export default function Search() {
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
    <div className='flex-col w-11/12 min-h-screen flex justify-center items-center md:justify-start'>
      <div className="w-11/12 mt-20 mb-20 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-white mb-4 justify-center items-center"> Search game </h1>

        <input className='m-4 appearance-none border-transparentout outline-none rounded-lg text-slate-900 w-full p-1 focus:border-transparent focus:ring-0' placeholder='Search' type="search" onChange={() => obtenerToken(inputSearch.current.value)} ref={inputSearch} name="" id="" />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {
            games.map((game) => {
              return (
                <div className='flex flex-row items-center' key={game.id}>
                  <img className='w-15 h-15 rounded-xl' src={game.box_art_url} alt="imagen" />
                  <p className='ml-4'>{game.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}