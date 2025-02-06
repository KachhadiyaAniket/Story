import Link from "next/link";
import Image from "next/image";

// MIDDLE LINKS DATA

const footer = () => {
    return (
<div className="mx-auto max-w-1xl pt-3 px-4 sm:px-4 lg:max-w-7xl lg:px-8 bg-[#000000]">
            
                <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                        <div className='col-span-4 md:col-span-12 lg:col-span-4'>
                        <div className="flex gap-2">
                            <Image src={'/images/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-white">Surat City</h5>
                        </div>
                        
                        <div className="flex gap-2 mt-10">
                            <Image src={'/images/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-white">+91 9876543210</h5>
                        </div>

                        <div className="flex gap-2 mt-10">
                            <Image src={'/images/footer/email.svg'} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-white">WebsiteBuilder@gmail.com</h5>
                        </div>
                           
                        </div>

                    

                </div>


                <div className='py-10 lg:flex items-center justify-between border-t border-t-bordertop'>
                    <h4 className='text-white text-sm text-center lg:text-start font-normal'>@2025  WebsiteBuilder</h4>
                    <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        <h4 className='text-white text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <h4 className='text-white text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                    </div>
                </div>

            </div>
    )
}

export default footer;
