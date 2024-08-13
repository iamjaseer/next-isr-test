import NoInternetConnection from "@/components/NoConnection";
import "../../public/styles/globals.min.css";
// import "../../public/styles/tempstyle.css";
import CusrsorAnimation from "@/components/CusrsorAnimation";
import { ModalContextProvider } from "@/context/modalContext";
import { ThemeProvider } from "@/context/themeContext";


export default function App({ Component, pageProps }) {
  return (
    <>
      <NoInternetConnection>
      <ThemeProvider>
        <ModalContextProvider>
          <CusrsorAnimation />
            <Component {...pageProps} />
        </ModalContextProvider>
        </ThemeProvider>
      </NoInternetConnection>
    </>
  )
}
