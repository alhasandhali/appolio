import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import {
  getInstallStoredApp,
  removeInstallFromStoredDB,
} from "../../utilities/addToLocalStorage";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const InstalledApps = () => {
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

  const [appList, setAppList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getInstallStoredApp();
    const convertedStoredAppData = storedAppData.map((id) => parseInt(id));
    const myAppList = data.filter((app) =>
      convertedStoredAppData.includes(app.id)
    );
    setAppList(myAppList);
  }, []);

  const handleUninstallApp = (id) => {
    removeInstallFromStoredDB(id);
    setAppList((prevList) => prevList.filter((app) => app.id !== id));
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-10 md:py-20">
      {/* Header */}
      <div className="pb-10 text-center">
        <h1 className="inter text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="inter text-base sm:text-lg md:text-xl font-normal text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top Controls */}
      <div className="pb-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="inter text-xl sm:text-2xl font-semibold text-[#001931] text-center md:text-left">
          ({appList.length}) Apps Found
        </p>
        <div className="dropdown dropdown-end md:dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn text-[14px] sm:text-[16px] py-2 px-4"
          >
            Sort By Size ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 sm:w-52 p-2 shadow"
          >
            <li>
              <a>Descending</a>
            </li>
            <li>
              <a>Ascending</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6">
        {appList.map((app) => (
          <div
            key={app.id}
            className="card flex flex-col sm:flex-row bg-base-100 shadow-sm rounded-2xl overflow-hidden p-4 sm:p-5 md:p-6 items-center"
          >
            <figure className="flex-shrink-0 mb-4 sm:mb-0 flex justify-center sm:justify-start md:mr-4 ">
              <img
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 object-contain"
                src={app.image}
                alt={app.title}
              />
            </figure>
            <div className="flex-1 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
              <div className="text-center sm:text-left">
                <Link to={`/app-details/${app.id}`}>
                  <h2 className="inter font-medium text-lg sm:text-xl text-[#001931] mb-2">
                    {app.title}
                  </h2>
                </Link>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 it">
                  <div className="badge inter font-medium text-sm sm:text-base text-[#00D390] flex items-center gap-1">
                    <img className="h-4" src={downloadIcon} alt="download" />
                    {formatNumber(app.downloads)}
                  </div>
                  <div className="badge inter font-medium text-sm sm:text-base text-[#FF8811] flex items-center gap-1">
                    <img className="h-4" src={ratingIcon} alt="rating" />
                    {app.ratingAvg}
                  </div>
                  <div className="badge inter font-medium text-sm sm:text-base text-[#627382]">
                    {app.size} MB
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstallApp(app.id)}
                className="btn inter font-semibold text-[14px] sm:text-[16px] text-white bg-[#00D390] px-5 py-2 sm:px-6 sm:py-3 rounded-md"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
