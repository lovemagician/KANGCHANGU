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
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/photo_lake.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/photo_kancho.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/photo_sunny.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/drawing_universe.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/photo_moonlight.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/drawing_turtle.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/drawing_city.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/drawing_swimmingpool.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/drawing_hurdle.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/drawing_paperboat.webp" alt="사진" />
          </div>
          <div>
            <img onClick={(e) => window.open(e.target.src)} width="100%" src="/images/drawing_hill.webp" alt="사진" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Picture;
