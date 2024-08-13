
'use client'
import { useModalContext } from "@/context/modalContext";


export default function FooterCta() {


  const { setModalFor, setShowModal  } = useModalContext()

  const openSubscribeModal = () => {
    setShowModal(true)
       setModalFor('subscribe')
   };

  return (
    <>
      <h2 className="lg:text-[1.8vw] text-[5vw] leading-snug">
        Join our community to learn the latest trends and insights in Branding and Digital Marketing.
      </h2>
      <p className="mt-[24px] text-lg">We assure no Spam, One email in a month!</p>
      <button title="Subscribe" aria-label="Subscribe" className='btn mt-6 sm:w-auto w-full' onClick={openSubscribeModal}>Subscribe</button>
     </>
  )
}
