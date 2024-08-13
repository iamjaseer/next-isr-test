import { wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import Metatags from '@/components/Seo';
import { AOSInit } from '@/components/Aos';
import ThreeDSlider from "@/components/WorkSlider";
import PageHeading from "@/components/PageHeading";


export default function Works({ worksPageData, worksDatas }) {







  const pageData = worksPageData.data.pages.nodes[0]


  //console.log(pageData)


  return (
    <>
      <Metatags data={worksPageData} />
      <Layout>
        <AOSInit />
        <PageHeading heading={pageData.title && pageData.title} subHeading={pageData.pages.subHeading && pageData.pages.subHeading} />
        <section className="sm:py-32 py-6 relative overflow-x-hidden">
          <div className="z-10 relative">
            <div className=" flex-row gap-10">
              <div className="sm:mt-12 relative" data-aos="fade-up">

                <ThreeDSlider popup="true" data={worksDatas} />

                {/* {_works && <WorkSlider data={_works} />} */}
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

    //WORKS PAGE DATA
    const worksData = await fetch(
      wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ` query Posts {
            pages(where: {id:978}) {
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
    const worksPageData = await worksData.json();




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
    const worksDatas = await workData.json();

    return {
      props: {
        worksPageData,
        worksDatas
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

  }
}


