import {useEffect, useState} from 'react';

const MyList = () => {
  const [ weather, setWeather ] = useState( null )
  useEffect( () => {
    ( async () => {
      /* fetch( 'https://dumbservices.com:9994/forecasts/current' ).then(data => data.json()).then(weather => setWeather(weather) ) */
      setWeather('<li>1</li><li>2</li>')
    } )()
  }, [ weather ] )

  const styles = {
    forKey: {fontVariant: 'none'},
    ForValue: {fontStyle: 'italic'},
    forList: {overflow: 'scroll', listStyleType: 'none', paddingInlineStart: '0.5rem'}
  }
  /* const forecast = [ ...Object.entries( weather ) ] */
  /*   .filter(entry => !['id'].includes(entry[0])) */
  /*   .filter( entry => entry[ 1 ] ) */
  /*   .map( item => <li key={item[0]}><span style={styles.forKey}>{item[ 0 ]}</span> <span style={styles.forValue}>{item[ 1 ]}</span></li> ) */
  console.log({weather})
  return ( <ul style={styles.forList}>{weather}</ul> )
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
