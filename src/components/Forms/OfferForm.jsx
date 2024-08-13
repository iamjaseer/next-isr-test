'use client'


import BlurAnimation from "../BlurAnimation"
import React, { useState, useEffect } from 'react'
import { wordpressGraphQlApiUrl, frontendUrl, siteEmail, siteFromEmail } from "../../utils/variables";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useRouter } from 'next/navigation'
import { useModalContext } from "@/context/modalContext";



export default function OfferForm({ data }) {

    const router = useRouter()

    const { setShowModal } = useModalContext()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [place, setPlace] = useState('');
    const [website, setWebsite] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [sendProgress, setSendProgress] = useState(false)
    const [successLabel, setSuccessLabel] = useState(false)
    const [buttonLabel, setButtonLabel] = useState(true)



    //MAIL API
    async function sendMail() {

        const fromMail = siteFromEmail
        const toMail = siteEmail
        const mutationId = '9785645492879825297825'
        //const bodyMail = `<html><head></head><body><div style='border:solid thin #2fa4d8;padding:30px;color:#001a2a; font-family:arial,helvetica,sans-serif;font-size:16px;color:#001a2a;line-height:150%;text-align:left;word-wrap:break-word'><p>Hello </p><p>Thank for downloading <strong>"A proven 5 step framework to establish your business online"</strong></p><a href="" style="background:#2fa4d8;display:block;text-align:center;padding:12px;margin:16px 0 0 0;color:#fff;text-decoration:none" target="_blank">Click Here to Download Now</a></div></body></html>`
        const bodyMail = `<html><head></head><body><div style='border:solid thin #2fa4d8;padding:30px;color:#001a2a; font-family:arial,helvetica,sans-serif;font-size:16px;color:#001a2a;line-height:150%;text-align:left;word-wrap:break-word'><p>Hello Upturnist, you have a new message from Take Advantange of the free SEO visibility Report<br/><br/><span style='color:#2fa4d8;'><strong>Website: ` + website + `<br/>Name: ` + name + `<br/>Place: ` + place + `<br/>Phone: ` + phone + `<br/>Email: ` + email + `</strong></span></p></div></body></html>`

        const { data } = await fetch(wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query:
                    `
                    mutation SEND_EMAIL {
                        sendEmail(
                          input: {
                            to: "`+ toMail + `", 
                            from: "`+ fromMail + `", 
                            subject: "Free SEO visibility Report |`+ frontendUrl + `", 
                            body: "`+ bodyMail + `", 
                            clientMutationId: "`+ mutationId + `"
                          }
                        ) {
                          origin
                          sent
                          message
                        }
                      }
                      
      `
            }),
            next: { revalidate: 10 }
        }).then(res => res.json())

        // let headerPost = data

    }



    useEffect(() => {
    }, [name, email, phone]);

    // Validate form 
    const validateForm = () => {
        let errors = {};

        if (!name) {
            errors.name = 'Full name is required.';
        }

        if (!website) {
            errors.website = 'Website is required.';
        }


        if (!place) {
            errors.place = 'Place is required.';
        }


        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        if (!phone) {
            errors.phone = 'Phone is required.';
        }


        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };


    //VALIDATE LIVE
    const changeValidate = () => {
        validateForm()
    }





    // Submit 
    const submitEmail = () => {



        validateForm()
        if (isFormValid) {
            sendMail()
            setButtonLabel(false)
            setSendProgress(true)
            setIsFormValid(false)

            setTimeout(() => {
                setSuccessLabel(true)
                setSendProgress(false)
                setButtonLabel(true)
                setName('')
                setEmail('')
                setPhone('')
                setPlace('')
                setWebsite('')
                setSuccessLabel(false)
                setShowModal(false)

            }, 3000);
            // setTimeout(() => {
            //     setName('')
            //     setEmail('')
            //     setPhone('')
            //     setPlace('')
            //     setWebsite('')
            // }, 4000);
            // setTimeout(() => {
            //     setSuccessLabel(false)
            //     setModal(false)
            // }, 10000);
            router.push('/thankyou')
        }

    };

    return (
        <>
          




                <div>
                    <h3 className="text-[2rem]">Our Guarantee; No SPAM and your data is safe with us!
                    </h3>
                    <div>
                        <div className="grid gap-5">
                            {/* <span className="lg:text-[3rem] lg:text-[2.5rem] sm:text-[2rem] text-[2rem] leading-tight"> */}
                            {/* Our Guarantee; No SPAM and your data is safe with us! */}
                            {/* </span> */}
                            <div className="grid sm:gap-4 gap-3 mt-5">
                                <input
                                    className={`${errors.website ? 'border-1 border-red-500 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white' : 'border-0 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white'} `}
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                    //onBlur={changeValidate}
                                    type="text"
                                    placeholder="Website"
                                    name="website"
                                    required
                                />
                                {errors.website && <p className='text-red-500 mb-3'>{errors.website}</p>}
                                <input
                                    className={`${errors.name ? 'border-1 border-red-500 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white' : 'border-0 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white'} `}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    //onBlur={changeValidate}
                                    type="text"
                                    placeholder="Full Name"
                                    name="name"
                                    required
                                />
                                {errors.name && <p className='text-red-500 mb-3'>{errors.name}</p>}
                                <input
                                    className={`${errors.place ? 'border-1 border-red-500 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white' : 'border-0 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white'} `}
                                    value={place}
                                    onChange={(e) => setPlace(e.target.value)}
                                    //onBlur={changeValidate}
                                    type="text"
                                    placeholder="Place"
                                    name="place"
                                    required
                                />
                                {errors.place && <p className='text-red-500 mb-3'>{errors.place}</p>}
                                <input
                                    className={`${errors.email ? 'border-1 border-red-500 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white' : 'border-0 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white'} `}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    // onBlur={changeValidate}
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    required
                                />
                                {errors.email && <p className='text-red-500 mb-3'>{errors.email}</p>}
                                <PhoneInput
                                    className={`${errors.phone ? 'phone-input border-1 border-red-500 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-5 p-5 pl-6 placeholder-white' : 'border-0 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white'} `}
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={setPhone}
                                    defaultCountry="AE"
                                    required
                                />
                                {errors.phone && <p className='text-red-500 mb-3'>{errors.phone}</p>}
                            </div>
                        </div>
                        <div>
                            <button title="Submit" aria-label="Submit" type="button" className="bg-sky-500 border-sky-500 my-5 rounded-3 p-5 w-full hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:border-sky-600 focus:text-white" onClick={submitEmail}>
                                <span className={buttonLabel == false ? "hidden" : ""}>
                                    Submit
                                </span>
                                <span className={`${sendProgress == false ? "hidden" : ""} flex gap-2 justify-center`} style={{ position: 'relative', top: '-3px' }}>
                                    <svg className="animate-spin h-5 w-5  text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style={{ position: 'relative', top: '6px' }}>
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className='ml-3' style={{ position: 'relative', top: '3px' }}>
                                        Submitting...
                                    </span>
                                </span>
                            </button>
                            {/* <div className={`${successLabel == false ? 'hidden' : ''} bg-green-400 fixed bottom-0 left-0 right-0 backdrop-filter backdrop-blur-lg p-4 text-center`}>Thank you for contacting us. We&apos;ll get back to you very soon</div> */}
                        </div>
                    </div>
                </div>
      

        </>
    )
}
