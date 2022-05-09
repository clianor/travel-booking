import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faEllipsis, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="app-container flex justify-center items-center pb-10">
      <div className="circle" />
      <div className="absolute top-16 flex flex-col w-full items-center">
        <div className="flex items-center w-full">
          <div className="flex px-6">
            <div className="h-2 w-2 rounded-full mx-1 red" />
            <div className="h-2 w-2 rounded-full mx-1 yellow" />
            <div className="h-2 w-2 rounded-full mx-1 green" />
          </div>
          <div className="flex bg-white items-center w-5/12 px-6 py-4 rounded-md">
            <FontAwesomeIcon className="app-color-yellow text-xs" icon={faStar} />
            <span className="font-bold app-color-black ml-4 mr-auto text-xs">wizzair.com</span>
            <FontAwesomeIcon className="app-color-lavendar" icon={faEllipsis} />
          </div>
          <div className="flex app-bg-light-white rounded-md px-6 py-4 ml-3 mr-auto app-shadow">
            <FontAwesomeIcon className="app-color-dribbble mr-2" icon={faDribbble} />
            <span className="font-bold app-color-black text-xs">Dribbble</span>
          </div>
          <div className="flex bg-white px-6 py-4 mr-6 app-shadow rounded-md">
            <span className="font-bold app-color-black text-xs">Book now</span>
            <div className="w-px app-bg-light-white-2 mx-4" />
            <FontAwesomeIcon className="mr-2 app-color-black" icon={faUser} />
            <FontAwesomeIcon className="text-xs app-color-black" icon={faAngleDown} />
          </div>
        </div>
        <div className="flex flex-col text-center my-36">
          <span className="font-semibold text-4xl mb-4 app-title">Where would you like to go?</span>
          <span className="app-color-black font-semibold">
            Explore your travel opportunities with us!
          </span>
        </div>
        <div className="bg-white/50 w-10/12 px-6 pt-12 pb-16 app-shadow rounded-xl backdrop-blur-[200px]">
          <div className="flex pr-6">
            <span className="font-semibold text-sm app-color-gray w-14 mx-12">Flights</span>
            <span className="font-semibold text-sm app-color-gray w-14 mx-12">Hotels</span>
            <span className="font-semibold text-sm app-color-gray w-14 mx-12 mr-auto active">
              Cars
            </span>
            <label className="flex items-center cursor-pointer">
              <span className="font-semibold text-sm app-color-black mr-6">One way</span>
              <div className="switch">
                <input type="checkbox" className="switch-checkbox" />
                <div className="switch-bg" />
                <div className="switch-indicator" />
              </div>
            </label>
          </div>
          <div className="flex mt-16">
            <div className="bg-white/80 mx-6 flex flex-col w-1/3 p-6 rounded-xl border-2 border-white">
              <span className="font-semibold text-xs app-color-lavendar">Leaving from</span>
              <span className="font-semibold text-lg app-color-black">Georgia, Tbilisi</span>
            </div>
            <div className="bg-white/80 mx-6 flex flex-col w-1/3 p-6 rounded-xl border-2 border-white">
              <span className="font-semibold text-xs app-color-lavendar">Destination</span>
              <span className="font-semibold text-lg app-color-pink">France, Paris</span>
            </div>
            <div className="bg-white/80 mx-6 flex flex-col w-1/3 p-6 rounded-xl border-2 border-white">
              <span className="font-semibold text-xs app-color-lavendar">Passengers</span>
              <span className="font-semibold text-lg app-color-black">
                2 adults, 3 children, 1 pet
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
