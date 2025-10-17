import React from "react";
import { Link } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const Application = ({ app }) => {
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

  return (
    <Link to={`/app-details/${app.id}`}>
      <div className="card bg-base-100 w-full h-full shadow-sm p-3">
        <figure className="flex justify-center">
          <img
            className="h-full sm:h-56 md:h-64 object-contain"
            src={app.image}
            alt="app_logo"
          />
        </figure>

        <div>
          <h2 className="my-3 sm:my-4 inter font-medium text-lg sm:text-xl text-[#001931] text-center sm:text-left">
            {app.title}
          </h2>

          <div className="card-actions flex flex-wrap justify-center sm:justify-between gap-2">
            <div className="badge flex items-center gap-1 bg-[#F1F5E8] inter font-medium text-sm sm:text-[16px] text-[#00D390]">
              <img className="h-4" src={downloadIcon} alt="download" />
              {formatNumber(app.downloads)}
            </div>

            <div className="badge flex items-center gap-1 bg-[#FFF0E1] inter font-medium text-sm sm:text-[16px] text-[#FF8811]">
              <img className="h-4" src={ratingIcon} alt="rating" />
              {app.ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Application;
