import BlurAnimation from "./BlurAnimation"
import AnimatedTextCharacter from "./AnimatedText"
import ShapeAnimation from "./ShapeAnimation"
import BackgroundAnimation from "./BackgroundAnimation"


export default function PageHeading({ heading, subHeading }) {
  return (<>
    <section style={{ marginTop: '-120px' }} className="hero lg:h-screen h-[80vh] flex sm:items-center items-end sm:py-20 py-6 overflow-hidden relative">
      <BlurAnimation position="bottom left" />
      <div className="container z-10 relative">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="items-center grid gap-7 sm:order-1 order-2">
            <h1 className="lg:text-[4rem] md:text-[4rem] sm:text-[3rem] text-[2rem] leading-tight" data-aos="fade-up">
              <AnimatedTextCharacter text={heading && heading} />
            </h1>
            <p className="md:text-[1.6rem] text-[1rem]" data-aos="fade-up" data-delay="500">{subHeading && subHeading}</p>
          </div>
          <div className="flex items-center sm:order-2 order-1">
            <ShapeAnimation large />
          </div>
        </div>
      </div>
      <BackgroundAnimation />
    </section>
  </>)
}