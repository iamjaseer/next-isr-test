import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import Images from '@/components/Images';
import AnimatedImage from "@/components/AnimatedImage";
import Timeline from "@/components/TimeLine";
import PageHeading from "@/components/PageHeading";



export default function WhoWeAre({ aboutPageData, coreValuesData, deliveryMethodData, teamsData, timelineData }) {


  const pageData = aboutPageData.data.pages.nodes[0]
  const _coreValues = coreValuesData.data.allCoreValues.nodes
  const _deliveryMethod = deliveryMethodData.data.allDeliveryMethod.nodes
  const _teamsData = teamsData.data.teams.nodes
  const _timelineData = timelineData.data.allTimeLine.nodes



  // console.log(_timelineData)


  return (
    <>
      <Metatags data={aboutPageData} />
      <Layout>
        <AOSInit />
        <PageHeading heading={pageData.title && pageData.title} subHeading={pageData.pages.subHeading && pageData.pages.subHeading}/>
      <section className="lg:pt-20 pt-10 overflow-hidden">
          <div className="container z-10 relative">
            <div className="lg:flex grid flex-row lg:gap-20 gap-7">
              <div className="lg:basis-[50%]">
                <div data-aos="fade-up" className="md:text-[1.125rem] text-[1rem] grid gap-5" dangerouslySetInnerHTML={{ __html: pageData.aboutUs.aboutDescription1 && pageData.aboutUs.aboutDescription1 }} />
              </div>
              <div className="lg:basis-[50%]">
                <div data-aos="fade-up" className="md:text-[1.125rem] text-[1rem] grid gap-5" dangerouslySetInnerHTML={{ __html: pageData.aboutUs.aboutDescription2 && pageData.aboutUs.aboutDescription2 }} />
              </div>
            </div>
          </div>
        </section>


        <section className="sm:pb-20  relative z-10">
          <div className="container z-10 relative sm:pt-20 pt-6">
            <div className="grid flex-row sm:gap-20 gap-10">
              <div className="lg:basis-[100%] grid gap-7">
                <h2 className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight" data-aos="fade-up">{pageData.aboutUs.journeyHeading && pageData.aboutUs.journeyHeading}​</h2>
              </div>
              <Timeline data={_timelineData} />
            </div>
          </div>
          <BlurAnimation position="bottom left" />
        </section>



        <section className="sm:pb-20 lg:pb-6 pt-10">

          <div className="container z-10 relative sm:pt-20">
            <div className="lg:flex grid flex-row lg:gap-10">
              <div className="lg:basis-[50%]">
                <h2 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight mb-10">{pageData.aboutUs.approchHeading && pageData.aboutUs.approchHeading}​</h2>
              </div>
              <div className="lg:basis-[50%]">
                <div data-aos="fade-up" className="md:text-[1.125rem] text-[1rem] grid gap-5" dangerouslySetInnerHTML={{ __html: pageData.aboutUs.approachContent && pageData.aboutUs.approachContent }} />   </div>
            </div>
          </div>
          {pageData.aboutUs.approchBanner.node.sourceUrl && pageData.aboutUs.approchBanner.node.sourceUrl &&
            <Images
              imageurl={pageData.aboutUs.approchBanner.node.sourceUrl && pageData.aboutUs.approchBanner.node.sourceUrl}
              styles={''}
              quality={80}
              width={'250'}
              height={'250'}
              alt={pageData.aboutUs.approchBanner.node.altText && pageData.aboutUs.approchBanner.node.altText}
              placeholder={false}
              classes={'filter grayscale opacity-20 mt-10 w-full xl:hidden block'}
            />
          }
          {pageData.aboutUs.approchBanner.node.sourceUrl && <div className="relative w-2/4 mx-auto"><div className="absolute top-0 left-0 mx-auto "><AnimatedImage transalateY={'-500px'} src={pageData.aboutUs.approchBanner.node.sourceUrl} width="400" height="400" alt={pageData.aboutUs.approchBanner.node.altText} classes='filter grayscale opacity-20 block sm:w-auto w-full xl:block hidden' /></div></div>}
          <BlurAnimation position="bottom left" />
        </section>

        <section className="sm:py-20 py-6 overflow-hidden">
          <div className="container z-10 relative sm:pt-20 pt-6">
            <div className="lg:flex grid flex-row sm:gap-10">
              <div className="lg:basis-[50%]">
                <h2 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight mb-10">{pageData.aboutUs.aboutBottomHeading && pageData.aboutUs.aboutBottomHeading}​</h2>
              </div>
              <div className="lg:basis-[50%]">
                <div data-aos="fade-up" className="md:text-[1.125rem] text-[1rem] grid gap-5" dangerouslySetInnerHTML={{ __html: pageData.aboutUs.aboutBottomDescription && pageData.aboutUs.aboutBottomDescription }} />
              </div>
            </div>
          </div>
        </section>
        <section className="sm:py-20 py-6 relative">
          <div className="container z-10 relative">
            <div className="grid flex-row gap-20">
              <div className="lg:basis-[100%] grid gap-7">
                <h2 className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight" data-aos="fade-up">{pageData.aboutUs.coreValuesHeading && pageData.aboutUs.coreValuesHeading}</h2>
                <p className="md:text-[1.125rem] text-[1rem]" data-aos="fade-up">{pageData.aboutUs.coreValuesDescription && pageData.aboutUs.coreValuesDescription}</p>
              </div>
              <div className="w-4/5 mx-auto">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 place-items-center">
                  {_coreValues && _coreValues.map((item, key) => {
                    return (
                      <div key={key} data-aos="fade-up" className="rounded-full p-10 flex items-center text-center equal-round hover:animate-pulse bg-gradient-2 bg-opacity-50 backdrop-filter backdrop-blur-lg hover:bg-sky-800 transform hover:scale-105 duration-500 ease-in-out">
                        <p className="text-base leading-6">
                          {item.title}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <BlurAnimation position="bottom right" />
        </section>
        <section className="sm:py-20 py-6 overflow-hidden">
          <div className="container z-10 relative sm:pt-20 pt-6">
            <div className="lg:flex grid flex-row lg:gap-10">
              <div className="lg:basis-[50%]">
                <h2 data-aos="fade-up" className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight mb-10">{pageData.aboutUs.deliveryMethodHeading && pageData.aboutUs.deliveryMethodHeading}​</h2>
              </div>
              <div className="lg:basis-[50%]">
                <div data-aos="fade-up" className="md:text-[1.125rem] text-[1rem] grid gap-5" dangerouslySetInnerHTML={{ __html: pageData.aboutUs.deliveryMethodDescription && pageData.aboutUs.deliveryMethodDescription }} />
              </div>
            </div>
          </div>
        </section>
        <section className="sm:pb-20 pb-6 relative">
          <div className="container z-10 relative">
            <div className="grid flex-row gap-20">
              <div className="">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 place-items-center">
                  {_deliveryMethod && _deliveryMethod.map((item, key) => {
                    return (
                      <div key={key} data-aos="fade-up" className="grid gap-3">
                        <span className="md:text-[1.4rem] text-[1.2rem] w-36 h-36 rounded-full p-10 flex items-center justify-center align-middle text-center hover:animate-pulse bg-gradient-2 bg-opacity-50 backdrop-filter backdrop-blur-lg hover:bg-sky-800 transform hover:scale-105 duration-500 ease-in-out">{key + 1}</span>
                        <div className="relative -top-14 grid gap-2 pl-12">
                          <h3 className="md:text-[1.4rem] text-[1.2rem] tracking-widest uppercase">
                            {item.title}
                          </h3>
                          <div className="sm:text-[1.2rem]" dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <BlurAnimation position="bottom left" />
        </section>
        <section className="sm:pb-20 pb-10 relative">
          <div className="container z-10 relative sm:pt-20 pt-6">
            <div className="grid flex-row sm:gap-20 gap-10">
              <div className="lg:basis-[100%] grid gap-7">
                <h2 className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight" data-aos="fade-up">{pageData.aboutUs.teamHeading && pageData.aboutUs.teamHeading}​</h2>
              </div>
              <div className="lg:w-4/5 mx-auto">
                <div className="grid gap-10  place-items-center items-center">

                  {_teamsData && _teamsData.map((team, key) => {
                    return (
                      <div key={key} className="pt-20" data-aos="fade-up">
                        <AnimatedImage transalateY={'-100px'} src={team.featuredImage.node.sourceUrl} width="500" height="500" alt={team.featuredImage.node.altText} classes='max-w-96 max-h-96 w-96 h-96 object-cover rounded-full object-top aboslute -left-80 top-72 filter grayscale opacity-20 sm:block hidden' />
                        <div className="sm:pl-20 relative sm:-top-28 grid sm:gap-6 gap-3 max-h">
                          <div className="grid gap-5">
                            <Images
                              imageurl={team.featuredImage.node.sourceUrl}
                              styles={''}
                              quality={80}
                              width={'250'}
                              height={'250'}
                              alt={team.featuredImage.node.altText}
                              placeholder={false}
                              classes={'max-w-60 max-h-60 w-60 h-60 object-cover rounded-full object-top filter grayscale opacity-20 sm:hidden block w-full'}
                            />
                            <div>
                              <h3 className="text-[1.7rem] sm:text-[2.2rem] leading-5">{team.title}</h3>
                              <p className="text-[1.2rem] mt-3">{team.teamAcf.position}</p>
                            </div>
                          </div>
                          <div className="grid sm:gap-6 gap-3">
                            <div className="sm:text-[1.2rem]" dangerouslySetInnerHTML={{ __html: team.content }} />
                            <ul className="sm:text-[1.2rem] gap-4 flex flex-wrap">
                              {team.teamAcf.intrested.split('/').map((item, key) => {
                                return (
                                  <li key={key} className="rounded-full bg-sky-950 bg-opacity-80 px-4 py-2">{item}</li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <BlurAnimation position="bottom left" />
        </section>

      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {

  try {

    //ABOUT PAGE DATA
    const aboutData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
          pages(where: {id:798}) {
      nodes{
        title
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
        pages{
          subHeading
        }
     aboutUs{
    aboutDescription1
      aboutDescription2
      journeyHeading
      timeline
      approchHeading
      approachContent
      approchBanner{
        node{
          sourceUrl
          altText
        }
      }
      aboutBottomHeading
      aboutBottomDescription
      coreValuesHeading
      coreValuesDescription
      deliveryMethodHeading
      deliveryMethodDescription
      teamHeading
      
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
    const aboutPageData = await aboutData.json();



    //CORE VALUES DATA
    const coreValues = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
          allCoreValues{
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
    const coreValuesData = await coreValues.json();


    //DELIVERY METHOD DATA
    const deliveryMethod = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
              allDeliveryMethod{
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
    const deliveryMethodData = await deliveryMethod.json();


    //TEAMS DATA
    const teams = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
              teams(where: {orderby: {order: DESC, field: NAME_IN}}) {
                nodes {
                  title
                  content
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                    }
                  }
                 teamAcf{
                  position
                  intrested
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
    const teamsData = await teams.json();


    //TIMELINE DATA
    const timline = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
              allTimeLine(where: {orderby: {order: DESC, field: NAME_IN}}) {
                nodes {
                  title
                  content
                  featuredImage {
                    node {
                      sourceUrl
                      altText
                    }
                  }
               timeLineAcf{
                website
                year
                soon
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
    const timelineData = await timline.json();


    return {
      props: {
        aboutPageData,
        coreValuesData,
        deliveryMethodData,
        teamsData,
        timelineData
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

  }
}


