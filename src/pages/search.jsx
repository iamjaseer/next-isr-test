import Layout from "@/components/Layout";
import { AOSInit } from '@/components/Aos';
import BlurAnimation from '@/components/BlurAnimation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { gql, useLazyQuery } from '@apollo/client';
import client from '@/lib/apolloClient';
import Loading from "@/components/Loading";
import Link from "next/link";
import { frontendUrl } from "@/utils/variables";

// GraphQL query for search
const SEARCH_PAGES = gql`
  query SearchPages($searchTerm: String!) {
    pages(first: 100, where: { search: $searchTerm }) {
      nodes {
        title
        slug
      }
    }
    allBlogs(first: 100, where: { search: $searchTerm }) {
      nodes {
        title
        slug
      }
    }
  }
`;

export default function Search() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchPages, { loading, data }] = useLazyQuery(SEARCH_PAGES, {
    client,
    variables: { searchTerm }
  });

  useEffect(() => {
    const { query } = router.query;
    if (query) {
      const decodedQuery = decodeURIComponent(query.replace(/\+/g, ' '));
      setSearchTerm(decodedQuery);
      searchPages({ variables: { searchTerm: decodedQuery } });
    }
  }, [router.query]);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      router.push({
        pathname: '/search',
        query: { query: encodeURIComponent(searchTerm) }
      });
    } else {
      router.push('/search');
    }
  };

  return (
    <Layout>
      <AOSInit />
      <section className="sm:py-20 py-6 relative overflow-hidden">
        <div className="container z-10 relative">
          <div className="grid flex-row gap-10">
            <div className="lg:w-[70%] w-full items-center mx-auto grid sm:gap-10 gap-[24px]">
              <h1 className="lg:text-[3.5rem] md:text-[3rem] sm:text-[2rem] text-[16px] leading-tight md:mb-5">Search results for: <span className="text-sky-500">&quot;{searchTerm}&quot;</span></h1>
              <div className="sm:flex grid sm:gap-0 gap-[10px]">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search here..."
                  className="border-0 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white"
                />
                <button
                  onClick={handleSearch}
                  className="hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:border-sky-600 bg-sky-500 py-5 px-[30px] sm:w-[200px] w-full transition-all"
                >Search</button>
              </div>

              {loading && <Loading />}

              {/* Conditional rendering based on data availability */}
              {(data && data.pages && data.pages.nodes.length > 0) || (data && data.allBlogs && data.allBlogs.nodes.length > 0) ? (
                <div>
                  {data.pages.nodes.length > 0 && (
                    <ul className="">
                      {data.pages.nodes.map((page, index) => (
                        <li key={index} className="py-[20px] border-b bottom-1 border-sky-400 border-opacity-10">
                          <Link href={frontendUrl + page.slug} className="text-[16px] sm:text-[20px] cursor-pointer hover:text-sky-500 transition-all">{page.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {data.allBlogs.nodes.length > 0 && (
                    <ul className="">
                      {data.allBlogs.nodes.map((blog, index) => (
                        <li key={index} className="py-[20px] border-b bottom-1 border-sky-400 border-opacity-10">
                          <Link href={`${frontendUrl}blogs/${blog.slug}`} className="text-[16px] sm:text-[20px] cursor-pointer hover:text-sky-500 transition-all">{blog.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <p className="text-[16px] text-gray-400 mt-4 text-center">No results found.</p>
              )}

            </div>
          </div>
        </div>
        <BlurAnimation position="top right" />
      </section>
    </Layout>
  );
}
