
import { useModalContext } from "@/context/modalContext";

export default function EnquiryService(){

    const { setModalFor, setShowModal } = useModalContext()

    //console.log(pageData)

    const openEnquiryModal = () => {
        setShowModal(true)
        setModalFor('hero')
    };

    return(
        <div className="sm:mt-[16px] mt-[8px] sm:mb-0 mb-10">
        <button title="Contact us" aria-label="Contact us" type="button" className="btn inline-block sm:w-auto w-full" onClick={openEnquiryModal}>Contact us</button>
    </div>
    )
}