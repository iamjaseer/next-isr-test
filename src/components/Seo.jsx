import Head from "next/head";
import { HeaderData } from '@/hooks/headerData';
import { frontendUrl } from "@/utils/variables";
import { useRouter } from 'next/router';

export default function Metatags({ initialData, data }) {

    const seoData = data
    const seo = seoData.data.pages.nodes[0].seo


    const { dataHeader } = HeaderData(initialData);

    //console.log(dataHeader && dataHeader.data.mediaItems.nodes[0].sourceUrl)


    const router = useRouter();

    const currentPath = router.asPath;

    return (
        <>
            <Head>
                <>

                    <title>{seo.title}</title>


                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />



                    <meta name="description" content={seo.metaDesc && seo.metaDesc} />
                    <meta name="keywords" content={seo.focuskw && seo.focuskw} />
                    <link rel="canonical" href={(frontendUrl + currentPath + '/').replace(/([^:]\/)\/+/g, "$1")} />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={seo.title && seo.title} />
                    <meta property="og:description" content={seo.opengraphDescription && seo.opengraphDescription} />
                    <meta property="og:url" content={(frontendUrl + currentPath + '/').replace(/([^:]\/)\/+/g, "$1")} />
                    <meta property="og:site_name" content={seo.opengraphSiteName && seo.opengraphSiteName} />
                    <meta property="article:modified_time" content={seo.opengraphModifiedTime && seo.opengraphModifiedTime} />
                    <meta property="og:image" content={seo.opengraphImage && seo.opengraphImage.sourceUrl} />
                    <meta property="og:image:width" content="479" />
                    <meta property="og:image:height" content="482" />
                    <meta property="og:image:type" content="image/webp" />
                    <meta name="twitter:card" content="summary_large_image" />
                </>
            </Head>
        </>
    )
}