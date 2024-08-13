'use client'
import Header from "./Header";
import Footer from "./Footer";
import { useModalContext } from "@/context/modalContext";
import Images from "./Images";
import HeroForm from "./Forms/HeroForm";
import OfferForm from "./Forms/OfferForm";
import DownloadForm from "./Forms/DownloadForm";
import SubscribeFormBrevo from "./Forms/SubscribeForm";
import ScheduleCallForm from "./Forms/ScheduleCallForm";
import ScrollToTopPage from "./ScrollToTopPage";
import QuickContactForm from "./Forms/QuickEnquiryForm";
import PackageBookingForm from "./Forms/PackageBookingForm";
import { useThemeContext } from "@/context/themeContext";

 

export default function Layout({ children, type }) {

  const { showModal, setShowModal, setModalData, modalData, modalFor, setIsClassAdded } = useModalContext()
  const { theme } = useThemeContext();
  //console.log(modalData[0])


  const closeModal = () => {
    setShowModal(!showModal)
    setIsClassAdded(false)
    setModalData([])
  };

  return (
    <div className={`bg-${theme}-background text-${theme}-text`}>
      {type == 'landing-page' ?
        <Header type="landing-page" />
        :
        <Header type="normal" />
      }
      <main >{children}</main>
      <Footer />

      <ScrollToTopPage />
      <QuickContactForm />

      {/* ALL POPUP MODALS START HERE */}
      {showModal &&
        <div className="fixed top-0 left-0 right-0 bottom-0  z-[99] bg-primary-custom overflow-auto items-center grid py-20">
          <button title="Close button"  className="closeButton mb-10" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dcf4ff" viewBox="0 0 256 256"><path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path></svg>
          </button>

          {/* MODAL WORKS START*/}
          {modalFor == 'work' ? <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:py-24 py-12">
              <div>
                <Images
                  imageurl={modalData.imageUrl}
                  styles={''}
                  quality={100}
                  width={'500'}
                  height={'500'}
                  alt={modalData.heading}
                  placeholder={true}
                  classes={'block w-full'}

                />
              </div>
              <div className="flex items-center">
                <div className="lg:p-10 py-10 grid gap-7">
                  <h3 className="font-medium text-5xl">{modalData.heading}</h3>
                  {/* <div  className="text-lg" dangerouslySetInnerHTML={{ __html: modalData.description}} /> */}
                 
                </div>
              </div>
            </div>
          </div>
            :
            null
          }
          {/* MODAL WORKS END*/}


          {/* MODAL HERO START*/}
          {modalFor == 'hero' ? <div className="container-boxed">
            <div className="md:w-2/3 mx-auto">
              <HeroForm />
            </div>
          </div>
            :
            null
          }
          {/* MODAL WORKS END*/}


          {/* MODAL OFFER START*/}
          {modalFor == 'offer' ? <div className="container-boxed">
            <div className="md:w-2/3 mx-auto">
              <OfferForm />
            </div>
          </div>
            :
            null
          }
          {/* MODAL OFFER END*/}


          {/* MODAL DOWNLOAD START*/}
          {modalFor == 'download' ? <div className="container-boxed">
            <div className="md:w-2/3 mx-auto">
              <DownloadForm />
            </div>
          </div>
            :
            null
          }
          {/* MODAL DOWNLOAD END*/}

          {/* MODAL SUBSCRIBE START*/}
          {modalFor == 'subscribe' ? <div className="container-boxed">
            <div className="md:w-2/3 mx-auto">
              <SubscribeFormBrevo />
            </div>
          </div>
            :
            null
          }
          {/* MODAL SUBSCRIBE END*/}


          {/* MODAL SCHEDULE CALLBACK START*/}
          {modalFor == 'callback' ? <div className="container">
            <div className="md:w-2/3 mx-auto">
              <ScheduleCallForm />
            </div>
          </div>
            :
            null
          }
          {/* MODAL SCHEDULE CALLBACK END*/}


          {/* MODAL PACKAGE START*/}
          {modalFor == 'package' ? <div className="container py-10">
            <div className="md:w-2/3 mx-auto">
              <PackageBookingForm data={modalData} />
            </div>
          </div>
            :
            null
          }
          {/* MODAL PACKAGE END*/}



        </div>}
    </div>
  );
};





