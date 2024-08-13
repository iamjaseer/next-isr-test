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
      <footer className="footer">
        <BlurAnimation position="top left" />
        <BackgroundAnimation />
        <div className="container">
          <div className="wrpr">
            <div className="inner-1">
              <div>
                <FooterCta />
              </div>
              <div className="wrpr-2">
                <>
                  {contactData &&   <ul className='social'>
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
                        <li>
                          <Link aria-label="Linkedin" title="Linkedin" href={contactData && contactData.linkedin} target='_blank'>
                            <svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                          </Link>
                        </li>
                        </ul>
                   
                    }
                   <p className="md:text-[16px] text-[14px] mt-[40px]">© {year} — Copyright</p>
                </>
   </div>
            </div>
            <div className="wrpr-3">
              <div className="inner-2">
                <div>
                  <span className="heading">SITEMAP</span>
                  <ul className="list-wrpr">
                    <li><Link title="Home" aria-label="Home" href="/" className="link-hover">Home</Link></li>
                    <li><Link title="Packages" aria-label="About Us" href="/packages/" className="link-hover">Packages</Link></li>
                    <li><Link title="About Us" aria-label="About Us" href="/about/" className="link-hover">About Us</Link></li>
                    <li><Link title="Portfolio" aria-label="Portfolio" href="/portfolio/" className="link-hover">Portfolio</Link></li>
                    <li><Link title="Blog" aria-label="Blog" href="/blogs/" className="link-hover">Blog</Link></li>
                    <li><Link title="Contact" aria-label="Contact" href="/contact/" className="link-hover">Contact</Link></li>
                    <li><Link title="Branding and Digital Marketing UAE" aria-label="Contact" href="/branding-digital-marketing-uae/" className="link-hover">Branding agency in uae</Link></li>
                    <li><Link title="Terms and conditions" aria-label="Contact" href="/terms-and-conditions/" className="link-hover">Terms and conditions</Link></li>
                    <li><Link title="Privacy policy" aria-label="Contact" href="/privacy-policy/" className="link-hover">Privacy policy</Link></li>
                  </ul>
                </div>
                <div>
                  <span className="heading ">BRANDING</span>
                  <ul className="list-wrpr">
                    <li><Link title="Brand Themes" aria-label="Brand Themes" href="/brand-themes" className="link-hover">Brand Themes</Link></li>
                    <li><Link title="Logo Design" aria-label="Logo Design" href="/logo-design" className="link-hover">Logo Design</Link></li>
                    <li><Link title="Brand Collateral" aria-label="Brand Collateral" href="/brand-collateral" className="link-hover">Brand Collateral</Link></li>
                    <li><Link title="Brand Consulting" aria-label="Brand Consulting" href="/branding-consulting" className="link-hover">Brand Consulting</Link></li>
                    <li><Link title="Website Design & Development" aria-label="Website Design & Development" href="/web-design-agency-dubai" className="link-hover">Website Design & Development</Link></li>
                    <li><Link title="e-Commerce Website" aria-label="e-Commerce Website" href="/e-commerce-websites-development/" className="link-hover">e-Commerce Website</Link></li>
                    <li className="list  sm:mb-[8px] mb-[12px]"><Link title="App Development" aria-label="App Development" href="/app-development" className="link-hover">App Development</Link></li>
                  </ul>
                </div>
              </div>
              <div className="inner-2">
                <div>
                  <span className="heading ">FUNNEL MARKETING</span>
                  <ul className="list-wrpr">
                    <li><Link title="SEO" aria-label="SEO" href="/best-seo-company-dubai/" className="link-hover">SEO</Link></li>
                    <li><Link title="SEM" aria-label="SEM" href="/search-engine-marketing" className="link-hover">SEM</Link></li>
                    <li><Link title="SMM" aria-label="SMM" href="/social-media-management-dubai" className="link-hover">SMM</Link></li>
                    <li><Link title="Email Marketing" aria-label="Email Marketing" href="/email-marketing-dubai/" className="link-hover">Email Marketing</Link></li>
                    <li><Link title="Content Marketing" aria-label="Content Marketing" href="/content-marketing" className="link-hover">Content Marketing</Link></li>
                  </ul>
                </div>
                <div>
                  <span className="heading ">LETS CONNECT</span>
                  <ul className="list-wrpr">
                    {contactData &&
                      <>
                        <li> <p dangerouslySetInnerHTML={{ __html: contactData && contactData.heading }} /></li>
                        <li> <p dangerouslySetInnerHTML={{ __html: contactData && contactData.address }} /></li>
                        <li><Link title={contactData && contactData.phone} aria-label="Phone" href={`tel:${contactData && contactData.phone}`} className="link-hover">{contactData && contactData.phone}</Link></li>
                        <li><Link title={contactData && contactData.email} aria-label="Email" href={`mailto:${contactData && contactData.email}`} className="link-hover">{contactData && contactData.email}</Link></li>
                      </>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div>
              <ul className='list-wrpr social'>
                {contactData &&  <ul className='social'>
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
                        <li>
                          <Link aria-label="Linkedin" title="Linkedin" href={contactData && contactData.linkedin} target='_blank'>
                            <svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                          </Link>
                        </li>
                        </ul>
                }
              </ul>
              <p className="copyright-">© {year} — Copyright</p>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}





