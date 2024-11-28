import { useEffect, useState } from 'react';

  const styles = {
    forKey: { fontVariant: 'none' },
    ForValue: { fontStyle: 'italic' },
    forList: { overflow: 'scroll', minHeight: '200px', listStyleType: 'none', paddingInlineStart: '0.5rem' }
  }

  const listify = data => [ ...Object.entries( data ) ]
    .filter( entry => ![ 'id' ].includes( entry[ 0 ] ) )
    .filter( entry => entry[ 1 ] )
    .map( item => <li key={item[ 0 ]}><span style={styles.forKey}>{item[ 0 ]}</span> <span style={styles.forValue}>{item[ 1 ]}</span></li> )

const MyList = () => {
  const fetchURL = 'https://dumbservices.com:9994/forecasts/current'
  const [ forecast, setForecast ] = useState( null )
  useEffect( () => {
    ( async () => {
      const d = await( await fetch( fetchURL ) ).json()
      setForecast( listify( d ) )
    } )()
  }, [ ] )

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
