import "./Music.css";
import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";

function Music() {
  return (
    <>
      <Navbar />
      <div className="musicWrapper">
        <div className="albumInfo">
          {/* <Soundcloud /> */}
          {/* <Youtube /> */}
          <p className="albumTitle">rkdcksrn</p>
          <p className="releaseDate">2022.12.20</p>
          <img className="albumCover" src="/images/rkdcksrn.webp" alt="앨범 커버" />
          <p className="trackList">
            [TRACK LIST]
            <br /> 01.수수께끼 <br />
            02.거꾸로 텔레파시 <br />
            03.약속 <br />
            04.바람과 꽃 <br />
            05.물길 따라 걷네 <br />
            06.나의 집 <br />
            07.노을 <br />
            08.Swim <br />
            09.기다림 <br />
            10.내게 남은 것 <br />
            11.텅 빈 아파트 <br />
            12.허들
          </p>
          <p className="credits">
            [CREDITS]
            <br /> Produced, Written, Performed, Mixed, Artwork and Design by 강찬구
            <br /> -Drums 이예찬 (01,09)
            <br /> Mastered by 강승희 at SONIC KOREA MASTERING
          </p>
          <iframe
            className="youtube"
            width="360"
            height="360"
            src="https://www.youtube.com/embed/-5sk9LC2eQE?si=FDnqXyJZKtZ-uwH2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="albumInfo">
          {/* <Soundcloud /> */}
          {/* <Youtube /> */}
          <p className="albumTitle">연인</p>
          <p className="releaseDate">2021.04.15</p>
          <img className="albumCover" src="/images/couple.webp" alt="앨범 커버" />
          <p className="trackList">
            [TRACK LIST]
            <br /> 01.연인
          </p>
          <p className="credits">
            [CREDITS] <br />
            Produced by 녹음실 타디스 <br />
            Co-produced by 고재현, 이기학 <br />
            Performed by <br />
            Bass 이기학 <br />
            Drums 이예찬 <br />
            Guitars 강찬구 <br />
            Vocal 강찬구 <br />
            All Recorded by 류호건 at Studio Tardis <br />
            Mixed by 류호건 at Studio Tardis <br />
            Mastered by 류호건 at Studio Tardis <br />
            Album Artwork by 알베르 키위
          </p>
          <iframe
            width="360"
            height="360"
            src="https://www.youtube.com/embed/4lk5gxdGHGA?si=BTrldZH1g2RW9epB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="albumInfo">
          {/* <Soundcloud /> */}
          {/* <Youtube /> */}
          <p className="albumTitle">가끔 들리는 것</p>
          <p className="releaseDate">2021.02.16</p>
          <img className="albumCover" src="/images/thingthatihearsometimes.webp" alt="앨범 커버" />
          <p className="trackList">
            [TRACK LIST]
            <br /> 01.가끔 들리는 것 (Feat. 김일두)
            <br /> 02.가끔 들리는 것 (Inst.)
          </p>
          <p className="credits">
            [CREDITS]
            <br />
            Produced by 녹음실 타디스 <br />
            Co-produced by 고재현, 이기학 <br />
            Performed by <br />
            Bass 이기학 <br />
            Guitars 강찬구 <br />
            Vocal 강찬구 <br />
            Featuring 김일두 <br />
            All Recorded by 류호건 at Studio Tardis <br />
            Mixed by 류호건 at Studio Tardis <br />
            Mastered by 류호건 at Studio Tardis <br />
            통기타 빌려주신 분 최종민 <br />
            Album Artwork by 강찬구
          </p>
          <iframe
            width="360"
            height="360"
            src="https://www.youtube.com/embed/XHybaJXXRLw?si=cBucSUUbtWVFwLlK"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="360"
            height="360"
            src="https://www.youtube.com/embed/4Fw4wJ0iZEs?si=Bim33evO-vG2e_VQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="albumInfo">
          {/* <Soundcloud /> */}
          {/* <Youtube /> */}
          <p className="albumTitle">똑같은 건 지겨워</p>
          <p className="releaseDate">2020.12.15</p>
          <img className="albumCover" src="/images/imtiredofthesamedays.webp" alt="앨범 커버" />
          <p className="trackList">
            [TRACK LIST]
            <br /> 01.똑같은 건 지겨워
          </p>
          <p className="credits">
            Produced by 녹음실 타디스 <br />
            Co-produced by 고재현, 이기학 <br />
            Vocal Director 라태형 <br />
            Performed by <br />
            Bass 이기학 <br />
            Drums 이예찬 <br />
            Guitars 강찬구 <br />
            Vocal 강찬구 <br />
            All Recorded by 류호건 at Studio Tardis <br />
            Mixed by 류호건 at Studio Tardis <br />
            Mastered by 류호건 at Studio Tardis <br />
            Album Artwork by 강찬구
          </p>
          <iframe
            width="360"
            height="360"
            src="https://www.youtube.com/embed/Bar33MLq2dY?si=LU2UWbLajGavr-CI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="albumInfo">
          {/* <Soundcloud /> */}
          {/* <Youtube /> */}
          <p className="albumTitle">아는 사람</p>
          <p className="releaseDate">2020.10.20</p>
          <img className="albumCover" src="/images/someone.webp" alt="앨범 커버" />
          <p className="trackList">
            [TRACK LIST]
            <br /> 01.아는 사람
            <br /> 01.아..
          </p>
          <p className="credits">
            [CREDITS]
            <br />
            Produced by 녹음실 타디스 <br />
            Co-produced by 강찬구, 이기학 <br />
            Performed by <br />
            Bass 이기학 <br />
            Drums 이예찬 <br />
            Guitar 강찬구 <br />
            Vocal 강찬구 <br />
            Synth 강찬구 <br />
            All Recorded by 류호건 at Studio Tardis <br />
            Mixed by 류호건 at Studio Tardis <br />
            Mastered by 류호건 at Studio Tardis <br />
            Album Artwork by 강찬구
          </p>
          <iframe
            width="360"
            height="360"
            src="https://www.youtube.com/embed/7avjR-C-u40?si=95kNCO2FV7vcvKM9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="360"
            height="360"
            src="https://www.youtube.com/embed/H4Px0T72s_s?si=Tz7Mx8BrUM1qjn6R"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="albumInfo">
          {/* <Soundcloud /> */}
          {/* <Youtube /> */}
          <p className="albumTitle">내 얼굴</p>
          <p className="releaseDate">2020.07.21</p>
          <img className="albumCover" src="/images/myface.webp" alt="앨범 커버" />
          <p className="trackList">
            [TRACK LIST]
            <br /> 01.내 얼굴
          </p>
          <p className="credits">
            [CREDIT]
            <br /> Produced by 녹음실 타디스
            <br /> Co-produced by 강찬구, 고재현, 이기학 <br />
            Performed by
            <br /> Bass 이기학 <br />
            Drums 이예찬
            <br /> Guitar 강찬구 <br />
            Vocal 강찬구 <br />
            Synth 강찬구, 고재현 <br />
            Percussion 고재현 <br />
            All Recorded by 류호건 at Studio Tardis <br />
            Mixed by 류호건, 고재현 at Studio Tardis <br />
            Mastered by 류호건 at Studio Tardis <br />
            Album Artwork by 김형원
          </p>
          <iframe
            width="360"
            height="360"
            src="https://www.youtube.com/embed/tedM3IHYJIo?si=S-sawTRjlOvpUOuL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Music;
