import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Social.css"

function Social(){
    return(
    <>
        <footer className="socialbar">
            <ul className="social-list">
                <li><a href="https://github.com/Abdo-06w" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li> 
                <li><a href="https://www.linkedin.com/in/abdosamad-el-hachlafi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>    
                <li><a href="https://x.com/Abdosamad_Elh" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></li>       
            </ul>
            <p className='social-c'>© 2026 Abdosamad El Hachlafi</p>
        </footer>
    </>
    )
}

export default Social;