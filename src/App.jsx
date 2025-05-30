// import { useState } from 'react'
// import './App.css'
// import Smallcard from './SmallCard'
// import Aboutme from './AboutMe';
// import Experience from './Experience';
// import Resume from './Resume';

// function App() {
//   var [currtab, setcurrtab] = useState("About Me");
//   return (
//     <>
//       <div className='main-container'>
//         <div className='leftcontainer'>
//           <Smallcard></Smallcard>
//         </div>
//         <div className='rightcontainer'>
//           <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'end', justifyContent: 'space-between', maxHeight: '10%' }}>
//             <h2 style={{ marginInline: 'auto', alignSelf: 'self-start', marginTop: '2.5%', color: 'white' }}>{currtab}</h2>
//             <div className='tabs'>
//               <button className='tabsheading' onClick={() => setcurrtab("About Me")}>About Me</button>
//               <button className='tabsheading' onClick={() => setcurrtab("Resume")}>Resume</button>
//               <button className='tabsheading' onClick={() => setcurrtab("Projects")}>Projects</button>
//               <button className='tabsheading' onClick={() => setcurrtab("Experience")}>Experience</button>
//               <button className='tabsheading' onClick={() => setcurrtab("Certifications")}>Certifications</button>
//             </div>
//           </div>
//           <div style={{ overflowY: 'auto', scrollbarWidth: 'none' }}>
//             {currtab === "About Me" && <Aboutme></Aboutme>}
//             {currtab === "Experience" && <Experience></Experience>}
//             {currtab === "Resume" && <Resume></Resume>}
//           </div>


//         </div>
//       </div>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'
import Smallcard from './SmallCard'
import Aboutme from './AboutMe';
import Experience from './Experience';
import Resume from './Resume';
import Certifications from './Certifications';

function App() {
  const [currtab, setcurrtab] = useState("About Me");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTabChange = (tab) => {
    if (currtab !== tab) {
      setIsFlipped(true); // start flip
      setTimeout(() => {
        setcurrtab(tab);     // change content midway
        setIsFlipped(false); // reset flip
      }, 300); // timing should match flip duration
    }
  };
  return (
    <>
      <div className='main-container'>
        <div className='leftcontainer'>
          <Smallcard></Smallcard>
        </div>
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>

          <div className='rightcontainer'>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'end', justifyContent: 'space-between', maxHeight: '10%' }}>
              <h2 style={{ marginInline: 'auto', alignSelf: 'self-start', marginTop: '2.5%', color: 'white' }}>{currtab}</h2>
              <div className='tabs'>
                <button className='tabsheading' onClick={() => handleTabChange("About Me")}>About Me</button>
                <button className='tabsheading' onClick={() => handleTabChange("Resume")}>Resume</button>
                <button className='tabsheading' onClick={() => handleTabChange("Projects")}>Projects</button>
                <button className='tabsheading' onClick={() => handleTabChange("Experience")}>Experience</button>
                <button className='tabsheading' onClick={() => handleTabChange("Certifications")}>Certifications</button>
                <button className='tabsheading' onClick={() => handleTabChange("Achievements")}>Achievements</button>
              </div>
            </div>
            <div style={{ overflowY: 'auto', scrollbarWidth: 'none' }}>
              {currtab === "About Me" && <Aboutme></Aboutme>}
              {currtab === "Experience" && <Experience></Experience>}
              {currtab === "Resume" && <Resume></Resume>}
              {currtab === "Certifications" && <Certifications></Certifications>}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
