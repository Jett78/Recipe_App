import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Settings = () => {
  const [theme, setThem] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeTheme = () => {
    if (theme === "dark-theme") {
      setThem("light-theme");
    } else {
      setThem("dark-theme");
    }
  };
  return (
    <main>
      <div className="container">

        <button onClick={() => changeTheme()}>Change Theme</button>
      </div>
      <Footer />
    </main>
  );
};

export default Settings;
