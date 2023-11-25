import profile from './assets/images/CV.svg'
import html from './assets/images/html.webp'
import css from './assets/images/css.png'
import bootsrtap from './assets/images/Bootstrap.png'
import react from './assets/images/react.png'
import github from './assets/images/GitHub.svg'
import javascript from './assets/images/Javascript.png'
import jquery from './assets/images/jquery.png'
import axios from './assets/images/axios.png'
import facebook from './assets/images/facebook.svg'
import ig from './assets/images/instagram.svg'
import linkedin from './assets/images/linkedin.svg'
import uxlogo from './assets/images/UXlogo.png'
import edu from './assets/images/edu.svg'
import education from './assets/images/education.svg'
import sideArrow from './assets/images/side_arrow.svg'
import languages from './assets/images/languages.svg'
import lgu from './assets/images/internet.svg'
import email from './assets/images/email.svg'
import whatsapp from './assets/images/whatsapp.svg'
import map from './assets/images/location.svg'
import figma from './assets/images/figma.png'
import './App.css'
import { SlScreenSmartphone } from 'react-icons/sl'
import { TfiMapAlt } from 'react-icons/tfi'
import { IoSchoolOutline } from 'react-icons/io5'
import { GrLanguage } from 'react-icons/gr'
import { TfiEmail } from 'react-icons/tfi'
import Card from './components/Card/Card.jsx'
import { cardData, educationData } from './data/data'
import EducationCard from './components/EducationCard/EducationCard.jsx'
import Navbar from './components/Navbar/Navbar.jsx'


function App() {


  return (
    <>

      <div className='background'>

        <section className='nav__bar'>

          <Navbar />

        </section>

        <div className='container-photo'>


          <img className='image' src={profile} alt="profile" />
          <div className='pharagraph'>
            <h1 className='name'>Kyal Sin</h1>
            <h2 className='status'>Student & Website Developer</h2>
            <h3 className='me'>About Me</h3>
            <p className='about-me'>I am a dedicated  21 years old IT student
              at NCC Education(UK),
              known for my strong sense
              of responsibility and
              meticulous organization.
              I am eagerly anticipating my
              first professional work
              experience, where I aim to
              apply my skills and passion
              for the field to contribute
              effectively and learn from
              the industry.</p>

          </div>

        </div>
      </div>

      <div className="personal-info">

        <div className='Education__languages'>
          {educationData.map((data, index) => (
            <EducationCard data={data} key={index} />
          ))}
        </div>

        <hr className='hr__decor' />
        <h2 className='title' id='skill'>Skills</h2>

        <div className='info'>
          <div className='skill'>
            <img className='logo' src={html} alt="" />
            <img className='logo' src={css} alt="" />
            <img className='logo' src={javascript} alt="" />
            <img className='logo' src={github} alt="" />
          </div>

          <div className='skill'>
            <img className='logo' src={bootsrtap} alt="" />
            <img className='logo' src={jquery} alt="" />
            <img className='logo' src={react} alt="" />
            <img className='logo' src={figma} alt="" />
          </div>

        </div>

        <hr className='hr__decor' />
        <div className='info'>

          <div className='project__design'>
            <h2 className='caption' id='project'>Projects</h2>
            {
              cardData.map((data, index) => (<Card dataCard={data} />)
              )
            }

          </div >

        </div >
      </div >

      <div className="contacts">
        <h2 className='title' id='contact'>Contacts</h2>
        <div className="ph__email">
          <p className='information'> <img src={whatsapp} alt="" />  09 254 777 101 </p>
          <p className='information'> <img src={email} alt="" /> kyalsin1520@gmail.com</p>
          <p className='information'> <img src={map} alt="" /> Kyun Taw Rd, Sanchaung Township, <br />   Yangon, Myanmar (Burma) </p>
        </div>

        <p className='via'> You can contact me via Email or Whatsapp.</p>
        <div className='buttons'>
          <div className='button'>
            <a className="btn" href="mailto:kyalsin1520@gmail.com" target='#blank'><img src={email} alt="" /> Email</a>
          </div>
          <div className='button'>
            <a className="btn" href="https://wa.me/9509254777101" target='#blank'><img src={whatsapp} alt="" /> Whatsapp</a>
          </div>
        </div>
      </div>

      <footer>
        <div class="footer__container">
          <div className="contects">
            <div className='socialMedia' id='socialmedia'>
              <a href="https://www.facebook.com/profile.php?id=100008186323240&mibextid=gjUFcU" target='_blank'><img src={facebook} className='contect_logo' /></a>
              <a href="https://instagram.com/kyal_sin_02?igshid=MWo2ZzVwOHRxdXQ1OQ%3D%3D&utm_source=qr" target='_blank'><img src={ig} /></a>
              <a href="https://www.linkedin.com/in/kyal-sin-1aa6ba249/" target='_blank'><img src={linkedin} /></a>
              <a href="https://github.com/Kyalsin20" target='_blank'><img src={github} /></a>

            </div>

            <div>
              <p className="copyright">© 2023 All Rights Reserved by Kyal Sin</p>
            </div>
          </div>
        </div>


      </footer>

    </>
  )

}

export default App


{/* <a href="https://kyalsin20.github.io/KForCamping/" target='_blank'><div className='cards'> <img className='logo project' src={camping} /><p>K for Camping</p></div></a>
<a href="https://kyalsin20.github.io/DiceRolling/" target='_blank'><div className='cards'> <img className='logo project' src={dice} /><p>Rolling Dice</p></div></a>
<a href="https://kyalsin20.github.io/TinDog/" target='_blank'><div className='cards'> <img className='logo project' src={tindog} /><p>Dating App for Dog</p></div></a>
<a href="https://kyalsin20.github.io/SimonGame/" target='_blank'><div className='cards'> <img className='logo project' src={game} /><p>Simon Game</p></div></a>
<a href="https://kyalsin20.github.io/DrumKit/" target='_blank'><div className='cards'> <img className='logo project' src={drum} /><p>Drum</p></div ></a> */}