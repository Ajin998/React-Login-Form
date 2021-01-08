import React from "react";
import styles from "./Home.module.scss";
function Home() {
  return (
    <div className={styles["main__div"]}>
      <h1>You are logged In </h1>
      <img
        src="https://thumbs.gfycat.com/MixedFrankAlaskankleekai-size_restricted.gif"
        alt="surprise_for_user"
      />
      <img className={styles["img__src"]}alt="login_image" />
    </div>
  );
}

export default Home;
