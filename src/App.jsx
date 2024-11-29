import { useState } from 'react'
import './App.css'
import languages from './Data/languages'

function App() {
  const [activeLanguage, setActiveLanguage] = useState('HTML')  

  // console.log('Stato attivo:', activeLanguage);

  // faccio un metodo map per creare i bottoni 
  const buttons = languages.map((language) => {
    // console.log('genero il bottone', language.title);
    return (
      <button key={language.id}>
        {language.title}
      </button>
    );
  });

  return (
    <>
    <div>
      <div>{buttons}</div>
    </div>
    </>
  )
}

export default App
