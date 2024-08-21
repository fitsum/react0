import {useEffect, useRef} from 'react';

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
    .filter(entry => !['id'].includes(entry[0]))
    .filter( entry => entry[ 1 ] )
    .map( item => <li key={item[0]}><span style={listKeyStyle}>{item[ 0 ]}</span> <span style={listValueStyle}>{item[ 1 ]}</span></li> )
  return ( <ul style={listStyle}>{forecast}</ul> )
}


const App = () => {
  const style = { overflow: 'scroll' }
  return (
    <div style={style}>
      <h1>🌦️ Ornot</h1>
        <MyList/>
    </div>
  )
}


export default App;
