import React from "react";
import styles from "./cssfiles/smallcard.module.css"
function Smallcard() {

    return <>
        <div className={styles.parentdiv}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '50%' }}>
                <h2 style={{ color: "white", marginInline: 'auto', marginTop: '10px' }}>Kishan Chaudhary</h2>
                <img src="src/assets/kishanprofilephoto.jpg" className={styles.profilephoto} />
            </div>

            <hr style={{ color: "white", marginTop: '10px', marginInline: '10px' }} ></hr>
            <div className={styles.personalcontact}>
                <div>
                    <div className={styles.personalcontactsingle} >
                        <img src="src/assets/email.png" className={styles.cardicons}></img>
                        <h5 className={styles.contacttext} >kishanchaudharyooo9@gmail.com</h5>
                    </div>
                    <div className={styles.personalcontactsingle} >
                        <img src="src/assets/linkedin.png" className={styles.cardicons}></img>
                        <a className={styles.contacttext} href="https://www.linkedin.com/in/kishan-chaudhary-63a137282" target="_blank" rel="noopener noreferrer">
                            Kishan Chaudhary
                        </a>
                    </div>
                </div>
                <div>
                    <div className={styles.personalcontactsingle} >
                        <img src="src/assets/github.png" className={styles.cardicons}></img>
                        <a className={styles.contacttext} href="https://github.com/kishanchaudhary009" target="_blank" rel="noopener noreferrer">kishanchaudhary009</a>
                    </div>
                    <div className={styles.personalcontactsingle} >
                        <img src="src/assets/location.png" className={styles.cardicons}></img>
                        <h5 className={styles.contacttext} > Pune, Maharashtra, India</h5>
                    </div>
                </div>

            </div>
        </div>

    </>
}
export default Smallcard;