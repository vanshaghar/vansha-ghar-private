import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  LocateIcon,
  PhoneCallIcon,
} from "lucide-react";
import { VANSHA_GHAR } from "../../lib/constants/vanshaghar";
const DefaultFooter = () => {
  return (
    <footer className="footer-dark dark-black-bg text-white p-r z-1 pt-10">
      <div className="container">

        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-start">
          <div className="me-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Social network icons container */}
          <div className="flex gap-4 justify-center">
            <Link className="text-gray-400 hover:text-gray-300" href={VANSHA_GHAR.facebook}>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link className="text-gray-400 hover:text-gray-300" href={VANSHA_GHAR.instagram}>
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link className="text-gray-400 hover:text-gray-300" href={VANSHA_GHAR.tiktok}>
              <TikTokIcon />
            </Link>
            <Link className="text-gray-400 hover:text-gray-300" href={VANSHA_GHAR.whatsapp()}>
              <WhatsAppIcon />
            </Link>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="bg-white ">
                <Link legacyBehavior
                  className="flex justify-center bg-white items-center "
                  href="/">
                  <img
                    src="/assets/images/logo/logo-white.svg"
                    alt="Brand Logo"
                    className="w-full h-auto p-10"
                  />
                </Link>
              </div>
              <p
                className="text-gray-400 text-sm mt-4 text-start">
                Enjoy the best of Nepalese cuisine at Vansha Ghar, with a wide range of options for all tastes.
              </p>
            </div>
            <div className="flex sm:contents  items-start w-full justify-between">
              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-center">Navigation</h6>
                <p className="mb-4">
                  <Link legacyBehavior href="/">Home</Link>
                </p>
                <p className="mb-4">
                  <Link legacyBehavior href="/about">About</Link>
                </p>
                <p className="mb-4">
                  <Link legacyBehavior href="/menu">Menu</Link>
                </p>
                <p className="mb-4">
                  <Link legacyBehavior href="/menu-old">Menu(Old)</Link>
                </p>
                <p className="mb-4"><Link legacyBehavior href="/blog">Blog</Link></p>
                <p className="mb-4"><Link legacyBehavior href="/contact">Contact</Link></p>
              </div>
              {/* Useful links section */}
              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-center">Order Online</h6>
                <p className="mb-4"><Link legacyBehavior href="https://smilesuae.ae/Smiles-Portal-1.0.0/#/">Smiles</Link></p>
                <p className="mb-4"><Link legacyBehavior href="https://www.talabat.com/uae/vansha-ghar-restaurant">Talabat</Link></p>
                <p className="mb-4"><Link legacyBehavior href="https://food.noon.com/outlet/VNSHGHDUO6">Noon Foods</Link></p>
                <p className="mb-4"><Link legacyBehavior href="https://deliveroo.ae/menu/abu-dhabi/al-danah/vansha-ghar-restaurant">Delivero</Link></p>
              </div>
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-center">Contact</h6>
              <p className="mb-4 flex items-center justify-center text-start md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <LocateIcon />
                </span>
                {VANSHA_GHAR.address}
              </p>
              <p className="mb-4 flex items-center justify-start md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <MailIcon />
                </span>
                <a href={`mailto:${VANSHA_GHAR.email}`}>{VANSHA_GHAR.email}</a>
              </p>
              <p className="mb-4 flex items-center justify-start md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <PhoneCallIcon />
                </span>
                <a href={`tel:${VANSHA_GHAR.phoneNumber}`}>{VANSHA_GHAR.phoneNumber}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-black/5 p-6 text-center">
          <span>© {new Date().getFullYear()} Copyright: Vansha Ghar</span>
        </div>
      </div>

    </footer>

  );
};
export default DefaultFooter;


const WhatsAppIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24px" width="24px" viewBox="0 0 308 308">
      <g>
        <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z" />
        <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z" />
      </g>
    </svg>

  );
};
const TikTokIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24px" height="24px" viewBox="0 0 32 32" version="1.1">
      <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
    </svg>
  );
};