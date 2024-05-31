import "./Home.css";
import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const content = "안녕하세요? 방문해 주셔서 감사합니다.";
    const text = document.querySelector(".hello");
    let index = 0;

    function typing() {
      if (text) {
        text.textContent += content[index++];
        if (index >= content.length) {
          clearInterval(intervalId);
        }
      }
    }

    const intervalId = setInterval(typing, 150);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main_wrapper">
          <img className="mainImageBefore" src="/images/cover_before.webp" alt="메인 이미지" />
          <img className="mainImageAfter" src="/images/cover_after.webp" alt="메인 이미지" />
          <p className="hello"></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
