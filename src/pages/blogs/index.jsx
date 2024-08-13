// pages/blogs.js
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient'; // Adjust the path as needed
import Layout from '@/components/Layout';
import Metatags from '@/components/Seo';
import Link from 'next/link';
import BlurAnimation from '@/components/BlurAnimation';
import { AOSInit } from '@/components/Aos';
import Images from '@/components/Images';
import PageHeading from '@/components/PageHeading';

export default function Blogs({ blogPageDatas, getAllBlogsData }) {
  const pageData = blogPageDatas.pages.nodes[0];
  const allBlogs = getAllBlogsData.allBlogs.nodes;


  console.log(blogPageDatas)
  return (
    <>
      {/* <Metatags data={blogPageDatas} /> */}
      <Layout>
        <AOSInit />
        <PageHeading
          heading={pageData.title && pageData.title}
          subHeading={pageData.pages.subHeading && pageData.pages.subHeading}
        />
        <section className="sm:py-20 py-6 relative overflow-hidden">
          <div className="container z-10 relative">
            <div className="grid flex-row gap-10">
              <div className="grid lg:grid-cols-2 sm:grid-cols-2 lg:gap-24 gap-10 place-items-center">
                {allBlogs && allBlogs.map((blog, key) => (
                  <Link
                    title={`Read blog: ${blog.title}`}
                    href={`/blogs/${blog.slug}/`}
                    key={key}
                    className="grid block gap-5"
                  >
                    {blog.featuredImage && (
                      <Images
                        imageurl={blog.featuredImage.node.sourceUrl}
                        styles={''}
                        quality={100}
                        width={'500'}
                        height={'500'}
                        alt={blog.featuredImage.node.altText}
                        placeholder={true}
                        classes={'rounded-3xl w-full block transform hover:scale-105 duration-500 ease-in-out filter grayscale opacity-50 hover:opacity-80 hover:grayscale-0'}
                      />
                    )}
                    <h2 className="md:text-[1.6rem] text-[1rem] aos-init aos-animate">
                      {blog.title}
                    </h2>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <BlurAnimation position="top right" />
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    // Fetch BLOG PAGE DATA
    const { data: blogPageDatas } = await client.query({
      query: gql`
        query Posts {
          pages(where: { id: 839 }) {
            nodes {
              title
              pages {
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
      fetchPolicy: 'no-cache',
    });

    // Fetch ALL BLOG DATA
    const { data: getAllBlogsData } = await client.query({
      query: gql`
        query Posts {
          allBlogs(first: 100 where: { orderby: { order: DESC, field: DATE } }) {
            nodes {
              title
              content
              slug
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      `,
      fetchPolicy: 'no-cache',
    });

    return {
      props: {
        blogPageDatas,
        getAllBlogsData,
      },
      revalidate: 10, // Page will be revalidated at most every 10 seconds
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        blogPageDatas: { pages: { nodes: [] } },
        getAllBlogsData: { allBlogs: { nodes: [] } },
      },
    };
  }
}
