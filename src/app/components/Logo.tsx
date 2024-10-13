import Image from 'next/image';
import logo from '../public/youtube-logo2.png'

const Logo = () => {
    return <Image src={logo} alt="Logo" width={80} height={50} />;
};

export default Logo;
