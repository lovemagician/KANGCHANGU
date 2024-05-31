import "./Picture.css";
import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";

function Picture() {
  return (
    <>
      <Navbar />
      <div className="pictureWrapper">
        <div className="container">
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/KANGCHANGU.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/KANGCHANGU.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/KANGCHANGU.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/KANGCHANGU.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/KANGCHANGU.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/KANGCHANGU.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/KANGCHANGU.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/KANGCHANGU.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/KANGCHANGU.webp" alt="사진" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Picture;
