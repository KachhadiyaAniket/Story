import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="w-full bg-gray-100 px-4 sm:px-6 lg:px-8 mt-0">
            <div className="max-w-7xl mx-auto py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-16 xl:gap-x-8">
                    {/* Contact Info Section */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 px-10">
                        <div className="flex items-center gap-3">
                            <Image src={'/images/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-black">Surat City</h5>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src={'/images/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-black">+91 9876543210</h5>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image src={'/images/footer/email.svg'} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-black">WebsiteBuilder@gmail.com</h5>
                        </div>
                    </div>
                </div>
                
                {/* Footer Bottom Section */}<br>
                </br>
                <div className='py-6 flex flex-col lg:flex-row items-center justify-between border-t border-gray-300 px-10'>
                    <h4 className='text-black text-sm text-center lg:text-start font-normal'>@2025 WebsiteBuilder</h4>
                    <div className="flex gap-5 mt-4 lg:mt-0 justify-center lg:justify-start">
                        <h4 className='text-black text-sm font-normal'><Link href="/" target="_blank">Privacy Policy</Link></h4>
                        <div className="h-5 bg-gray-400 w-0.5"></div>
                        <h4 className='text-black text-sm font-normal'><Link href="/" target="_blank">Terms & Conditions</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
