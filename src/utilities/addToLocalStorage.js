import { toast } from "react-toastify";

const notify = () => toast.success("App Installed Successfully ! ! !");
const alertNotify = () => toast.error("App Already Installed ! ! !");

function getInstallStoredApp() {
  const storedAppSTR = localStorage.getItem("appList");

  if (storedAppSTR) {
    const appStoredData = JSON.parse(storedAppSTR);
    return appStoredData;
  } else {
    return [];
  }
}

const addInstallToStoredDB = (id) => {
  const storedAppData = getInstallStoredApp();

  if (storedAppData.includes(id)) {
    alertNotify();
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("appList", data);
    notify();
  }
};

const removeInstallFromStoredDB = (id) => {
  const storedAppData = getInstallStoredApp();

  // Filter out the id to remove
  const updatedApps = storedAppData.filter((appId) => appId !== id);

  // Save back to localStorage
  localStorage.setItem("appList", JSON.stringify(updatedApps));
};

export { addInstallToStoredDB, getInstallStoredApp, removeInstallFromStoredDB };
