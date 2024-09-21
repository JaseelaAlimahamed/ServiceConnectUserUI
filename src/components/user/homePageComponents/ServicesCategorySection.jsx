import React, { useState, useEffect } from "react";
import ServiceCategoryCard from "../../reUsableComponents/ServiceCategoryCard";

// const ServiceCategoryData = [
//     { id: 1, imgUrl: "https://img.freepik.com/free-photo/side-view-man-working-as-plumber_23-2150746311.jpg?t=st=1726737993~exp=1726738593~hmac=7b7a2d504905b4917b2de44ac2da12b7f61f26c15d47b200e30c5af49315820e", category: 'Plumbing' },
//     { id: 2, imgUrl: "https://www.softedemy.com/wp-content/uploads/2022/07/Electrical-Optimized.jpg", category: 'Electrical' },
//     { id: 3, imgUrl: "https://s3-us-west-2.amazonaws.com/hiration/ghost/2021/12/images2895-5d26590a000bf-1024x683-compressed.jpg", category: 'Carpentry' },
//     { id: 4, imgUrl: "https://content.jdmagicbox.com/v2/comp/mumbai/h3/022pxx22.xx22.231107164034.p9h3/catalogue/l-t-labour-and-manpower-supplier-dahisar-west-mumbai-labour-contractors-5falo0j56j.jpg", category: 'Construction' },
//     { id: 5, imgUrl: "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/510968128CleaningTechnician.jpg=ws1280x960", category: 'Cleaning' },
//     { id: 6, imgUrl: "https://static.vecteezy.com/system/resources/previews/030/596/704/large_2x/gardening-and-agriculture-concept-young-woman-farm-worker-gardening-flowers-in-garden-gardener-planting-flowers-for-bouquet-summer-gardening-work-girl-gardening-at-home-in-backyard-photo.jpg", category: 'Gardening' },
//     { id: 7, imgUrl: "https://5.imimg.com/data5/ANDROID/Default/2022/4/SJ/LI/OB/148640419/product-jpeg-500x500.jpg", category: 'Driver  ' },
//     { id: 2, imgUrl: "https://www.softedemy.com/wp-content/uploads/2022/07/Electrical-Optimized.jpg", category: 'Electrical' },
//     { id: 3, imgUrl: "https://s3-us-west-2.amazonaws.com/hiration/ghost/2021/12/images2895-5d26590a000bf-1024x683-compressed.jpg", category: 'Carpentry' },
//     { id: 4, imgUrl: "https://content.jdmagicbox.com/v2/comp/mumbai/h3/022pxx22.xx22.231107164034.p9h3/catalogue/l-t-labour-and-manpower-supplier-dahisar-west-mumbai-labour-contractors-5falo0j56j.jpg", category: 'Construction' },
//     { id: 5, imgUrl: "https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/510968128CleaningTechnician.jpg=ws1280x960", category: 'Cleaning' },
// ]   

const ServiceCategorySection = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // State for mobile detection
  
    const displayedCategories = showAllCategories
      ? ServiceCategoryData
      : ServiceCategoryData.slice(0, isMobile ? 2 : 10); // Show 2 on mobile, 9 on desktop
  
    const handleSeeAllClick = () => {
      window.location.href = "/all-categories"; // Replace with your actual path
    };
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setIsMobile(width <= 768); // Adjust breakpoint as needed
      };
  
      window.addEventListener("resize", handleResize);
  
      handleResize(); // Run on initial render
  
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array to run effect only once
  
    return (
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="mb-4 text-2xl font-bold text-light-violet">
            Services Category
          </h2>
          <h3
            className="mb-4 text-xl font-bold text-light-violet cursor-pointer hover:underline"
            onClick={handleSeeAllClick}
          >
            SEE ALL
          </h3>
        </div>
        <div className="flex gap-4 flex-wrap"> {/* Add flex-wrap for mobile responsiveness */}
          {displayedCategories.map((categoryData) => (
            <ServiceCategoryCard
              key={categoryData.id}
              imgUrl={categoryData.imgUrl}
              category={categoryData.category}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ServiceCategorySection;