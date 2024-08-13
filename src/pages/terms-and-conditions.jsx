import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import Metatags from "@/components/Seo";






export default function TermsAndConditions({ privacyPolicyData_ }) {


    const page = privacyPolicyData_.data.pages.nodes[0]



    return (
        <>
            <Metatags data={privacyPolicyData_} />
            <Layout>
                <AOSInit />
                <section className="sm:py-20 py-6 relative overflow-hidden">
                    <div className="container z-10 relative">
                        <div className="grid flex-row gap-10 ">
                            <div className="lg:w-[60%] items-center mx-auto grid gap-10">
                                <h1 className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight md:mb-5">{page.title && page.title}​</h1>
                                <div className="grid gap-3 common-page" dangerouslySetInnerHTML={{ __html: page.content && page.content }} />
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


        const privacyPolicyData = await fetch(
            wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: ` query Posts {
        pages(where: {id:4187}) {
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
        const privacyPolicyData_ = await privacyPolicyData.json();



        return {
            props: {
                privacyPolicyData_
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);

    }
}


