import Soundcloud from "@components/Soundcloud";
import Youtube from "@components/Youtube";
import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";

function Music() {
  return (
    <>
      <Navbar />
      <div>
        <Soundcloud />
        <Youtube />
      </div>
      <Footer />
    </>
  );
}

export default Music;
