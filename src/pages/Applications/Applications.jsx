import React, { Suspense } from "react";
import Application from "../Application/Application";
import { Link } from "react-router";

const Apps = ({ data }) => {
  return (
    <div className="py-20">
      <div className="w-10/12 m-auto">
        <div className="mb-10 text-center">
          <h2 className="inter font-bold text-5xl text-[#001931] mb-4">
            Trending Apps
          </h2>
          <p className="inter font-normal text-xl text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <Suspense fallback="Loading........">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.isArray(data) ? (
              data
                .slice(0, 8)
                .map((app) => <Application key={app.id} app={app} />)
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </Suspense>
        <div className="flex justify-center mt-10">
          <Link
            to="/all-apps"
            className="btn inter font-semibold text-[16px] text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Apps;
