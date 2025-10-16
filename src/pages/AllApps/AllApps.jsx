import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import Application from "../Application/Application";

const AllApps = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredApps);
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
      <div className="pb-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="inter text-2xl font-semibold text-[#001931] text-center md:text-left">
          ({filteredApps.length}) Apps Found
        </p>
        <label className="input input-bordered flex items-center gap-2 w-full md:w-1/3">
          <svg
            className="h-[1.2em] opacity-60"
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
          <input
            type="search"
            placeholder="Search applications..."
            className="grow text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      <Suspense fallback="Loading........">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => <Application key={app.id} app={app} />)
          ) : (
            <p className="col-span-full text-center text-gray-500 text-2xl py-10">
              No applications found.
            </p>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default AllApps;
