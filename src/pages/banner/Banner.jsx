
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";



export default function Home() {
  const [text, setText] = useState("");
  const fullTextArray = ["Templates!", "Designs!"]; // Added "Designs!"
  const typingSpeed = 100;
  const resetDelay = 3000;

  useEffect(() => {
    let index = 0;
    let wordIndex = 0;
    let interval;

    const typeText = () => {
      interval = setInterval(() => {
        setText(fullTextArray[wordIndex].substring(0, index));
        index++;
        if (index > fullTextArray[wordIndex].length) {
          clearInterval(interval);
          setTimeout(() => {
            setText(""); // Reset text after typing
            index = 0; // Reset the index for the next typing cycle
            wordIndex = (wordIndex + 1) % fullTextArray.length; // Switch to next word
            typeText(); // Restart typing after reset
          }, resetDelay);
        }
      }, typingSpeed);
    };

    typeText();
    return () => clearInterval(interval);
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which image is hovered

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
  <span class="font-sans font-bold  text-2xl">Website Builder</span>
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
<h1 className="font-bold leading-tight text-3xl md:text-4xl">
                <p className="font-sans">
                    Build Stunning Websites With <br /> Unique <span className="text-[#8F0FB3]">{text}</span>
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
        className="px-14 py-20 flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Content */}
        <div className="max-w-[50%]">
          <h2 className="text-[35px] text-[#720B90] font-bold">
            <p class="font-sans">
            A Fully customizable website builder
            </p>
          </h2>
          <p className="font-bold text-gray-800 text-[20px] mt-4">
            Lots of themes and integrations
          </p>
          <p className="leading-tight text-base mt-6">
            Our <span className="text-[#720B90]">Website Builder</span> empowers you to create, design, and manage
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
  <h2 className="text-[35px] text-[#720B90] font-bold">
  <p className="font-sans">Effortless Website Creation</p>
    </h2>
    <p className="font-bold text-gray-800 text-[20px] mt-4">
    Really Easy To Use
    </p>
    <p className="leading-tight text-base mt-6">
    Creating a website should be simple and stress-free. At <span className="text-[#720B90]">Website Builder</span>, we believe that anyone, regardless of technical expertise, should be able to build a stunning website. Whether you’re launching a personal blog, showcasing a portfolio, or building an online store, our platform empowers you to create a professional online presence without the need for coding skills.
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
<div className="bg-gray-900 text-white py-20 px-10 mb-0">
        <div className="container mx-auto text-center py-10">
          <h2 className=" font-sens text-5xl font-bold">Built with <span className="text-[#720B90]">Website</span> Builder</h2>
          <p className="text-lg mt-4">We are serving over Fantastic <span className="text-[#720B90]">Templates !</span></p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-20 px-10">
          {[
            { link: "https://johnrush.me/", img: "https://unicorn-images.b-cdn.net/410272ab-3d29-4182-9ce1-a1ebbadd0891?optimizer=gif" },
            { link: "https://allgpts.co/", img: "https://unicorn-images.b-cdn.net/535a9146-52eb-400d-ac19-a0d7134629e7?optimizer=gif" },
            { link: "https://letter.so/", img: "https://unicorn-images.b-cdn.net/70bb38f5-3503-493a-a18d-a42cc7698e76?optimizer=gif" },
            { link: "https://dataheadhunters.com/", img: "https://unicorn-images.b-cdn.net/3a2826df-543c-4642-b204-75f0231407b6?optimizer=gif" },
            { link: "https://getpercs.com/", img: "https://unicorn-images.b-cdn.net/d7d07898-4c45-478b-a6f2-d9026d26c095?optimizer=gif" },
            { link: "https://parkingpin.io/", img: "https://unicorn-images.b-cdn.net/5b2ba5ab-cc40-4e21-aeea-a8594e0e6acb?optimizer=gif" },
            { link: "https://bento-links.unicornplatform.page", img: "https://unicorn-images.b-cdn.net/e038b04d-f7fc-4362-884d-ec0abaa96782?optimizer=gif" },
            { link: "https://dashboard-portfoilo.unicornplatform.page", img: "https://unicorn-images.b-cdn.net/a1f050c8-ec84-4dec-8ff8-df598d80c1b6?optimizer=gif" },
            { link: "https://mobile-app-modern.unicornplatform.page/", img: "https://unicorn-images.b-cdn.net/4f7fb38c-7369-4ad3-babc-64efcc853892?optimizer=gif" },
      ].map((site, index) => (
      <a
        key={index}
        href={site.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 h-64"
        onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on hover
        onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
      >
        <div className="relative w-full h-full">
          {/* Scrollable Image with Hover Effect */}
          <div
            className="relative w-mid h-mid overflow-hidden"
            style={{
              height: '100%',
            }}
          >
            <img
              src={site.img}
              alt="Built with Unicorn Platform"
              className={`w-full h-auto object-cover transition-all duration-500 ease-in-out transform ${
                hoveredIndex === index ? 'hoverScroll' : ''
              }`}
            />
          </div>
        </div>

        {/* Visit Button Appears on Hover */}
       
      </a>
    ))}
  </div>

  {/* CSS for Scrolling Effect on Hover */}
  <style jsx>{`
    .hoverScroll {
      animation: scrollImage 3s ease-out forwards; /* Stop after one cycle */
    }

    @keyframes scrollImage {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-68%); /* Scroll the image upwards */
      }
    }

    /* New CSS for glowing border and shadow effect */
    .group:hover {
      border: 1px solidrgb(161, 19, 161); /* Glowing border */
      box-shadow: 0 0 80px rgba(224, 14, 224, 0.46); /* Glowing shadow */
    }
  `}</style>
</div>

   </div>
   </div>
  );
}