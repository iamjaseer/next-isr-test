import Link from 'next/link';
import Images from './Images';

function Logo(props) {

    const {
        url,
        alt,
        logoTitle
    } = props

    return (<>
        {props &&
            <Link title="Upturnist Logo" aria-label="Upturnist Logo" className='block' href="/">
                <img src={url} alt={alt} title={logoTitle} className="logo max-w-[250px] block w-full" />
            </Link>}
    </>)


}


export default Logo
