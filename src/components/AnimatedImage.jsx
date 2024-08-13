'use client'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Images from './Images';

export default function AnimatedImage({src, width, height, alt, classes, transalateY}) {


    return (<>
        <ParallaxProvider>
            <Parallax
             speed={50}
             translateY={['0px', transalateY]}
             >
            <Images
                  imageurl={src}
                  styles={''}
                  quality={80}
                  width={width}
                  height={height}
                  alt={alt}
                  placeholder={false}
                  classes={classes}
                />
            </Parallax>
        </ParallaxProvider>
    </>)

}
