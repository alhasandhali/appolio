import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import CustomLoader from "../CustomLoader/CustomLoader";

const Root = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;

    if (navigation.state === "loading") {
      // Show loader immediately
      setShowLoader(true);
    } else if (navigation.state === "idle" && showLoader) {
      // Ensure loader stays at least 1 second
      timeout = setTimeout(() => setShowLoader(false), 100);
    }

    return () => clearTimeout(timeout);
  }, [navigation.state]);

  return (
    <div>
      <Navbar></Navbar>
      {showLoader ? <CustomLoader /> : <Outlet />}
      <Footer></Footer>
    </div>
  );
};

export default Root;
