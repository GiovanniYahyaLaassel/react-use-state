import { useState } from 'react'
import './App.css'
import languages from './Data/languages'

function App() {
  const [activeLanguage, setActiveLanguage] = useState('HTML')  
  // console.log('Stato attivo:', activeLanguage);

  // cerco dentro l'array per ottenere un linguaggio attivo 
  const activeData = languages.find(language => language.title === activeLanguage);
  // console.log('Dati del linguaggio', activeData);

  // faccio un metodo map per creare i bottoni 
  const buttons = languages.map((language) => {
    // console.log('genero il bottone', language.title);
    return (
      <button 
        key={language.id}
        onClick={() => setActiveLanguage(language.title)}  //creo l'evento click 
        // creo le classi per evidenziare il colore 
        className={activeLanguage === language.title ? 'active' : 'inactive'}
      >
        {language.title}
      </button>
    );
  });

  return (
    <>
    <div>
      <h1>Learn Web development</h1>
      <div className='button-container'>{buttons}</div>

      {/* creo la card dinamica */}
      {activeData && (
        <div className='card'>
          <h2>{activeData.title}</h2>
          <p>{activeData.description}</p>
        </div>
      )}
    </div>
    </>
  )
}

export default App
