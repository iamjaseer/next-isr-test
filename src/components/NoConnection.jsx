

'use client'
import React, {useState, useEffect} from 'react';
import AnimatedTextCharacter from './AnimatedText';
import BlurAnimation from './BlurAnimation';
import { AOSInit } from './Aos';
import BackgroundAnimation from './BackgroundAnimation';


const NoInternetConnection = (props) => {
    // state variable holds the state of the internet connection
    const [isOnline, setOnline] = useState(true);







    // On initization set the isOnline state.
    useEffect(()=>{
        setOnline(navigator.onLine)

        
    // event listeners to update the state 
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });


    
    },[])

    // if user is online, return the child component else return a custom component
    if(isOnline){
    return(
        props.children
    )
    } else {
        return(
            <>
              <AOSInit />
            <section className="hero sm:h-screen h-[80vh] flex items-center sm:py-32 py-6 overflow-hidden relative text-center">
                <BlurAnimation position="bottom left" />
                <div className="container z-10 relative">
                    <div className="grid gap-5">
                        <h1 className="md:text-[4rem] text-[3rem] leading-tight text-sky-500" data-aos="fade-up">No internet connection</h1>
                        <p className="text-[1.5rem]" data-aos="fade-up" data-delay="500">
                        Please check your internet connection and try again
                        </p>
                    </div>
                </div>
                <BackgroundAnimation />
            </section>
            </>
        )
    }
}

export default NoInternetConnection;