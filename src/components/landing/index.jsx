import './styles.css'
import { useState} from "react"
import mobileImg from '../../assets/images/hero-mobile.jpg'
import desktopImg from '../../assets/images/hero-desktop.jpg'
import logo from '../../assets/images/logo.svg'
import arrow from '../../assets/images/icon-arrow.svg'
import error from '../../assets/images/icon-error.svg'
export default function Landing(){
    const [email, setEmail] = useState("");
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    const [loginResult, setLoginResult] = useState(null);

    const handleEmail = () => {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      const isValidEmail = regex.test(email);
      console.log(loginResult)
      setLoginResult(isValidEmail);
      if (!isValidEmail) {
        setEmail(''); // Effacer l'email si ce n'est pas valide
    }
    }
    const handleButtonClick = () => {
        handleEmail ();
    }
    return (
        <div className='wrapper'>
            <div className='project'>
                 <img src={logo}
                     alt=''
                     className='project__logo'
                />
                <div className='rowfordesktop'>
                    <div className='project__imgdiv'>
                    <picture>
                        <source srcset={mobileImg} media="(max-width: 1025px)" className='project__image'></source>
                        <img src={desktopImg} alt='desktop' className='project__image'></img>
                    </picture>
                    </div>
                    <div className='columnfordesktop'>
                    <img src={logo}
                     alt=''
                     className='project__logo-desktop'
                />
                    <h1 className='project__title'><span className='project__title-color'>we're</span> coming soon</h1>
                    <p className='project__msg'>Hello fellow shoppers! We're currently building our new fashion store. Add your email to stay up-to-date with announcements and our launch deals.</p>
                <div className='project__input-btncontainer'>
                    
                    <input
                    id="email"
                    className={`project__input ${loginResult === false ? 'project__input-error' : ''}`}
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    onBlur={handleEmail} // Vérifier l'email lorsque l'utilisateur quitte l'input
                    />
                    <button onClick={handleButtonClick} className='project__button'>
                        <img src={arrow} alt="Submit" className="arrow-icon" />
                    </button>
                </div>
                    {loginResult === false && (
                    <div className='project__input-container'>
                        <p className='project__input-errormsg'>Please provide a valid email</p>
                        <img src={error} alt='error' className='project__input-errorimg' />
                    </div>
                    )}  
                    {loginResult === true &&(
                    <h2 className='project__subtitle'>An email has been sent to your email address</h2>
                    )}
                    </div>
                 </div>
            </div>
        </div>
    )
}