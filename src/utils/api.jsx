import { wordpressGraphQlApiUrl } from "./variables"




const ContactApi = async () => {


    const { data } = await fetch(wordpressGraphQlApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query:
          `query Posts {
            allContact{
       nodes{
          contactAcf {
           address
           email
           facebook
           fieldGroupName
           instagram
           linkedin
           phone
           twitter
           whatsapp
         }
       }
     }
       }
        `
      }),
      next: { revalidate: 10 }
    }).then(res => res.json())
  
    const contactData = data
  
    return contactData
  
  
  }
  
  
  const contactData_ = await ContactApi()
  export const contactData_fianl = contactData_




