import Link from "next/link";
import BlurAnimation from "./BlurAnimation";
import BackgroundAnimation from "./BackgroundAnimation";
import FooterCta from "./FooterCta";
import { ContactData } from "@/hooks/contactData";



export default function Footer({ initialData }) {

  const { dataContact } = ContactData(initialData);




  const contactData = dataContact && dataContact.data.contact.nodes[0].contact

  //console.log(contactData)

  const date = new Date();
  const year = date.getFullYear();




  return (
    <>
      <footer className="overflow-hidden sm:py-[100px] py-6 relative z-50">
        <BlurAnimation position="top left" />
        <BackgroundAnimation />
        <div className="container grid sm:gap-20 gap-3 z-10 relative">
          <div className="lg:flex grid flex-row lg:gap-10 gap-16">
            <div className="lg:basis-[30%] ">
              <FooterCta />
            </div>
            <div className="basis-[70%] md:flex grid gap-5 lg:justify-end">
              <div className="basis-[15%]">
                <span className="block tracking-[1px] opacity-50 mb-5 sm:mb-5 text-xs">SITEMAP</span>
                <ul className="text-sm">
                  <li className="mb-3"><Link title="Home" aria-label="Home" href="/" className="hover:text-sky-500 hover:animate-pulse">Home</Link></li>
                  <li className="mb-3"><Link title="Packages" aria-label="About Us" href="/packages/" className="hover:text-sky-500 hover:animate-pulse">Packages</Link></li>
                  <li className="mb-3"><Link title="About Us" aria-label="About Us" href="/about/" className="hover:text-sky-500 hover:animate-pulse">About Us</Link></li>
                  <li className="mb-3"><Link title="Portfolio" aria-label="Portfolio" href="/portfolio/" className="hover:text-sky-500 hover:animate-pulse">Portfolio</Link></li>
                  <li className="mb-3"><Link title="Blog" aria-label="Blog" href="/blogs/" className="hover:text-sky-500 hover:animate-pulse">Blog</Link></li>
                  <li className="mb-3"><Link title="Contact" aria-label="Contact" href="/contact/" className="hover:text-sky-500 hover:animate-pulse">Contact</Link></li>
                  <li className="mb-3"><Link title="Branding and Digital Marketing UAE" aria-label="Contact" href="/best-seo-company-dubai/" className="hover:text-sky-500 hover:animate-pulse">Branding and Digital Marketing UAE</Link></li>
                  <li className="mb-3"><Link title="Terms and conditions" aria-label="Contact" href="/terms-and-conditions/" className="hover:text-sky-500 hover:animate-pulse">Terms and conditions</Link></li>
                  <li className="mb-3"><Link title="Privacy policy" aria-label="Contact" href="/privacy-policy/" className="hover:text-sky-500 hover:animate-pulse">Privacy policy</Link></li>
                </ul>
              </div>
              <div className="basis-[30%]">
                <span className="block tracking-[1px] opacity-50 mb-5 sm:mb-5 text-xs">BRANDING</span>
                <ul className="text-sm">
                  <li className="mb-3"><Link title="Brand Themes" aria-label="Brand Themes" href="/brand-themes" className="hover:text-sky-500 hover:animate-pulse">Brand Themes</Link></li>
                  <li className="mb-3"><Link title="Logo Design" aria-label="Logo Design" href="/logo-design" className="hover:text-sky-500 hover:animate-pulse">Logo Design</Link></li>
                  <li className="mb-3"><Link title="Brand Collateral" aria-label="Brand Collateral" href="/brand-collateral" className="hover:text-sky-500 hover:animate-pulse">Brand Collateral</Link></li>
                  <li className="mb-3"><Link title="Brand Consulting" aria-label="Brand Consulting" href="/branding-consulting" className="hover:text-sky-500 hover:animate-pulse">Brand Consulting</Link></li>
                  <li className="mb-3"><Link title="Website Design & Development" aria-label="Website Design & Development" href="/web-design-agency-dubai" className="hover:text-sky-500 hover:animate-pulse">Website Design & Development</Link></li>
                  <li className="mb-3"><Link title="e-Commerce Website" aria-label="e-Commerce Website" href="/e-commerce-websites-development/" className="hover:text-sky-500 hover:animate-pulse">e-Commerce Website</Link></li>
                  <li className="mb-3"><Link title="App Development" aria-label="App Development" href="/app-development" className="hover:text-sky-500 hover:animate-pulse">App Development</Link></li>
                </ul>
              </div>
              <div className="basis-[20%] ">
                <span className="block tracking-[1px] opacity-50 mb-5 sm:mb-5 text-xs">FUNNEL MARKETING</span>
                <ul className="text-sm">
                  <li className="mb-3"><Link title="SEO" aria-label="SEO" href="/best-seo-company-dubai/" className="hover:text-sky-500 hover:animate-pulse">SEO</Link></li>
                  <li className="mb-3"><Link title="SEM" aria-label="SEM" href="/search-engine-marketing" className="hover:text-sky-500 hover:animate-pulse">SEM</Link></li>
                  <li className="mb-3"><Link title="SMM" aria-label="SMM" href="/social-media-management-dubai" className="hover:text-sky-500 hover:animate-pulse">SMM</Link></li>
                  <li className="mb-3"><Link title="Email Marketing" aria-label="Email Marketing" href="/email-marketing-dubai/" className="hover:text-sky-500 hover:animate-pulse">Email Marketing</Link></li>
                  <li className="mb-3"><Link title="Content Marketing" aria-label="Content Marketing" href="/content-marketing" className="hover:text-sky-500 hover:animate-pulse">Content Marketing</Link></li>
                </ul>
              </div>
              <div className="basis-[25%] ">
                <span className="block tracking-[1px] opacity-50 mb-5 sm:mb-5 text-xs">LETS CONNECT</span>
                <ul className="text-sm">
                  {contactData &&
                    <>
                      <li className="mb-3"> <p dangerouslySetInnerHTML={{ __html: contactData && contactData.heading }} /></li>
                      <li className="mb-3"> <p dangerouslySetInnerHTML={{ __html: contactData && contactData.address }} /></li>
                      <li className="mb-3"><Link title={contactData && contactData.phone} aria-label="Phone" href={`tel:${contactData && contactData.phone}`} className="hover:text-sky-500 hover:animate-pulse">{contactData && contactData.phone}</Link></li>
                      <li className="mb-3"><Link title={contactData && contactData.email} aria-label="Email" href={`mailto:${contactData && contactData.email}`} className="hover:text-sky-500 hover:animate-pulse">{contactData && contactData.email}</Link></li>
                    </>
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:flex grid flex-row gap-10">
            <div className="lg:basis-[50%] ">
              <ul className='social mt-3 flex gap-2'>
                {contactData &&
                  <>
                    <li>
                      <Link aria-label="Facebook" title="Facebook" href={contactData && contactData.facebook} target='_blank'>
                        <svg className="e-font-icon-svg e-fab-facebook-f" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                      </Link>
                    </li>
                    <li>
                      <Link aria-label="Instagram" title="Instagram" href={contactData && contactData.instagram} target='_blank'>
                        <svg className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                      </Link>
                    </li>
                    {/* <li> */}
                    {/* <Link aria-label="Twitter" href={contactData && contactData.twitter} target='_blank'> */}
                    {/* <svg className="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg> */}
                    {/* </Link> */}
                    {/* </li> */}
                    <li>
                      <Link aria-label="Linkedin" title="Linkedin" href={contactData && contactData.linkedin} target='_blank'>
                        <svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                      </Link>
                    </li>
                  </>
                }
              </ul>
            </div>
            <div className="basis-[50%] lg:text-end lg:mb-0 mb-10">
              <p>© {year} — Copyright</p>
            </div>
          </div>
        </div>
        {/* QUICK CHAT */}
        {/* <div className="fixed rounded-full w-14 h-14 bg-sky-500 hover:bg-sky-600 transition-all bottom-10 right-10 z-20 flex align-middle justify-center items-center cursor-pointer"> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 256 256"><path d="M216,50H40A14,14,0,0,0,26,64V224a13.88,13.88,0,0,0,8.09,12.69A14.11,14.11,0,0,0,40,238a13.87,13.87,0,0,0,9-3.31l.06-.05L82.23,206H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50Zm2,142a2,2,0,0,1-2,2H80a6,6,0,0,0-3.92,1.46L41.26,225.53A2,2,0,0,1,38,224V64a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z"></path></svg> */}
        {/* </div> */}
      </footer>
    </>
  )
}





