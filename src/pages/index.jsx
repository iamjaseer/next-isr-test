



import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import QuickContact from '@/components/QuickContact';
import Images from '@/components/Images';
import TestimonialSlider from '@/components/TestimonialSlider';
import ThreeDSlider from '@/components/WorkSlider';
import ShapeAnimation from "@/components/ShapeAnimation";
import AnimatedTextCharacter from "@/components/AnimatedText";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { useModalContext } from "@/context/modalContext";


export default function Home({ homePageData, moreServicesDatas, whoWeAreDatas, worksData, testimonialData }) {


  const pageData = homePageData.data.pages.nodes[0].homePage

  const _moreServicesData = moreServicesDatas.data.moreServices.nodes
  const _whoWeAreDatas = whoWeAreDatas.data.allWhoWeAre.nodes
  const _works = worksData.data.works.nodes
  const _testimonial = testimonialData.data.testimonials.nodes


  //console.log(_testimonial)


  const { setModalFor, setShowModal } = useModalContext()


  const openHeroModal = () => {
    setShowModal(true)
    setModalFor('hero')
  };


  const openOfferModal = () => {
    setShowModal(true)
    setModalFor('offer')
  };


  const openDownloadModal = () => {
    setShowModal(true)
    setModalFor('download')
  };

  let htmlString = pageData.seoVisibilityReportHeading1 && pageData.seoVisibilityReportHeading1
  // Method: Basic string manipulation
  let strippedHtml = htmlString.replace('<p>', '').replace('</p>', '');

  return (
    <>
      <Metatags data={homePageData} />
      <Layout>
        <AOSInit />
        <section style={{ marginTop: '-100px' }} className="hero">
          <div className="container">
            <div className="wrpr">
              <ShapeAnimation />
              <h2 data-aos="fade-up">{pageData.heroTitle && pageData.heroTitle}<span className="block">
                <AnimatedTextCharacter text={pageData.heroAnimatedHeading && pageData.heroAnimatedHeading} />
              </span>
              </h2>
              <p data-aos="fade-up" data-delay="500" dangerouslySetInnerHTML={{ __html: pageData.heroDescription && pageData.heroDescription }} />
              <div className='mt-3'>
                <button title="Let&apos;s start" aria-label="Let&apos;s start" className="btn" type="button" onClick={openHeroModal}>
                  Let&apos;s start
                </button>
              </div>
            </div>
          </div>
          <BackgroundAnimation />
        </section>
        <section className="about">
          <div className="container">
            <div className="wrpr">
              <div className="lg:basis-[100%]">
                <h1 >
                  {pageData.aboutHeadingTop && pageData.aboutHeadingTop}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="about-2">
          <div className="container">
            <div className="wrpr">
              <div className="col-left">
                <h2 className="col-right" data-aos="fade-up">{pageData.aboutHeading && pageData.aboutHeading}</h2>
              </div>
              <div className="lg:basis-[50%]">
                <p data-aos="fade-up">{pageData.aboutDescription && pageData.aboutDescription}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative">
          <div className="container">
            <QuickContact
              data={[pageData.aboutCta1 && pageData.aboutCta1, pageData.aboutCta2 && pageData.aboutCta2]}
            />
          </div>
          <BlurAnimation position="top right" />
        </section>
        <section className="about-3">
          <div className="container">
            <div className="lg:basis-[100%]">
              <p data-aos="fade-up">{pageData.aboutDescription2 && pageData.aboutDescription2}</p>
            </div>
          </div>
        </section>
        <section className="seo-report container-boxed">
          <div className="mx-auto">
            <div className="wrpr">
              <div data-aos="fade-up" className="inner">
                <div className="wrpr">
                  <div className="inner">
                    <video
                      className="video-offer"
                      src={pageData.seoVisibilityReportVideo && pageData.seoVisibilityReportVideo}
                      controls
                      muted
                      autoPlay={"autoplay"}
                      preload="none"
                      loop>
                      video tag is not supported by your browser
                    </video>
                  </div>
                  <div className="content">
                    <h3 dangerouslySetInnerHTML={{ __html: strippedHtml }} />
                    <h2>{pageData.seoVisibilityReportHeading2 && pageData.seoVisibilityReportHeading2}</h2>
                    <p>{pageData.seoVisibilityReportHeadingDescription && pageData.seoVisibilityReportHeadingDescription}</p>
                    <button title="Text us" aria-label="Text us" className='btn' onClick={openOfferModal} >Text us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlurAnimation position="top left" />
        </section>
        <section className="services-1 ">
          <div className="container-boxed">
            <div className="wrpr">
              <div>
                <h2 data-aos="fade-up">{pageData.services1Heading && pageData.services1Heading}​</h2>
                <div data-aos="fade-up" data-delay="500" className="content link-content" dangerouslySetInnerHTML={{ __html: pageData.services1Description && pageData.services1Description }} />
              </div>
              <div className="img-wrpr" data-aos="fade-up">
                <div className="photo-box-wrpr">
                  <Images
                    imageurl={'https://admin.upturnist.com/wp-content/uploads/2024/06/line-2.svg'}
                    styles={''}
                    quality={100}
                    width={'500'}
                    height={'500'}
                    alt={'SEO expert Dubai'}
                    placeholder={true}
                    classes={'frame-1 block'}
                  />
                  <div className="photo-box">
                    <figure>
                      <Images
                        imageurl={pageData.serviceImage.node.sourceUrl && pageData.serviceImage.node.sourceUrl}
                        styles={''}
                        quality={100}
                        width={'500'}
                        height={'500'}
                        alt={pageData.serviceImage.node.altText && pageData.serviceImage.node.altText}
                        placeholder={true}
                        classes={'w-full block'}
                      />
                    </figure>
                  </div>
                  <Images
                    imageurl={'https://admin.upturnist.com/wp-content/uploads/2024/06/line-1.svg'}
                    styles={''}
                    quality={100}
                    width={'500'}
                    height={'500'}
                    alt={'SEO marketing agency uae'}
                    placeholder={false}
                    classes={'frame-1 block top-0'}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-2 ">
          <div className="container">
            <div className="lg:flex">
              <div className="lg:basis-[50%]">
                <div className="wrpr">
                  <h2 data-aos="fade-up">{pageData.services2Heading && pageData.services2Heading}​</h2>
                </div>
              </div>
              <div className="lg:basis-[50%]">
                <div className='have-link list-para' dangerouslySetInnerHTML={{ __html: pageData.services2Description }} />
              </div>
            </div>
          </div>
        </section>
        <section className="downlod">
          <div className="container">
            <div data-aos="fade-up" className="text-center lg:text-start lg:basis-[100%] bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl sm:p-16 p-8 lg:flex grid lg:gap-5 gap-10 align-middle justify-between items-center">
              <h3>{pageData.downloadHeading && pageData.downloadHeading}</h3>
              <button title="Download" aria-label="Download" className='btn' onClick={openDownloadModal}>Download</button>
            </div>
          </div>
        </section>
        <section className="service-3">
          <BlurAnimation position="bottom right" />
          <div className="container">
            <div className="wrpr">
              <div className="lg:basis-[100%]">
                <h2 data-aos="fade-up" >{pageData.servicesListHeading && pageData.servicesListHeading}​</h2>
              </div>
              <div className="content-wrpr">
                {_moreServicesData && _moreServicesData.map((service, key) => {
                  return (<div data-aos="fade-up" key={key} className="link-content rounded-2xl sm:p-10 p-10 bg-gradient-2 bg-opacity-50 backdrop-filter backdrop-blur-lg  transform hover:scale-105 duration-500 ease-in-out">
                    <div className="content" dangerouslySetInnerHTML={{ __html: service.content }} />
                  </div>)
                })}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="service-list-heading">
            <div className="container">
              <div className="lg:basis-[100%]">
                <h2 data-aos="fade-up" >{pageData.servicesListHeading2 && pageData.servicesListHeading2}</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="about-bottom">
          <div className="container">
            <div className="wrpr">
              <div className="col-left">
                <h3 data-aos="fade-up" >{pageData.about2Heading && pageData.about2Heading}</h3>
              </div>
              <div className="col-right">
                <p data-aos="fade-up" data-delay="500">{pageData.about2Description && pageData.about2Description}​</p>
              </div>
            </div>
          </div>
          <BlurAnimation position="bottom left" />
        </section>
        <section className="who-we-are">
          <div className="container">
            <div className="wrpr">
              <div className="lg:basis-[100%]">
                <h4>{pageData.whoWeAreHeading && pageData.whoWeAreHeading}​</h4>
              </div>
              <div className="wrpr-2">
                {_whoWeAreDatas && _whoWeAreDatas.map((item, key) => {
                  return (<div key={key} className="content equal-round bg-gradient-2">
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>)
                })}
              </div>
            </div>
          </div>
        </section>
        {/* <section className="sm:pt-32 py-6 relative overflow-x-hidden"> */}
        {/* <div className="z-10 relative"> */}
        {/* <div className=" flex-row gap-10"> */}
        {/* <div className='container relative z-10'> */}
        {/* <div className="lg:basis-[100%]"> */}
        {/* <h4 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight ">{pageData.ourWorksHeading && pageData.ourWorksHeading}​</h4> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className="sm:mt-12 relative" data-aos="fade-up"> */}
        {/*  */}
        {/* <ThreeDSlider data={worksData} /> */}
        {/*  */}
        {/*  */}
        {/* <!~~ {_works && <WorkSlider data={_works} />} ~~> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </section> */}
        <section className="testimonials">
          <div className="container">
            <div>
              <div className="lg:basis-[100%]">
                <h4 data-aos="fade-up">{pageData.testimonialHeading && pageData.testimonialHeading}​</h4>
              </div>
              <div className="inner" data-aos="fade-up">
                {_testimonial && <TestimonialSlider data={_testimonial} />}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {

  try {

    //HOME PAGE DATA
    const homeData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
  pages(where: {title: "home"}) {
    nodes {
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
      homePage {
        aboutHeadingTop
        about2Description
        about2Heading
        aboutCta1
        aboutCta2
        aboutDescription
        aboutDescription2
        aboutHeading
        heroTitle
        services2Description
        heroCtaLabel
        downloadHeading
        downloadHeadingCta
        heroDescription
        heroAnimatedHeading
        heroCtaLabel
        ourWorksHeading
        seoVisibilityReportHeading1
        seoVisibilityReportHeading2
        seoVisibilityReportHeadingCtaLabel
        seoVisibilityReportHeadingDescription
        seoVisibilityReportImage {
          node {
            altText
            sourceUrl
          }
        }
        seoVisibilityReportVideo
        services1Description
        services2Heading
        servicesListHeading
        servicesListHeading2
        testimonialHeading
        whoWeAreHeading
        services1Heading
        serviceImage {
          node {
            altText
            sourceUrl
          }
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
    const homePageData = await homeData.json();



    //MORE SERVICES DATA
    const moreServiceData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
        moreServices{
         nodes{
           title
           content
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
    const moreServicesDatas = await moreServiceData.json();


    //WHO WE ARE DATA
    const whoWeAreData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
        allWhoWeAre{
         nodes{
           title
           content
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
    const whoWeAreDatas = await whoWeAreData.json();


    //WORKS DATA
    const workData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts {
        works {
          nodes {
            title
            content
            featuredImage{
              node{
                sourceUrl
                altText
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
    const worksData = await workData.json();


    //TESTIMONIAL DATA
    const testimonialsData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Posts {
      testimonials{
       nodes{
         title
         content
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
    const testimonialData = await testimonialsData.json();

    return {
      props: {
        homePageData,
        moreServicesDatas,
        whoWeAreDatas,
        worksData,
        testimonialData
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

  }
}


