import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <img style={{ width: "100px" }} src="/images/KANGCHANGU.jpg" alt="강찬구" />
        <span>안녕하세요!</span>
      </div>
      <Footer />
    </>
  );
}

export default Home;
