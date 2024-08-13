'use client'

import React, { useState, useEffect } from 'react'
import { wordpressGraphQlApiUrl, frontendUrl, siteEmail, siteFromEmail } from "../../utils/variables";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useRouter } from 'next/navigation'

export default function ContactForm() {

    const router = useRouter()

    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
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
        const bodyMail = `<html><head></head><body><div style='border:solid thin #001a2a;padding:30px;color:#001a2a;'><strong><p>Name: ` + name + `<p/><p>Place: ` + place + `<p/><p>Email: ` + email + `<p/><p>Phone: ` + phone + `<p/><p>Message: ` + message + `</p></strong></div></body></html>`

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
    }, [name, place, email, phone, message]);

    // Validate form 
    const validateForm = () => {
        let errors = {};

        if (!name) {
            errors.name = 'Name is required.';
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
            }, 3000);
            setTimeout(() => {
                setSuccessLabel(false)
                setButtonLabel(true)
                setName('')
                setPlace('')
                setEmail('')
                setPhone('')
                setMessage('')
            }, 4000);

 router.push('/success')
        }

    };

    return (
        <>
            <div className="grid sm:gap-4 gap-3">
                <input
                    className={`${errors.name ? 'border-1 border-red-500 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white' : 'border-0 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white'} `}
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
                    className={`${errors.place ? 'border-1 border-red-500 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white' : 'border-0 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white'} `}
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    // onBlur={changeValidate}
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
                <textarea
                    rows="4"
                    className={`border-0 w-full bg-sky-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3 sm:p-6 p-5 placeholder-white`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    //  onBlur={changeValidate}
                    placeholder="Message"
                    name="message"
                ></textarea>
                <p>Now your personal data will go immediately to Upturnist! We promise to take good care of them.</p>
            </div>
            <div>

                <button title="Submit" aria-label="Submit" type="submit" className="btn my-5 btn sm:w-auto w-full hover:bg-sky-500 hover:border-sky-500 focus:text-white focus:border-sky-500" onClick={submitEmail}>
                    <span className={buttonLabel == false ? "hidden" : ""}>
                        Submit
                    </span>
                    <span className={successLabel == false ? "hidden" : ""}>
                        Done! Sumbitted
                    </span>
                    <span className={`${sendProgress == false ? "hidden" : ""} flex gap-2 justify-center`} style={{ position: 'relative', top: '-3px' }}>
                        <svg className="animate-spin h-5 w-5  text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className='ml-3' style={{ position: 'relative', top: '9px' }}>
                            Submitting...
                        </span>
                    </span>
                </button>
            </div>
            {/* <div className={`${!successLabel == false ? "hidden" : ""} border border-green-400 text-green-400 text-opacity-100 p-4 text-center mt-4`}>Thank you for contacting us. We'll get back to you very soon</div> */}
        </>
    )
}

