'use client'

import React, { useState, useEffect } from 'react'
import { wordpressGraphQlApiUrl, frontendUrl, siteEmail, siteFromEmail } from "@/utils/variables";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useRouter } from 'next/navigation'
import { useModalContext } from '@/context/modalContext';


export default function QuickContactForm() {

    const router = useRouter()

    const { setShowModal } = useModalContext()

    const [chatbox, setChatbox] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [sendProgress, setSendProgress] = useState(false)
    const [successLabel, setSuccessLabel] = useState(false)
    const [buttonLabel, setButtonLabel] = useState(true)



    //MAIL API
    async function sendMail() {

        const fromMail = siteFromEmail
        const toMail = siteEmail
        const mutationId = '1265'
        const bodyMail = `<html><head></head><body><div style='border:solid thin #2fa4d8;padding:30px;color:#001a2a; font-family:arial,helvetica,sans-serif;font-size:16px;color:#001a2a;line-height:150%;text-align:left;word-wrap:break-word'><p>Hello Upturnist, you have a new message from quick enquiry<br/><br/><span style='color:#2fa4d8;'><strong>Name: ` + name + `<br/>Phone: ` + phone + `<br/>Email: ` + email + `</strong></span></p></div></body></html>`

        const { data } = await fetch(wordpressGraphQlApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query:
                    `mutation SEND_EMAIL {
              sendEmail(
                input: {
                  to: "`+ toMail + `", 
                  from: "`+ fromMail + `", 
                  subject: "Contact us form from `+ frontendUrl + `", 
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

        let headerPost = data

        setSendProgress(true)

        //console.log(headerPost)

        ////console.log('Test')

    }



    useEffect(() => {
    }, [name, email, phone]);

    // Validate form 
    const validateForm = () => {
        let errors = {};

        if (!name) {
            errors.name = 'Name is required.';
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
                setShowModal(false)
            }, 3000);
            setTimeout(() => {
                setSuccessLabel(false)
                setButtonLabel(true)
                setName('')
                setEmail('')
                setPhone('')
                setChatbox(false)
            }, 4000);

            router.push('/success')


        }

    };

    return (
        <>

            <div className={`${!chatbox ? 'collapsed' : ''} main-card bg-primary-custom`}>
                <button title="Quick Enquiry" aria-label="Quick Enquiry" id="chatbot_toggle" className={`${chatbox ? 'active bg-sky-500 bg-opacity-50 backdrop-filter backdrop-blur-lg' : ''} bg-sky-500`} onClick={() => setChatbox(!chatbox)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
                    </svg>
                </button>
                <div className="chat-area" id="message-box">
                    <div className="text-center py-5">
                        <span className='md:text-[1.7rem] text-[1.5rem]'>Grow Your Brand <span className="block text-white text-[1rem]">by partnering with upturnist</span></span>
                    </div>
                    <div className='border-t border-opacity-10 border-sky-200 p-5 mt-3'>
                        <div className="grid sm:gap-4 gap-3">
                            <input
                                className={`${errors.name ? 'border border-red-500 w-full border-opacity-80 rounded-3 sm:p-5 p-4 placeholder-white bg-transparent' : 'border border-white w-full border-opacity-20 rounded-3 sm:p-5 p-4 placeholder-white bg-transparent'} `}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                //onBlur={changeValidate}
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                            />
                            {errors.name && <p className='text-red-500 mb-3'>{errors.name}</p>}

                            <input
                                className={`${errors.email ? 'border border-red-500 w-full border-opacity-80 rounded-3 sm:p-5 p-4 placeholder-white bg-transparent' : 'border border-white w-full border-opacity-20 rounded-3 sm:p-5 p-4 placeholder-white bg-transparent'} `}
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
                                className={`${errors.phone ? 'border border-red-500 w-full border-opacity-80 rounded-3 sm:p-5 p-4 placeholder-white' : 'border border-white w-full border-opacity-20 rounded-3 sm:p-5 p-4 placeholder-white'} `}
                                placeholder="Phone"
                                value={phone}
                                onChange={setPhone}
                                defaultCountry="AE"
                                required
                            />
                            {errors.phone && <p className='text-red-500 mb-3'>{errors.phone}</p>}

                        </div>
                        <div>

                            <button title="Get your free proposal" aria-label="Get your free proposal" type="submit" className="bg-sky-500 border-sky-500 my-5 rounded-3 p-5 w-full hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:border-sky-600 focus:text-white" onClick={submitEmail}>
                                <span className={buttonLabel == false ? "hidden" : ""}>
                                    Get your free proposal
                                </span>
                                <span className={successLabel == false ? "hidden" : ""}>
                                    Done! Sumbitted
                                </span>
                                <span className={`${sendProgress == false ? "hidden" : ""} flex gap-2 justify-center`} style={{ position: 'relative', top: '-3px' }}>
                                    <svg style={{ position: 'relative', top: '3px' }} className="animate-spin h-5 w-5  text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className='ml-3' style={{ position: 'relative', top: '3px' }}>
                                        Submitting...
                                    </span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
                {/* <div className={`${successLabel == false ? "hidden" : ""} bg-green-400 fixed bottom-0 left-0 right-0 backdrop-filter backdrop-blur-lg p-4  z-50`}>Thank you for contacting us. We'll get back to you very soon</div> */}
            </div>


        </>
    )
}

