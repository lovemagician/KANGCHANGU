import "./Home.css";
import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="main">
        <img className="mainImageBefore" src="/images/cover_before.webp" alt="메인 이미지" />
        <img className="mainImageAfter" src="/images/cover_after.webp" alt="메인 이미지" />
        <span></span>
      </div>
      <Footer />
    </>
  );
}

export default Home;
