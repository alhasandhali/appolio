import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import Application from "../Application/Application";

const AllApps = () => {
  const data = useLoaderData();
  return (
    <div className="w-10/12 m-auto py-20">
      <div className="pb-10 text-center">
        <h1 className="inter text-5xl font-bold mb-4 text-[#001931]">
          Our All Applications
        </h1>
        <p className="inter text-xl font-normal text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="pb-3 text-center flex justify-between items-center">
        <p className="inter text-2xl font-semibold text-[#001931]">
          ({data.length}) Apps Found
        </p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <Suspense fallback="Loading........">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(data) ? (
            data.map((app) => <Application key={app.id} app={app} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default AllApps;
