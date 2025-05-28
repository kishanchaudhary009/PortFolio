import { useState } from 'react'
import './App.css'
import Smallcard from './SmallCard'
import Aboutme from './AboutMe';
import Experience from './Experience';

function App() {
  var [currtab, setcurrtab] = useState("About Me");
  return (
    <>
      <div className='main-container'>
        <div className='leftcontainer'>
          <Smallcard></Smallcard>
        </div>
        <div className='rightcontainer'>
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'end', justifyContent: 'space-between', height: '10%' }}>
            <h2 style={{ marginInline: 'auto', alignSelf: 'self-start', marginTop: '2.5%', color: 'white' }}>{currtab}</h2>
            <div className='tabs'>
              <button className='tabsheading' onClick={() => setcurrtab("About Me")}>About Me</button>
              <button className='tabsheading' onClick={() => setcurrtab("Resume")}>Resume</button>
              <button className='tabsheading' onClick={() => setcurrtab("Projects")}>Projects</button>
              <button className='tabsheading' onClick={() => setcurrtab("Experience")}>Experience</button>
              <button className='tabsheading' onClick={() => setcurrtab("Certifications")}>Certifications</button>
            </div>
          </div>
          <div>
            {currtab === "About Me" && <Aboutme></Aboutme>}
            {currtab === "Experience" && <Experience></Experience>}
          </div>


        </div>
      </div>
    </>
  )
}

export default App
