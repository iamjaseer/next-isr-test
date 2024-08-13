import React, { useState, useEffect, useRef } from 'react'
import { wordpressGraphQlApiUrl, frontendUrl, siteEmail, siteFromEmail } from "../../utils/variables";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { format, differenceInCalendarDays, isWeekend } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha';
import { useModalContext } from "@/context/modalContext";


export default function ScheduleCallForm() {

    const router = useRouter()

    const { setShowModal } = useModalContext()

    const formField = useRef(null);
    const timesRef = useRef(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [modeMeeting, setModeMeeting] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [timeBox, setTimeBox] = useState(false);
    const [formBox, setFormBox] = useState(false);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [sendProgress, setSendProgress] = useState(false)
    const [successLabel, setSuccessLabel] = useState(false)
    const [buttonLabel, setButtonLabel] = useState(true)
    const [captchaCompleted, setCaptchaCompleted] = useState(false);


    //AVILABLE TIMES
    const times = ['10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM']


    //SELECT TIME
    const selectTimeForCall = (e) => {

        setSelectedTime(e.target.dataset.stime)
        formField.current?.scrollIntoView({ behavior: 'smooth' });
        setFormBox(true)
    };


    //DATE

    function disableDates(date) {
        return differenceInCalendarDays(date, new Date()) < 0 || differenceInCalendarDays(date, new Date()) > 15 || isWeekend(date)
    }



    const selectDayForCall = (e) => {
        timesRef.current?.scrollIntoView({ behavior: 'smooth' });
        setSelectedDate(e)
        setTimeBox(true)
    };









    //MAIL API
    async function sendMail() {

        const fromMail = siteFromEmail
        const toMail = siteEmail
        const mutationId = '778645603248324'
        //const bodyMail = `<html><head></head><body><div style='border:solid thin #2fa4d8;padding:30px;color:#001a2a; font-family:arial,helvetica,sans-serif;font-size:16px;color:#001a2a;line-height:150%;text-align:left;word-wrap:break-word'><p>Hello </p><p>Thank for downloading <strong>"A proven 5 step framework to establish your business online"</strong></p><a href="" style="background:#2fa4d8;display:block;text-align:center;padding:12px;margin:16px 0 0 0;color:#fff;text-decoration:none" target="_blank">Click Here to Download Now</a></div></body></html>`
        const bodyMail = `<html><head></head><body><div style='border:solid thin #2fa4d8;padding:30px;color:#001a2a; font-family:arial,helvetica,sans-serif;font-size:16px;color:#001a2a;line-height:150%;text-align:left;word-wrap:break-word'><p>Hello Upturnist, you have a new message from schedule a call<br/><br/><span style='color:#2fa4d8;'><strong>Name: ` + name + `<br/>Email: ` + email + `<br/>Phone: ` + phone + `<br/>Message: ` + message + `<br/>Mode of meeting: ` + modeMeeting + `<br/>Date: ` + selectedDate + `<br/>Time: ` + selectedTime + `</strong></span></p></div></body></html>`

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
                          subject: "Schedule a Call | `+ frontendUrl + `", 
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
    }, [name, email, phone, message, modeMeeting]);

    // Validate form 
    const validateForm = () => {
        let errors = {};

        if (!name) {
            errors.name = 'Full name is required.';
        }

        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        if (!phone) {
            errors.phone = 'Phone is required.';
        }

        if (!modeMeeting) {
            errors.modeMeeting = 'Mode of meeting is required.';
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
        // Check if the CAPTCHA is completed
        // if (!captchaCompleted) {
        //     console.log('Please complete the CAPTCHA');
        //     return;
        // }

        validateForm();
        if (isFormValid) {
            sendMail();
            setButtonLabel(false);
            setSendProgress(true);
            setIsFormValid(false);

            setTimeout(() => {
                setSuccessLabel(true);
                setSendProgress(false);
                setButtonLabel(true);
            }, 3000);
            setTimeout(() => {
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setModeMeeting('');
            }, 4000);
            setTimeout(() => {
                setSuccessLabel(false);
                setShowModal(false);
            }, 6000);

            router.push('/success');
        }
    };


    return (
        <>
           <div className="w-full mx-auto relative z-10 grid gap-2">
                        <div className="text-center mb-8">
                            <h3 className="text-[2rem] leading-tight mb-2">Schedule a Call</h3>
                            <p className="md:text-[1rem] text-[1rem]">Please pick your convenient date.</p>
                        </div>
                        <div className="grid bg-sky-600 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl">
                            <div className="lg:flex justify-between">
                                <div className="w-full">
                                    {/* {selectedDate && format(selectedDate, 'PP')} */}
                                    <DayPicker
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={(setSelectedDate) => selectDayForCall(setSelectedDate)}
                                        disabled={disableDates}
                                    />
                                </div>
                                <div ref={timesRef} className={`${!timeBox ? 'hidden' : ''} w-full lg:border-l border-t border-sky-500 border-opacity-10`}>
                                    <div className="uppercase text-center text-[1rem] sm:p-5 p-3 border-b border-sky-500 border-opacity-10">choose a time</div>
                                    <div className="sm:p-10 p-5">
                                        <ul className="grid grid-cols-2 gap-3">
                                            {
                                                times.map((time, key) => {
                                                    return (
                                                        <li key={key} data-stime={time} onClick={(e) => selectTimeForCall(e)} className="cursor-pointer bg-sky-800 hover:bg-sky-500 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md p-4 text-center transform hover:scale-110 duration-500 ease-in-out">{time}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={`${!formBox ? 'hidden' : ''} w-full border-t border-sky-500 border-opacity-10`}>
                                <div className="uppercase text-center text-[1rem] sm:p-5 p-3 border-b border-sky-500 border-opacity-10">CONTACT DETAILS</div>
                                <div className="sm:p-10 p-5">
                                    <div className="grid sm:gap-4 gap-3 mt-5" ref={formField}>
                                        <input
                                            className={`${errors.name ? 'border-red-500' : 'border-white'} border w-full border-opacity-20 sm:p-5 p-4 placeholder-white bg-transparent rounded-md`}
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
                                            className={`${errors.email ? 'border-red-500' : 'border-white'} border w-full border-opacity-20 sm:p-5 p-4 placeholder-white bg-transparent rounded-md`}
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
                                            className={`${errors.phone ? 'border-red-500' : 'border-white'} border w-full border-opacity-20 sm:p-5 p-4 placeholder-white bg-transparent rounded-md`}
                                            placeholder="Phone"
                                            value={phone}
                                            onChange={setPhone}
                                            defaultCountry="AE"
                                            required
                                        />
                                        {errors.phone && <p className='text-red-500 mb-3'>{errors.phone}</p>}
                                        <textarea
                                            rows="4"
                                            className={`${errors.message ? 'border-red-500' : 'border-white'} border w-full border-opacity-20 sm:p-5 p-4 placeholder-white bg-transparent rounded-md`}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            //  onBlur={changeValidate}
                                            placeholder="Please describe the business challenge you would like to discuss"
                                            name="message"
                                        ></textarea>
                                        <p>Your preferred mode of meeting</p>
                                        <div className="grid gap-5 w-full rounded-3 border-white border border-opacity-20 sm:p-5 p-4 placeholder-white bg-transparent rounded-md text-white">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="modeofmeeting"
                                                    value="Phone Call"
                                                    onChange={(e) => setModeMeeting(e.target.value)}
                                                    className="w-4 h-4 text-sky-500 border border-opacity-20 border-white bg-transparent focus:ring-sky-500 dark:focus:ring-sky-600"
                                                />
                                                <label
                                                    className="ms-2"
                                                >
                                                    Phone call
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="modeofmeeting"
                                                    value="Microsoft teams"
                                                    onChange={(e) => setModeMeeting(e.target.value)}
                                                    className="w-4 h-4 text-sky-500 border border-opacity-20 border-white bg-transparent focus:ring-sky-500 dark:focus:ring-sky-600"
                                                />
                                                <label
                                                    className="ms-2"
                                                >
                                                    Microsoft teams
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="modeofmeeting"
                                                    value="F2F Meeting"
                                                    onChange={(e) => setModeMeeting(e.target.value)}
                                                    className="w-4 h-4 text-sky-500 border border-opacity-20 border-white bg-transparent focus:ring-sky-500 dark:focus:ring-sky-600"
                                                />
                                                <label
                                                    className="ms-2"
                                                >
                                                    F2F meeting
                                                </label>
                                            </div>
                                            {errors.modeMeeting && <p className='text-red-500 mb-3'>{errors.modeMeeting}</p>}

                                            {/* <ReCAPTCHA
                                                sitekey="6LcDo_EpAAAAAKar9V_r_3CUfDMz8qoW5OEE0iPq"
                                                onChange={(value) => {
                                                    console.log('Captcha value:', value);
                                                    // Set captchaCompleted to true when CAPTCHA is completed
                                                    setCaptchaCompleted(true);
                                                }}
                                            />
                                            {errors.email && <p className='text-red-500 mb-3'>{errors.email}</p>} */}
                                        </div>
                                    </div>
                                    <div>
                                        <button title="Submit" aria-label="Submit" type="button" className="bg-sky-500 border-sky-500 my-5 rounded-3 p-5 w-full hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:border-sky-600 focus:text-white rounded-md" onClick={submitEmail}>
                                            <span className={buttonLabel == false ? "hidden" : ""}>
                                                Submit
                                            </span>
                                            {/* <span className={successLabel == false ? "hidden" : ""}> */}
                                            {/* Done! Sumbitted */}
                                            {/* </span> */}
                                            <span className={`${sendProgress == false ? "hidden" : ""} flex gap-2 justify-center`} style={{ position: 'relative', top: '3px' }}>
                                                <svg className="animate-spin h-5 w-5  text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span className='ml-3' style={{ position: 'relative', top: '-3px' }}>
                                                    Submitting...
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <small className="block text-center p-3">Dubai Standard Time</small>
                    </div>
        </>
    )
}
