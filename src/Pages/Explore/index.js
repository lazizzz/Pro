import Vide from "../Media/bgvideo2.mp4"


import Layout from "../../shared_components/Layout";
// Vaqf Logo
import Vaqf from "../Media/60x78.gif";
// Ezgu Amal Logo
import Amal from "../Media/ezgu.png";









// Vaqf
const Vaqff = [
  {
    name: "Siz ham qoshiling",
    description: "Bemor bolajonlar uchun navbatdagi xayriya",
    imageSrc:
      "https://vaqf.uz/uploads/7d8ad387-a81b-b46d-64f4-ecf3d577ca18_gallery_.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "https://vaqf.uz/",
  },
  {
    name: "Siz ham qoshiling",
    description: "Bemor Qizaloqga Yordam",
    imageSrc:
      "https://vaqf.uz/uploads/6730970c-ee92-ce9d-8bcf-7f84a90d9e24_gallery_.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "https://vaqf.uz/",
  },
  {
    name: "Siz ham qoshiling",
    description: "Navbatdagi Xayriya Bayrami ",
    imageSrc:
      "https://vaqf.uz/uploads/949a7000-a965-7412-9713-b49e5125f5e7_gallery_.jpg",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://vaqf.uz/",
  },
];
// Ezgu Amal
const Ezgu = [
  {
    name: "Allayorov Azamat",
    description: "Diagnoz:   Гломерулонефрит",
    imageSrc: "https://ezguamal.org/wp-content/uploads/2022/07/Azamat.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "https://ezguamal.org/",
  },
  {
    name: "Solijonov Ulugbek",
    description: "Sizlarni Yordamingiz Tufayli Bolajonimiz Tuzaldi",
    imageSrc:
      "https://ezguamal.org/wp-content/uploads/2022/08/photo_2022-06-09_14-17-01.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "https://ezguamal.org/",
  },
  {
    name: "Islomov Hayriddin",
    description: "Diagnoz: Геморрагические синдром",
    imageSrc:
      "https://ezguamal.org/wp-content/uploads/2022/08/photo_2022-06-21_13-22-39.jpg",

    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://ezguamal.org/",
  },
];

export default function ExplorePage() {
  return (
    <Layout>
      {/* Vaqf Fondi */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <button className="h-16 w-40 float-right bg-green-500 rounded-lg font-semibold">
              <a href="https://vaqf.uz/oz/pages/view/be_volontee">
                Yordam Beraman
              </a>
            </button>
            <h2 className="text-2xl font-bold text-green-900">Vaqf Fo'ndi</h2>
            <img className="ml-center-add " src={Vaqf} />

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {Vaqff.map((Vaqff) => (
                <div key={Vaqff.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <a href={Vaqff.href}>
                      <img
                        src={Vaqff.imageSrc}
                        alt={Vaqff.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </a>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={Vaqff.href}>
                      <span className="absolute inset-0" />
                      {Vaqff.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {Vaqff.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ezgu Amal */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <button className="h-16 w-40 float-right bg-green-500 rounded-lg font-semibold">
              <a href="https://ezguamal.org/donate/">Yordam Beraman</a>
            </button>
            <h2 className="text-2xl font-bold text-green-900">
              Ezgu Amal Fondi
            </h2>
            <img className="ml-center-add " src={Amal} />

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {Ezgu.map((Ezgu) => (
                <div key={Ezgu.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <a href={Ezgu.href}>
                      <img
                        src={Ezgu.imageSrc}
                        alt={Ezgu.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </a>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={Ezgu.href}>
                      <span className="absolute inset-0" />
                      {Ezgu.name}
                    </a>
                  </h3>
                  <p className="text-base font-bold text-gray-900">
                    {Ezgu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <video className=" border-none w-full h-full" width="320" height="240"  controls>
          <source src={Vide} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <h1 className="w-56 h-28 bg-black font-semibold text-center text-lg text-white  rounded-md mt-4 mb-4 ml-24 md:ml-96 lg:ml-[700px] ">Делать добро легче, чем быть добрым.<br/> <br/>Ж.Вольфрам</h1>
      </div>
    </Layout>
  );
}
