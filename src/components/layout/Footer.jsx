import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_wrapper">
          <p className="footer_name">KANG CHAN GU</p>
          <a className="footer_icon" href="https://www.youtube.com/@rkdcksrn" target="_blank">
            <img src="/images/YouTube_icon.svg" alt="youtube" />
          </a>
          <a className="footer_icon" href="https://soundcloud.com/rkdcksrn" target="_blank">
            <img src="/images/soundcloud_icon.svg" alt="soundcloud" />
          </a>
          <a className="footer_icon" href="https://www.instagram.com/rkdcksrn/" target="_blank">
            <img src="/images/Instagram_icon.webp" alt="instagram" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
