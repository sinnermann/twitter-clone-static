import { SearchIcon } from "@heroicons/react/outline";
import News from "./News";
import { useState } from "react";

export default function Widgets({ newsResults, randomUserResults }) {
  const [articleNum, setArticleNum] = useState(3);
  const [randomUserNum, setRandomUserNum] = useState(3);
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">What's hapening?</h4>
        {newsResults.slice(0, articleNum).map((article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
          onClick={() => setArticleNum(articleNum + 3)}
        >
          Show More
        </button>
      </div>
      <div className="sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>

        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
          <img
            className="rounded-full"
            width={40}
            src="https://i.etsystatic.com/37277233/r/il/436a6a/4456605776/il_570xN.4456605776_oim0.jpg"
            alt="Image"
          />
          <div className="truncate ml-4 leading-5">
            <h4 className="font-bold hover:underline text-[14px] truncate">
              Bucky Barns
            </h4>
          </div>
          <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
            Follow
          </button>
        </div>
        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
          <img
            className="rounded-full"
            width={40}
            src="https://static.toiimg.com/thumb/msid-68370300,imgsize-79780,width-400,resizemode-4/68370300.jpg"
            alt="Image"
          />
          <div className="truncate ml-4 leading-5">
            <h4 className="font-bold hover:underline text-[14px] truncate">
              Captain Marvel
            </h4>
          </div>
          <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
            Follow
          </button>
        </div>
        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
          <img
            className="rounded-full"
            width={40}
            src="https://images6.fanpop.com/image/photos/44700000/Sam-Wilson-The-Falcon-and-the-Winter-Soldier-the-falcon-and-the-winter-soldier-44740940-300-300.jpg"
            alt="Image"
          />
          <div className="truncate ml-4 leading-5">
            <h4 className="font-bold hover:underline text-[14px] truncate">
              Sam Wilson
            </h4>
          </div>
          <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
            Follow
          </button>
        </div>
        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
          <img
            className="rounded-full"
            width={40}
            src="https://akns-images.eonline.com/eol_images/Entire_Site/20201114/rs_1200x1200-201214124949-1200-Chris_Pratt-Guardians_Of_The_Galaxy_-_2014.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top"
            alt="Image"
          />
          <div className="truncate ml-4 leading-5">
            <h4 className="font-bold hover:underline text-[14px] truncate">
              Star Lord
            </h4>
          </div>
          <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
