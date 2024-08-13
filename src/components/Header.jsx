

"use client"
import Link from 'next/link';
import Logo from './Logo';
import BlurAnimation from './BlurAnimation';
import { motion, useViewportScroll } from 'framer-motion';
import { HeaderData } from '@/hooks/headerData';
import { ContactData } from '@/hooks/contactData';
import { useModalContext } from '@/context/modalContext';
import { useState, useEffect, use } from 'react';
import { useThemeContext } from '@/context/themeContext';
import { frontendUrl } from '@/utils/variables';


function Nav({ initialData, type }) {


  const { setModalFor, setShowModal } = useModalContext()








  const { dataHeader } = HeaderData(initialData);

  const { dataContact } = ContactData(initialData);



  //THEME
  // const [lightTheme, setLightTheme] = useState(true);

  // useEffect(() => {
  // 	const theme = localStorage.getItem('theme');
  // 	if (theme === 'light') {
  // 		setLightTheme(true);
  // 	} else {
  // 		setLightTheme(false);
  // 	}
  // }, []);

  // useEffect(() => {
  // 	if (lightTheme) {
  // 		document.documentElement.classList.add('light');
  // 		localStorage.setItem('theme', 'light');
  // 	} else {
  // 		document.documentElement.classList.remove('light');
  // 		localStorage.setItem('theme', 'dark');
  // 	}
  // }, [lightTheme]);


  const { theme, toggleTheme } = useThemeContext();


  const jsonString = JSON.stringify(dataHeader);

  function parseJsonSafe(jsonString) {
    try {
      const jsonObject = JSON.parse(jsonString);
      return jsonObject;
    } catch (error) {
      return null;
    }
  }

  const jsonObject = parseJsonSafe(jsonString);

  const contactData = dataContact && dataContact.data.contact.nodes[0].contact

  //console.log(contactData)

  //TOGGLE MENU
  const [isOpen, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const [branding, setBranding] = useState(false);
  const [marketing, setMarketing] = useState(false);





  const showMarketing = () => {
    setMarketing(!marketing)
    setBranding(false)
  }


  const showBranding = () => {
    setBranding(!branding)
    setMarketing(false)
  }




  const [hidden, setHidden] = useState(false);
  const { scrollY } = useViewportScroll();

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const headerVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.2 },
        y: { duration: 0.2 },
      },
    },
    hidden: {
      opacity: 0,
      y: '-100%',
      transition: {
        opacity: { duration: 0.2 },
        y: { duration: 0.2 },
      },
    },
  };



  const openCallBackModal = () => {
    setShowModal(true)
    setModalFor('callback')
  };


  return (<>
    {/* HEADER START */}
    <motion.div
      className="sticky "
      variants={headerVariants}
      animate={hidden ? 'hidden' : 'visible'}
    >
      <header className={`header `}>
        <div className="sm:px-8 px-4">
          <div className="inner---">
            {/* {theme} */}
            <Logo url={`${frontendUrl}images/upturnist-logo.webp`} alt="branding_and_digital_marketing_dubai_upturnist_logo" logoTitle="branding and digital marketing dubai upturnist logo" />
            <div className='wrpr--nav-1'>
              {/* <button className='hamburger-button cursor-pointer'  onClick={() => setLightTheme(!lightTheme)}> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path></svg> */}
              {/* </button> */}
              {type == 'normal' ?
                <>
                  <button
                    title="Open Menu"
                    aria-label="Hamburger Button"
                    onClick={() => setOpen(!isOpen)}
                    className={`hamburger-button cursor-pointer`}
                  >
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 10">
                      <g id="Group 12" stroke="#DCF4FF" strokeLinecap="round" strokeWidth="2">
                        <path id="Line 2" d="M7 1.346h18" />
                        <path id="Line 3" d="M1 8.346h17" />
                      </g>
                    </svg>
                  </button>
                  <button title="Schedule a Call" aria-label="Schedule a Call" className='btn button' onClick={openCallBackModal}>Schedule a Call</button>
                </>
                :
                <button title="Schedule a Call" aria-label="Schedule a Call" className='btn button' onClick={openCallBackModal}>Book Your Strategy Call </button>
              }

            </div>
          </div>
        </div>
      </header>
    </motion.div>
    {/* HEADER END */}
    {/* MOBILE MENU */}
    <div className={`header-nav-wrpr  ${isOpen ? "show-nav" : "hidden-nav"}`}>
      <div className="wrpr bg-primary-custom ">


        <button title="Close Menu" aria-label="Close Menu" className="closeButton mb-10" onClick={() => setOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dcf4ff" viewBox="0 0 256 256"><path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path></svg>
        </button>


        <div className='nav-wrpr--'>
          <div className='col-'>
            <span className="label--">MENU</span>
            <ul className='list-ul-1'>
              <li>
                <Link title="Home link header" onClick={() => setOpen(!isOpen)} aria-label='Home' href="/" >Home</Link>
              </li>
              <li className='grid gap-[8px]'>
                <a title="Services link header" onClick={() => setServices(!services)} aria-label='Services' href="#" >Services</a>
                <ul className={`${services ? "" : "hidden"} ul-1 grid `}>
                  <li>
                    <a title="Branding link header" onClick={showBranding} aria-label='Services' href="#">Branding</a>
                    <ul className={`${branding ? "" : "hidden"} wrpr-ul grid`}>
                      <li><Link title="Brand Themes link header" onClick={() => setOpen(!isOpen)} aria-label="Brand Themes" href="/brand-themes/" >Brand Themes</Link></li>
                      <li><Link title="Logo Design link header" onClick={() => setOpen(!isOpen)} aria-label="Logo Design" href="/logo-design/" >Logo Design</Link></li>
                      <li><Link title="Brand Collateral link header" onClick={() => setOpen(!isOpen)} aria-label="Brand Collateral" href="/brand-collateral/" >Brand Collateral</Link></li>
                      <li><Link title="Brand Consulting link header" onClick={() => setOpen(!isOpen)} aria-label="Brand Consulting" href="/branding-consulting/" >Brand Consulting</Link></li>
                      <li><Link title="Website Design & Development link header" onClick={() => setOpen(!isOpen)} aria-label="Website Design & Development" href="/web-design-agency-dubai/" >Website Design & Development</Link></li>
                      <li><Link title="e-Commerce Website link header" onClick={() => setOpen(!isOpen)} aria-label="e-Commerce Website" href="/e-commerce-websites-development/" >e-Commerce Website</Link></li>
                      <li><Link title="App Development link header" onClick={() => setOpen(!isOpen)} aria-label="App Development" href="/app-development/" >App Development</Link></li>
                    </ul>
                  </li>
                  <li>
                    <a onClick={showMarketing} title='Funnel Marketing link header' aria-label='Services' href="#" >Funnel Marketing</a>
                    <ul className={`${marketing ? "" : "hidden"} wrpr-ul grid`}>
                      <li><Link title="SEO link header" onClick={() => setOpen(!isOpen)} aria-label="SEO" href="/best-seo-company-dubai/" >SEO</Link></li>
                      <li><Link title="SEM link header" onClick={() => setOpen(!isOpen)} aria-label="SEM" href="/search-engine-marketing/" >SEM</Link></li>
                      <li><Link title="SMM link header" onClick={() => setOpen(!isOpen)} aria-label="SMM" href="/social-media-management-dubai/" >SMM</Link></li>
                      <li><Link title="Email Marketing link header" onClick={() => setOpen(!isOpen)} aria-label="Email Marketing" href="/email-marketing-dubai/" >Email Marketing</Link></li>
                      <li><Link title="Content Marketing link header" onClick={() => setOpen(!isOpen)} aria-label="Content Marketing" href="/content-marketing/" >Content Marketing</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link title="Packages link header" onClick={() => setOpen(!isOpen)} aria-label='Contact' href="/packages/" >Packages</Link>
              </li>
              <li>
                <Link title="About Us link header" onClick={() => setOpen(!isOpen)} aria-label='About Us' href="/about/" >About Us</Link>
              </li>
              <li>
                <Link title="Portfolio link header" onClick={() => setOpen(!isOpen)} aria-label='Portfolio' href="/portfolio/" >Portfolio</Link>
              </li>
              <li>
                <Link title="Blog link header" onClick={() => setOpen(!isOpen)} aria-label='Blog' href="/blogs/" >Blog</Link>
              </li>
              <li>
                <Link title="Contact link header" onClick={() => setOpen(!isOpen)} aria-label='Contact' href="/contact" >Contact</Link>
              </li>
            </ul>
          </div>
          <div>

            <span className="label--">CONTACT</span>
            <div className='col--2'>
              <p className='p-1--' dangerouslySetInnerHTML={{ __html: contactData && contactData.heading }} />
              <p className='p-2--' dangerouslySetInnerHTML={{ __html: contactData && contactData.address }} />
              {contactData &&
                <>
                  <Link aria-label="Phone" href={`tel:${contactData && contactData.phone}`}>{dataContact && contactData.phone}</Link>
                  <Link aria-label='Email' href={`mailto:{contactData.email && contactData.email}`}>{contactData && contactData.email}</Link>
                </>
              }
              <ul className='social'>
                {contactData &&
                  <>
                    <li>
                      <Link aria-label="Facebook" title="Facebook link header" href={contactData && contactData.facebook} target='_blank'>
                        <svg className="e-font-icon-svg e-fab-facebook-f" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                      </Link>
                    </li>
                    <li>
                      <Link aria-label="Instagram" title="Instagram link header" href={contactData && contactData.instagram} target='_blank'>
                        <svg className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                      </Link>
                    </li>
                    {/* <li> */}
                    {/* <Link aria-label="Twitter" href={contactData && contactData.twitter} target='_blank'> */}
                    {/* <svg className="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg> */}
                    {/* </Link> */}
                    {/* </li> */}
                    <li>
                      <Link aria-label="Linkedin" title="Linkedin link header" href={contactData && contactData.linkedin} target='_blank'>
                        <svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                      </Link>
                    </li>
                  </>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BlurAnimation position="bottom left" />
    </div>
  </>)


}


export default Nav



