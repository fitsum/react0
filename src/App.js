import {useEffect, useRef} from 'react';

const MyList = () => {
  const weather = useRef( null )
  useEffect( () => {
    ( async () => {
      weather.current = ( await ( await fetch( 'https://dumbservices.com:9994/forecasts/current' ) ).json() ).result[ 0 ]

    } )()
  }, [] )

  const styles = {
    forKey: {fontVariant: 'none'},
    ForValue: {fontStyle: 'italic'},
    forList: {overflow: 'scroll', listStyleType: 'none', paddingInlineStart: '0.5rem'}
  }
  const currentWeather = weather.current ?? {}
  const forecast = [ ...Object.entries( currentWeather ) ]
    .filter(entry => !['id'].includes(entry[0]))
    .filter( entry => entry[ 1 ] )
    .map( item => <li key={item[0]}><span style={styles.forKey}>{item[ 0 ]}</span> <span style={styles.forValue}>{item[ 1 ]}</span></li> )
  return ( <ul style={styles.forList}>{forecast}</ul> )
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
