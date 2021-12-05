import React,{useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token},dispatch] = useDataLayerValue();
  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      console.log(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((_user)=>{
        dispatch({
          type: 'SET_USER',
          user: _user,
        })
      })

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcVzx6Wc9s9Bn').then(response=>{
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly:response,
        })
      })
    }
  },[])
  return (
    <div className="app">
      {token ? <Player spotify={spotify}/> : <Login/>}
    </div>
  );
}

export default App;
