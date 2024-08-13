'use client'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function BlurAnimation({ position }) {


    switch (position) {
        case 'top right':
            return (<>
                <ParallaxProvider>
                    <Parallax speed={-10}>
                        {/* <div className="blur-shape top-0 right-0"></div> */}
                         <div className="gradient top-0 right-[100px]"></div>
                    </Parallax>
                </ParallaxProvider>
            </>)
            break;
        case 'top left':
            return (<>
                <ParallaxProvider>
                    <Parallax speed={-10}>
                        {/* <div className="blur-shape top-0 left-0"></div> */}
                        <div className="gradient top-0 left-0"></div>
                    </Parallax>
                </ParallaxProvider>
            </>)
            break;
        case 'bottom left':
            return (<>
                <ParallaxProvider>
                    <Parallax speed={-10}>
                        {/* <div className="blur-shape bottom-0 left-0"></div> */}
                        <div className="gradient bottom-0 left-0"></div>
                    </Parallax>
                </ParallaxProvider>
            </>)
            break;
        case 'bottom right':
            return (<>
                <ParallaxProvider>
                    <Parallax speed={-10}>
                        {/* <div className="blur-shape bottom-0 right-0"></div> */}
                        <div className="gradient bottom-0 right-[100px]"></div>
                    </Parallax>
                </ParallaxProvider>
            </>)
            break;

    }

}
