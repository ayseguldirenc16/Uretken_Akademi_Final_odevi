
import { CiInstagram , CiYoutube} from 'react-icons/ci';
import { BsTwitter } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';


import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <ul className="flex space-x-4 mt-3 mb-6 ">
            <li>
              <Link to="/" className=" hover:bg-slate-300 rounded-lg px-4 py-2 no-underline text-black ">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/AtikTakip" className=" hover:bg-slate-300 rounded-lg px-4 py-2 no-underline text-black">
               Rakamlarla Çevresel İsrafın Gerçekleri
              </Link>
            </li>
            <li>
              <Link to="/About" className=" hover:bg-slate-300 rounded-lg px-4 py-2 no-underline text-black">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/content" className=" hover:bg-slate-300 rounded-lg px-4 py-2 no-underline text-black">
                İletişim
              </Link>
            </li>
          </ul>
          <div className="  flex items-center mt-1  ">
        <a className="  hover:bg-slate-300 " href="https://www.instagram.com/bursabuyuksehir/ " target='_blank'>
          <div >
          <CiInstagram className='w-9  rounded-xl right-2 text-black ' />
          </div>
        </a>
        <a className=" hover:bg-slate-300 top-3  " href="https://twitter.com/bursabuyuksehir" target='_blank'>
          <BsTwitter className='w-9 rounded-xl right-2 text-black'  />
        </a>
        <a className=" hover:bg-slate-300 " href="https://www.youtube.com/c/BursaB%C3%BCy%C3%BCk%C5%9FehirBelediyesi16" target='_blank'>
          <CiYoutube className='w-9 rounded-xl right-2 text-black' />
        </a>
        <a className="  hover:bg-slate-300" href="https://www.facebook.com/bursabuyuksehir" target='_blank'>
          <FiFacebook className='w-9 rounded-xl right-2 text-black ' />
        </a>
      </div>
          <div className="button">
            <button className=' bg-green-600 border-2 w-20 h-12 text-black font-bold mr-4 rounded-full'> Giriş Yap </button>
            <button className=' bg-red-600 border-2 w-20 h-12 text-white font-bold mr-4 rounded-full'> Çıkış Yap </button>
          </div>
      </div>
      <hr />
    
    </nav>
    


    

  );
}

export default Header;
