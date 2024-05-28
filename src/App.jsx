import Soundcloud from "@pages/Soundcloud";
import Youtube from "@pages/Youtube";

function App() {
  return (
    <>
      <header>
        <div>HOME</div>
        <div>SOUNDCLOUD</div>
        <div>YOUTUBE</div>
        <div>그림</div>
        <div>사진</div>
      </header>
      <Soundcloud />
      <Youtube />
      <footer>c 강찬구</footer>
    </>
  );
}

export default App;
