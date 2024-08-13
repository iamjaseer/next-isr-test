import { frontendUrl, wordpressGraphQlApiUrl } from "@/utils/variables";
import Layout from "@/components/Layout";
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import Images from '@/components/Images';
import Link from "next/link";
import MetatagsBlogSingle from "@/components/SeoBlogSingle";
import { useRouter } from "next/router";
import { useEffect } from "react";





export default function BlogSingle({ singleBLogsData, blogSinglePageData, getAllBlogsData }) {

  const router = useRouter()


    const singleBlog = singleBLogsData?.data?.allBlogs?.nodes[0] ?? null
    const allBlogs = getAllBlogsData?.data?.allBlogs?.nodes ?? null



    useEffect(() => {
      if (singleBLogsData?.data?.allBlogs?.nodes.length == 0) {
        router.push('/404');
      }
    }, [router]);




    function formatBlogDate(date_) {

        const originalDate = new Date(date_);
       const formattedDate = originalDate.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      });

        return formattedDate




      
    }

    return (
        <>
           {singleBLogsData?.data?.allBlogs?.nodes.length !== 0  && 
            <>
            <MetatagsBlogSingle data={[singleBLogsData]} />
             <Layout>
                <AOSInit />
                <section className="sm:py-20 py-6 relative overflow-hidden">
                    <div className="container z-10 relative">
                        <div className="grid flex-row gap-10 ">
                            <div className="lg:w-3/4 items-center mx-auto grid gap-10">
                                <h1 data-aos="fade-up" className="lg:text-[4rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight md:mb-5">{singleBlog && singleBlog?.title}​</h1>
                                <div data-aos="fade-up">
                                    {singleBlog && <Images
                                        imageurl={singleBlog?.featuredImage?.node?.sourceUrl || 'sample-link'}
                                        styles={''}
                                        quality={100}
                                        width={'1000'}
                                        height={'500'}
                                        alt={singleBlog?.featuredImage?.node?.altText || 'no alt'}
                                        title={singleBlog?.featuredImage?.node?.altText || 'no alt'}
                                        placeholder={true}
                                        classes={'w-full block'}
                                    />
                                    }
                                </div>
                                <div data-aos="fade-up" className="grid gap-3 blog-content" dangerouslySetInnerHTML={{ __html: singleBlog && singleBlog?.content }} />
                                <p className="md:text-[1.6rem] text-[1rem]">{formatBlogDate(singleBlog && singleBlog?.date)}</p>
                                <div className="border-t-sky-900 border-t mt-4 pt-10">
                                    <h3 data-aos="fade-up" className="lg:text-[4rem] md:text-[3rem] sm:text-[2rem] text-[2rem] leading-tight">More blogs</h3>
                                    <div className="sm:py-20 py-6 relative mt-4 sm:mt-0">
                                        <div>
                                            <div className="grid gap-20">
                                                {allBlogs && allBlogs.map((blog, key) => {
                                                    return (<Link title={`Read blog: ${blog.title}`} aria-label={`Read blog: ${blog.title}`} 
                                                    href={`${frontendUrl}/blogs/${blog.slug}/`} data-aos="fade-up" key={key} className="grid gap-5 block">
                                                        {blog.featuredImage && <Images
                                                            imageurl={blog.featuredImage.node.sourceUrl}
                                                            styles={''}
                                                            quality={100}
                                                            width={'500'}
                                                            height={'500'}
                                                            alt={blog.featuredImage.node.altText}
                                                            title={blog.featuredImage.node.altText}
                                                            placeholder={false}
                                                            classes={'rounded-3xl w-full block transform hover:scale-105 duration-500 ease-in-out filter grayscale opacity-50 hover:opacity-80 hover:grayscale-0'}
                                                        />
                                                        }
                                                        <h2 className="md:text-[1.6rem] text-[1rem] aos-init aos-animate">{blog.title}</h2>
                                                    </Link>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlurAnimation position="top right" />
                </section>
            </Layout>
           </>
            }
        </>
    );
}

export async function getServerSideProps(context) {

    const { params } = context;

    const { slug } = params


    // Fetch data from an external API, database, or any other source
    try {

        //BLOG PAGE DATA
        const blogData = await fetch(
            wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: ` query Posts {
            allBlogs(where: {name: "`+ slug + `"}) {
           nodes {
             title
              date
             content
             date
             
             featuredImage {
               node {
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

        const singleBLogsData = await blogData.json();



        //PAGE DATA
        const pageData = await fetch(
            wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: ` query Posts {
          pages(where: {id: 839}) {
            nodes {
              title
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              seo {
              canonical
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

        const blogSinglePageData = await pageData.json();



        //ALL BLOGS DATA
        const blogsData = await fetch(
            wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: ` query Posts {
            allBlogs( first: 100){
              nodes{
                title
                content
                slug
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
        const getAllBlogsData = await blogsData.json();



        // -------------------------------------------------------------

        // Pass fetched data as props to the page component
        return {
            props: {
                singleBLogsData,
                blogSinglePageData,
                getAllBlogsData
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);

    }
}

