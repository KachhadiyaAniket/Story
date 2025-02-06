"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";



export default function Home() {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("content-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-white text-black ">
      {/* Navbar */}
      <div 
  className="flex justify-between items-center px-20 py-2 w-full fixed top-0 bg-white z-[1000] shadow-md"
  style={{ borderBottom: '1px solid #676767' }}
>
  <div className="flex items-center px-8">
  <span class="font-serif font-bold  text-2xl">Website Builder</span>
  </div>

  {/* Buttons */}
  <div className="space-x-4 px-8">
    <button className="relative text-gray-700 font-bold tracking-[1px] hover:text-black transition-all duration-300 
      after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[3px] 
      after:bg-[#8F0FB3] after:rounded-xl after:transition-all after:duration-300 hover:after:w-full">
      Log in
    </button>
    <button className="bg-transparent text-[#8F0FB3] border-2 border-[#8F0FB3] px-8 py-3 rounded-full 
  transition-all duration-300 ease-in-out hover:bg-[#8F0FB3] hover:text-white">
  Get Started
</button>
  </div>
</div>

      <div className="bg-white text-black min-h-screen px-20 py-20 ">
      {/* Hero Section */}
      <section
  className="text-center py-20 text-white"
  style={{
    backgroundImage: 'url(/images/Banner/bg4.PNG)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
<h1 className="font-bold leading-tight" style={{ fontSize: "40px" }}>
  <p className="font-serif">
    Build Stunning Websites With <br />
    Unique Templates !
  </p>
</h1>

        <p className="text-gray-300 mt-4" style={{ fontSize: "15px"}}>
          Create, customize, and launch a professional website, no coding required. <br />
          Powerful tools, stunning templates, and seamless performance to grow your brand.
        </p>

        {/* Button */}
        <div className="flex justify-center mt-6">
        <button 
  className="bg-[#8F0FB3] text-white px-10 py-3 rounded-full 
    shadow-md transition-all duration-300 ease-in-out relative
    hover:shadow-[0_0_35px_0px_rgba(143,15,179,0.5)] 
    active:shadow-[0_0_99px_55px_rgba(143,15,179,0.7)]">
  Get Started
</button>

        </div>

        {/* Image Grid Section (inside Hero Section, no extra padding) */}
        <section 
          className="grid builder-hero__image-container pt-14"
          style={{
            top: "43px",
            overflow: "hidden",
            position: "relative", // Or "fixed" if needed
            marginTop: "-73.6px",
            zIndex: "0" // Sends it behind other elements
          }}
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-2">
            {/* Image 1 */}
            <li className="grid_item builder-hero_image">
              <img
                className="image w-[300] h-[200px]"
                sizes="100vw"
                srcSet="https://cdn.shopify.com/shopifycloud/brochure/assets/seo/website/builder/hero-image-1-small-e07977de60070f316f112b8da6e4f3a61bee1678350c056bb12f5ba7b64c693c.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/seo/website/builder/hero-image-1-large-d43f91b1def401f9efd5354b715004bc3c6445677d3fd555e6a54a4648d1b1d9.png?quality=50 2x"
                alt="An example of a website you can create with the website builder"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover", // Ensures the image covers the area
                  clipPath: "inset(0 0 12% 0)" // Clips the bottom half of the image
                }}
              />
            </li>

            {/* Image 2 */}
            <li className="grid_item builder-hero_image">
              <img
                className="image  w-[300] h-[200px] "
                sizes="100vw"
                srcSet="https://cdn.shopify.com/shopifycloud/brochure/assets/seo/website/builder/hero-image-2-small-2f6adc91b6e50c9801e432a6df3cb8b712ce9909ed12c05ba8754fef8fc8b301.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/seo/website/builder/hero-image-2-large-3b28710b44429f2a1dde7925a92f40833f1e2b139541e14bc3ad3b0ac0755dbf.png?quality=50 2x"
                alt="An example of a website you can create with the website builder" 
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover", // Ensures the image covers the area
                  clipPath: "inset(0 0 12% 0)" // Clips the bottom half of the image
                }}
              />
            </li>

            {/* Image 3 */}
            <li className="grid_item builder-hero_image">
              <img
                className="image  w-[300] h-[200px]"
                sizes="100vw"
                srcSet="https://cdn.shopify.com/shopifycloud/brochure/assets/seo/website/builder/hero-image-3-small-4af6511a40dbcb46ce3eaa81a51f193af8dea4a32232112008753aceb7ae1c87.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/seo/website/builder/hero-image-3-large-d9aa320730ff8c6a23fb5cd8aa82429fea0cd826ac1a9eb0f3990b8c6621df1d.png?quality=50 2x"
                alt="An example of a website you can create with the website builder"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover", // Ensures the image covers the area
                  clipPath: "inset(0 0 12% 0)" // Clips the bottom half of the image
                }}
              />
            </li>

            {/* Image 4 */}
            <li className="grid_item builder-hero_image hide--mobile">
              <img
                className="image  w-[300] h-[200px]"
                sizes="100vw"
                srcSet="https://cdn.shopify.com/shopifycloud/brochure/assets/seo/website/builder/hero-image-4-small-cd0551de59da416e4cc8111386d4c6f943e7934a6bb7b267bf7603a14e861005.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/seo/website/builder/hero-image-4-large-8d9228e1df3c0c448a5b47a77ceb4c46c1444a8ebcfb7a86006242023bc3ca72.png?quality=50 2x"
                alt="An example of a website you can create with the website builder"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover", // Ensures the image covers the area
                  clipPath: "inset(0 0 11.5% 0)" // Clips the bottom half of the image
                }}
              />
            </li>
          </ul>
        </section>
       
      </section>
      <motion.section
        id="content-section"
        className="px-14 py-14 flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Content */}
        <div className="max-w-[50%]">
          <h2 className="text-[40px] text-[#720B90] font-bold">
            <p class="font-serif">
            A Fully customizable website builder
            </p>
          </h2>
          <p className="font-bold text-gray-800 text-[20px] mt-4">
            Lots of themes and integrations
          </p>
          <p className="leading-tight text-base mt-6">
            Our website builder empowers you to create, design, and manage
            your own website effortlessly no coding or technical expertise 
            required. With a user-friendly interface, drag-and-drop functionality,
             and a vast selection of templates, you can build a site that truly reflects your brand.
            Easily add content, multimedia, and features. Get started quickly and  make your website.
          </p>
        </div>

        {/* Right Image */}
        <div className="max-w-[45%]">
          <Image
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/seo/website/builder/pillars-get-builder-small-7986cb046b635846e274ef1e19ce3cd2cca1b82c9e32cf4f997cd5c537789dd0.png"
            alt="Website Builder"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </motion.section>
      <motion.section
  id="content-section"
  className="px-14 py-14 flex flex-col md:flex-row-reverse items-center justify-between"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Right Content (now on the left) */}
  <div className="max-w-[50%]">
  <h2 className="text-[40px] text-[#720B90] font-bold">
  <p className="font-serif">Effortless Website Creation</p>
    </h2>
    <p className="font-bold text-gray-800 text-[20px] mt-4">
    Really Easy To Use
    </p>
    <p className="leading-tight text-base mt-6">
        Build and manage your website effortlessly—no coding required! 
        Our intuitive website builder offers a **drag-and-drop editor**, 
        a **vast collection of professional templates**, and a **user-friendly interface** 
        to bring your vision to life. Personalize your website with **images, videos, and content** 
        in just a few clicks. Whether you're launching a blog, business site, or portfolio, 
        get started today and create a website that truly represents your brand.
    </p>
</div>


  {/* Left Image (now on the right) */}
  <div className="max-w-[45%]">
    <Image
      src="https://cdn.shopify.com/shopifycloud/brochure/assets/seo/website/builder/pillars-builder-features-small-a4d7e017337b6b10dcc264ea55fa248841bbbba8e762c353ed554b663ef9516a.png"
      alt="Website Builder"
      width={500}
      height={500}
      className="w-full h-auto"
    />
  </div>
</motion.section>


   
<div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold">Built with website Builder</h2>
          <p className="text-lg mt-4">We are serving  fantastic Template.</p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-10">
          {[
            { link: "https://johnrush.me/", img: "https://unicorn-images.b-cdn.net/410272ab-3d29-4182-9ce1-a1ebbadd0891?optimizer=gif" },
            { link: "https://allgpts.co/", img: "https://unicorn-images.b-cdn.net/535a9146-52eb-400d-ac19-a0d7134629e7?optimizer=gif" },
            { link: "https://letter.so/", img: "https://unicorn-images.b-cdn.net/70bb38f5-3503-493a-a18d-a42cc7698e76?optimizer=gif" },
            { link: "https://dataheadhunters.com/", img: "https://unicorn-images.b-cdn.net/3a2826df-543c-4642-b204-75f0231407b6?optimizer=gif" },
          ].map((site, index) => (
            <a
              key={index}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 h-64"
            >
              <div className="relative w-full h-full overflow-hidden">
                <motion.img
                  src={site.img}
                  alt="Built with Unicorn Platform"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:-translate-y-1/3"
                />
              </div>

              {/* Visit Button (Appears on Hover) */}
              <div className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-500 group-hover:bottom-4">
                Visit
              </div>
            </a>
          ))}
        </div>
      </div>
   </div>
   </div>
  );
}