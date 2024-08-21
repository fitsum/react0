import React, {useEffect, useRef} from 'react';
/* import ReactDOM from 'react-dom/client'; */
/* import logo from './logo.svg'; */
/* import './App.css'; */


const MyList = () => {
  const weather = useRef( null )
  useEffect( () => {
    ( async () => {
      weather.current = ( await ( await fetch( 'https://dumbservices.com:9994/forecasts/current' ) ).json() ).result[ 0 ]

    } )()
  }, [] )
  const listKeyStyle = { fontVariant: 'none' }
  const listValueStyle = { fontStyle: 'italic' }
  const listStyle = { overflow: 'scroll', listStyleType: 'none', paddingInlineStart: '0.5rem' }
  const currentWeather = weather.current ?? {}
  const forecast = [ ...Object.entries( currentWeather ) ]
    .filter( entry => entry[ 1 ] )
    .map( item => <li><span style={listKeyStyle}>{item[ 0 ]}</span> <span style={listValueStyle}>{item[ 1 ]}</span></li> )
  console.log(weather)
  return ( <ul style={listStyle}>{forecast}</ul> )
}


const App = () => {
  const style = { overflow: 'scroll' }
  return (
    <div style={style}>
      <h1>Welcome to my app</h1>
      <MyList />
    </div>
  )
}


export default App;
