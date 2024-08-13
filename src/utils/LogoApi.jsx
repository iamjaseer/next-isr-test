import { wordpressGraphQlApiUrl } from "./variables"



const LogoApi = async () => {


  const { data } = await fetch(wordpressGraphQlApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query:
        `query Posts {
            mediaItems(where: {name: "upturnist-logo"}) {
              nodes {
                altText
                sourceUrl
                title
              }
            }
          }
      `
    }),
    next: { revalidate: 10 }
  }).then(res => res.json())

  const headerPost = data.mediaItems.nodes[0]


  const logoUrl = data.mediaItems.nodes[0].sourceUrl
  const logoAlt = data.mediaItems.nodes[0].altText
  const logoTitle = data.mediaItems.nodes[0].title


  // //console.log(headerPost)
  return [logoUrl, logoAlt, logoTitle]
  ////console.log(headerPost)


  //return headerPost


}


const logoData = await LogoApi()
export const logoUrl = logoData[0]
export const logoAlt = logoData[1]
export const logoTitle = logoData[2]

////console.log(logoData[1]+'----asdadadasd')






