import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import Link from "next/link"
import ContactForm from "@/components/Forms/ContactUs";
import ShapeAnimation from "@/components/ShapeAnimation";
import BlurAnimation from "@/components/BlurAnimation";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { AOSInit } from "@/components/Aos";
import { ContactData } from "@/hooks/contactData";
import Loading from "@/components/Loading";
import LocationMap from "@/components/GoogleMap";




export default function Contact({ contactPageData, initialData }) {


  const { dataContact } = ContactData(initialData);

  const _dataContact = dataContact && dataContact.data.contact.nodes[0].contact

  const pageData = contactPageData.data.pages.nodes[0]




  //console.log(pageData.pages.subHeading)





  return (
    <>
      <Metatags data={contactPageData} />
      <Layout>
        <AOSInit />
        <section style={{ marginTop: '-120px' }} className="hero h-screen flex items-center sm:py-20 py-6 overflow-hidden relative">
          <BlurAnimation position="bottom left" />
          <div className="container-boxed z-10 relative items-end w-full">
            <div className="xl:w-5/6 mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="grid gap-7 sm:order-1 order-2">
                  <div>
                    <h1 className="lg:text-[4rem] md:text-[4rem] sm:text-[3rem] text-[2rem] leading-tight" data-aos="fade-up">
                      {pageData.title && pageData.title}
                    </h1>
                    <p className="md:text-[1.6rem] text-[1rem] mt-3" data-aos="fade-up" data-delay="500">{pageData.pages.subHeading && pageData.pages.subHeading}</p>
                  </div>
                </div>
                <div className="grid gap-7 sm:order-1 order-2">
                  <div className="flex" data-aos="fade-up">
                    <div className='gap-3 sm:gap-5 grid mt-5'>
                      {!_dataContact && <Loading />}
                      <p className='text-xl sm:text-3xl leading-8 sm:leading-10'>{_dataContact && _dataContact.heading}</p>
                      <p className='text-xl sm:text-3xl leading-8 sm:leading-10'>{_dataContact && _dataContact.address}</p>
                      {_dataContact &&
                        <>
                          <Link title="Phone" aria-label="Phone" className="hover:text-sky-500 hover:animate-pulse text-xl sm:text-3xl leading-10" href={`tel:${_dataContact.phone}`}>{_dataContact.phone}</Link>
                          <Link title='Email' aria-label='Email' className="hover:text-sky-500 hover:animate-pulse text-xl sm:text-3xl leading-10" href={`mailto:${_dataContact.email}`}>{_dataContact.email}</Link>
                        </>
                      }
                      <ul className='social mt-3 flex gap-[10px]'>
                        {_dataContact &&
                          <>
                            <li>
                              <Link aria-label="Facebook" href={_dataContact.facebook} target='_blank' title="Facebook">
                                <svg className="e-font-icon-svg e-fab-facebook-f" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                              </Link>
                            </li>
                            <li>
                              <Link aria-label="Instagram" href={_dataContact.instagram} target='_blank' title="Instagram">
                                <svg className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                              </Link>
                            </li>
                            <li>
                              <Link aria-label="Linkedin" href={_dataContact.linkedin} target='_blank' title="Linkedin">
                                <svg className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                              </Link>
                            </li>
                          </>
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden flex items-center sm:order-2 order-1">
                  <ShapeAnimation large />
                </div>
              </div>
            </div>
          </div>
          <BackgroundAnimation />
        </section>
        <section className="sm:py-20 py-6 relative overflow-hidden">
          <div className="container z-10  items-center">
            <div className="grid lg:w-3/5 mx-auto gap-10">
              <h2 data-aos="fade-up" className="md:text-[1.6rem] text-[1rem]">What can we help you with? Drop us a few lines and we&apos;ll get back to you
              </h2>
              <div data-aos="fade-up">
                <ContactForm />
              </div>
            </div>
          </div>
          <BlurAnimation position="top right" />
        </section>
        <section className="relative overflow-hidden">
         <LocationMap/>
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {

  try {

    //HOME PAGE DATA
    const contactData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
          pages(where: {id:821}){
            
          nodes{
            title
             pages{
                subHeading
              }
                seo {
                 canonical
focuskw
opengraphSiteName
                    metaDesc
                    metaKeywords
                    title
                    opengraphDescription
                    opengraphSiteName
                    opengraphUrl
                    opengraphImage {
                      altText
                      link
                      sourceUrl
                    }
                    opengraphType
                    opengraphTitle
                    opengraphModifiedTime
                    twitterDescription
                    twitterTitle
                    twitterImage {
                      sourceUrl
                    }
                  }
          }
            
            }
          }
          `,
      }),
      next: { revalidate: 10 },
    },
      {
        cache: 'force-cache',
        cache: 'no-store'
      }
    );
    const contactPageData = await contactData.json();

    return {
      props: {
        contactPageData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

  }
}


