import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import QuickContact from '@/components/QuickContact';
import Images from '@/components/Images';
import TestimonialSlider from '@/components/TestimonialSlider';
import ThreeDSlider from '@/components/WorkSlider';
import ShapeAnimation from "@/components/ShapeAnimation";
import AnimatedTextCharacter from "@/components/AnimatedText";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { wordpressGraphQlApiUrl } from "@/utils/variables";
import { useModalContext } from "@/context/modalContext";



export default function HomePage({data}){


   // console.log(data[1])
    

  const pageData = data[0].data.pages.nodes[0].homePage

  const _moreServicesData = data[1].data.moreServices.nodes
  const _whoWeAreDatas = data[2].data.allWhoWeAre.nodes
  const _works = data[3].data.works.nodes
  const _testimonial = data[4].data.testimonials.nodes


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


    return(
        <>
         <AOSInit />
        <section style={{ marginTop: '-100px' }} className="hero sm:h-screen h-[100vh] flex items-end sm:py-24 py-6 overflow-hidden relative">
          <BlurAnimation position="bottom left" />
          <div className="container z-10 relative">
            <div className="lg:w-10/12 grid gap-5">
              <ShapeAnimation />
              <h1 className="lg:text-[3.5rem] md:text-[4rem] sm:text-[3rem] text-[2rem] leading-tight" data-aos="fade-up">{pageData.heroTitle && pageData.heroTitle}<span className="block">
                <AnimatedTextCharacter text={pageData.heroAnimatedHeading && pageData.heroAnimatedHeading} />
              </span>
              </h1>
              <p className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up" data-delay="500">{pageData.heroDescription && pageData.heroDescription}</p>
              <div className='mt-3'>
                <button title="Let&apos;s start" aria-label="Let&apos;s start" type="button" className="btn inline-block" onClick={openHeroModal}>
                  Let&apos;s start
                </button>
              </div>
            </div>
          </div>
          <BackgroundAnimation />
        </section>
        <section className="sm:py-32 py-6">
          <div className="container">
            <div className="lg:flex grid flex-row gap-4">
              <div className="lg:basis-[50%]">
                <h2 className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up">{pageData.aboutHeading && pageData.aboutHeading}</h2>
              </div>
              <div className="lg:basis-[50%]">
                <p className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up">{pageData.aboutDescription && pageData.aboutDescription}</p>
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

        <section className="sm:py-32 py-6 relative">
          <div className="container">
            <div className="lg:basis-[100%]">
              <p className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up">{pageData.aboutDescription2 && pageData.aboutDescription2}</p>
            </div>
          </div>
        </section>


        <section className="container-boxed">
          <div className="mx-auto">
            <div className="z-10 relative">
              <div data-aos="fade-up" className="lg:basis-[100%] bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl grid gap-5 content-center overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <video className="w-full h-full grayscale opacity-65 video-offer">
                      <source src="https://admin.upturnist.com/wp-content/uploads/2024/05/seo_video_v_new_compressed.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="text-center lg:text-start lg:p-20 sm:p-16 p-10">
                    <h3 className='lg:text-[1.2rem] text-[1rem]' dangerouslySetInnerHTML={{ __html: pageData.seoVisibilityReportHeading1 && pageData.seoVisibilityReportHeading1 }} />
                    <h4 className="lg:text-[2.5rem] sm:text-[2rem] text-[2rem] leading-tight mb-4 mt-4">{pageData.seoVisibilityReportHeading2 && pageData.seoVisibilityReportHeading2}</h4>
                    <p className="lg:text-[1.6rem] text-[1rem] mb-7">{pageData.seoVisibilityReportHeadingDescription && pageData.seoVisibilityReportHeadingDescription}</p>
                    <button title="Text us" aria-label="Text us" className='btn sm:w-auto w-full mx-auto' onClick={openOfferModal} >Text us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlurAnimation position="top left" />
        </section>





        <section className="sm:py-32 py-6 relative">
          <div className="container-boxed">
            <div className="lg:flex grid flex-row items-center gap-4">
              <div>
                <h2 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight mb-10" >{pageData.services1Heading && pageData.services1Heading}​</h2>
                <div data-aos="fade-up" data-delay="500" className="grid gap-5 link-content" dangerouslySetInnerHTML={{ __html: pageData.services1Description && pageData.services1Description }} />
              </div>
              <div className="relative items-center hidden xl:block" data-aos="fade-up">
                <div className="photo-box-wrpr relative mx-auto">
                  <Images
                    imageurl={'https://admin.upturnist.com/wp-content/uploads/2024/06/line-2.svg'}
                    styles={''}
                    quality={100}
                    width={'500'}
                    height={'500'}
                    alt={'Photo graphic 1'}
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
                    alt={'Photo graphic 21'}
                    placeholder={false}
                    classes={'frame-1 block top-0'}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="sm:py-32 py-6 relative">
          <div className="container z-10 relative">



            <div className="lg:flex">
              <div className="lg:basis-[50%]">
                <div className="sticky top-8 lg:mb-0 mb-10">
                  <h2 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight">{pageData.services2Heading && pageData.services2Heading}​</h2>
                </div>
              </div>
              <div className="lg:basis-[50%]">
                <div className='have-link list-para' dangerouslySetInnerHTML={{ __html: pageData.services2Description }} />
              </div>
            </div>
          </div>
        </section>



        <section className="relative">
          <div className="container z-10 relative">
            <div data-aos="fade-up" className="text-center lg:text-start lg:basis-[100%] bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl sm:p-16 p-8 lg:flex grid lg:gap-5 gap-10 align-middle justify-between items-center">
              <h3 className="md:text-[1.6rem] text-[1rem]">{pageData.downloadHeading && pageData.downloadHeading}</h3>
              <button title="Download" aria-label="Download" className='btn sm:w-auto w-full' onClick={openDownloadModal}>Download</button>
            </div>
          </div>
        </section>




        <section className="sm:py-32 py-6 relative">
          <BlurAnimation position="bottom right" />
          <div className="container z-10 relative">
            <div className="grid flex-row sm:gap-20 gap-8">
              <div className="lg:basis-[100%]">
                <h2 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight">{pageData.servicesListHeading && pageData.servicesListHeading}​</h2>
              </div>
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
                {_moreServicesData && _moreServicesData.map((service, key) => {
                  return (<div data-aos="fade-up" key={key} className="link-content rounded-2xl sm:p-10 p-10 bg-gradient-2 bg-opacity-50 backdrop-filter backdrop-blur-lg  transform hover:scale-105 duration-500 ease-in-out">
                    <div className="md:text-[1.2rem] text-[1rem]" dangerouslySetInnerHTML={{ __html: service.content }} />
                  </div>)
                })}
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="lg:basis-[100%]">
              <h3 data-aos="fade-up" className="text-4xl leading-normal">{pageData.servicesListHeading2 && pageData.servicesListHeading2}</h3>
            </div>
          </div>
        </section>



        <section className="sm:py-32 py-6 relative">
          <div className="container z-10 relative">
            <div className="lg:flex grid flex-row gap-4 border-t border-sky-700 sm:py-32 py-6">
              <div className="lg:basis-[60%] grid gap-7 sticky">
                <h2 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight">{pageData.about2Heading && pageData.about2Heading}</h2>
              </div>
              <div className="lg:basis-[40%] grid gap-7">
                <p data-aos="fade-up" data-delay="500" className="md:text-[1.6rem] text-[1rem]">{pageData.about2Description && pageData.about2Description}​</p>
              </div>
            </div>
          </div>
          <BlurAnimation position="bottom left" />
        </section>


        <section className="sm:pb-20 pb-6 relative z-50">
          <div className="container z-10 relative">
            <div className="grid flex-row gap-10">
              <div className="lg:basis-[100%]">
                <h2 className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight">{pageData.whoWeAreHeading && pageData.whoWeAreHeading}​</h2>
              </div>
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 place-items-center">
                {_whoWeAreDatas && _whoWeAreDatas.map((item, key) => {
                  return (<div key={key} className="rounded-full p-10 flex items-center text-center equal-round hover:animate-pulse bg-gradient-2 bg-opacity-50 backdrop-filter backdrop-blur-lg hover:bg-sky-800 transform hover:scale-105 duration-500 ease-in-out">
                    <div className="text-lg leading-8" dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>)
                })}
              </div>
            </div>
          </div>
        </section>


        <section className="sm:pt-32 py-6 relative overflow-x-hidden">
          <div className="z-10 relative">
            <div className=" flex-row gap-10">
              <div className='container relative z-10'>
                <div className="lg:basis-[100%]">
                  <h2 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight ">{pageData.ourWorksHeading && pageData.ourWorksHeading}​</h2>
                </div>
              </div>
              <div className="sm:mt-12 relative" data-aos="fade-up">

                <ThreeDSlider data={data[3]} />


                {/* {_works && <WorkSlider data={_works} />} */}
              </div>
            </div>
          </div>
        </section>


        <section className="lg:py-10 py-6 relative">
          <div className="container z-10 relative sm:mb-16">
            <div>
              <div className="lg:basis-[100%]">
                <h2 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight">{pageData.testimonialHeading && pageData.testimonialHeading}​</h2>
              </div>
              <div className="border-t border-sky-700 sm:mt-12 sm:pt-12 mt-5 pt-5" data-aos="fade-up">
                {_testimonial && <TestimonialSlider data={_testimonial} />}
              </div>
            </div>
          </div>
        </section>

        </>
    )
}
