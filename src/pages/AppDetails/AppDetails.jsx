import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData, useParams } from "react-router";
import AppNotFoundPage from "../AppNotFoundPage/AppNotFoundPage";
import {
  addInstallToStoredDB,
  getInstallStoredApp,
} from "../../utilities/addToLocalStorage";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";

const AppDetails = () => {
  const formatNumber = (num) => {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const item = data.find((app) => app.id === appId);

  const ratingsData = [...item.ratings].reverse();

  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    setInstalledApps(getInstallStoredApp());
  }, []);

  const handleInstallApp = (id) => {
    addInstallToStoredDB(id);
    setInstalledApps(getInstallStoredApp());
  };

  const isInstalled = installedApps.includes(item.id);

  if (!item) return <AppNotFoundPage></AppNotFoundPage>;

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-10 md:py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center pb-10 mb-10 border-b-2 border-[#00193130]">
        <img
          src={item.image}
          alt={item.title}
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-lg"
        />
        <div className="flex-1 text-center md:text-left">
          <div className="pb-5 mb-5 border-b-2 border-[#00193130]">
            <h1 className="inter font-bold text-2xl sm:text-3xl text-[#001931]">
              {item.title}
            </h1>
            <h3 className="inter font-normal text-lg sm:text-xl text-[#001931]">
              Developed by{" "}
              <span className="font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {item.companyName}
              </span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 mb-7">
            <div className="flex flex-col items-center md:items-start">
              <img src={downloadIcon} alt="downloads" className="w-6 h-6" />
              <p className="inter font-normal text-[16px] text-[#001931] my-2">
                Downloads
              </p>
              <h2 className="inter font-extrabold text-[32px] sm:text-[40px] text-[#001931] leading-[1]">
                {formatNumber(item.downloads)}
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img src={ratingIcon} alt="ratings" className="w-6 h-6" />
              <p className="inter font-normal text-[16px] text-[#001931] my-2">
                Average Ratings
              </p>
              <h2 className="inter font-extrabold text-[32px] sm:text-[40px] text-[#001931] leading-[1]">
                {item.ratingAvg}
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img src={reviewIcon} alt="reviews" className="w-6 h-6" />
              <p className="inter font-normal text-[16px] text-[#001931] my-2">
                Total Reviews
              </p>
              <h2 className="inter font-extrabold text-[32px] sm:text-[40px] text-[#001931] leading-[1]">
                {formatNumber(item.reviews)}
              </h2>
            </div>
          </div>
          <button
            onClick={() => handleInstallApp(item.id)}
            className="btn inter font-semibold text-[16px] text-white bg-[#00D390] px-6 py-3 rounded-md"
          >
            {isInstalled ? "Installed" : `Install Now (${item.size} MB)`}
          </button>
        </div>
      </div>
      <div className="pb-10 mb-10 border-b-2 border-[#00193130]">
        <h3 className="inter font-semibold text-2xl text-[#001931] mb-3">
          Rating
        </h3>
        <div className="w-full h-80 sm:h-[354px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratingsData} layout="vertical">
              <XAxis type="number" dataKey="count" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="count" fill="#FF8811" barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="inter font-semibold text-2xl text-[#001931] mb-4 sm:mb-6">
          Description
        </h3>
        <p className="inter font-normal text-base sm:text-lg md:text-xl text-[#627382] text-justify leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
