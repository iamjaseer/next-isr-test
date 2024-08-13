import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import EnquiryService from "@/components/EnquiryService";



export default function LogoDesign({ servicePageData }) {


    const pageData = servicePageData.data.pages.nodes[0]



    //console.log(pageData)




    return (
        <>
            <Metatags data={servicePageData} />
            <Layout>
                <AOSInit />
                <section style={{ marginTop: '-120px', backgroundImage: `linear-gradient(rgba(0, 26, 42, 0.9), rgba(0, 26, 42, 0.9)), url(${pageData.featuredImage && pageData.featuredImage.node.sourceUrl})` }} className="hero bg-opacity-25 background lg:h-screen h-[80vh] flex items-center sm:py-20 py-6 overflow-hidden relative bg-fixed bg-center bg-cover bg-no-repeat">
                    <div className="container z-10 relative">
                        <div className="grid">
                            <div className="items-center grid gap-7 sm:order-1 order-2">
                                <h1 className="lg:text-[4rem] md:text-[4rem] sm:text-[3rem] text-[2.5rem] leading-tight" data-aos="fade-up">
                                    {pageData.title}
                                </h1>
                                <p className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up" data-delay="500">{pageData.pages.subHeading && pageData.pages.subHeading}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sm:py-20 py-6 relative overflow-hidden">
                    <div className="container z-10 relative">
                        <div className="grid flex-row gap-10 ">
                            <div className="md:w-3/4 items-center mx-auto grid gap-10">
                                <div data-aos="fade-up" className="grid gap-3 blog-content" dangerouslySetInnerHTML={{ __html: pageData.content && pageData.content }} />
                                <EnquiryService/>
                            </div>
                        </div>
                    </div>
                    <BlurAnimation position="top right" />
                </section>


            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {

    try {

        //HOME PAGE DATA
        const brandThemeData = await fetch(
            wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: ` query Posts {
        pages(where: {id:38}) {
          nodes{
            title
            content
             pages{
                subHeading
              }
            featuredImage{
            node{
              altText
              sourceUrl
            }
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
        const servicePageData = await brandThemeData.json();



        return {
            props: {
                servicePageData
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);

    }
}


