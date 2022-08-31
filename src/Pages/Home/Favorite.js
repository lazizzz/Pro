import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";  


function Favorite({ feature }) {
   //useEffect
   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up-right" className="bg-white">
      <div
        key={feature.id}
        className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Legends
          </h2>
          <p className="mt-4 text-gray-500">{feature.coments}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              {/* <Link to={`/About/${feature.id}`}> */}
                 <dt className="font-medium text-gray-900">{feature.title}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
              {/* </Link> */}
             
              <dt className="font-medium text-gray-900">
                Year of Birth: {feature.releaseDate}
              </dt>
            </div>
          </dl>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={feature.image_two}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
          //   src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
          //   alt="Side of walnut card tray with card groove and recessed card area."
          //   className="rounded-lg bg-gray-100"
          />
          <img
          //   src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
          //   alt="Walnut card tray filled with cards and card angled in dedicated groove."
          //   className="rounded-lg bg-gray-100"
          />
          <img
            src={feature.imageURL}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 "
          />
        </div>
      </div>
    </div>
  );
}

export default Favorite;
