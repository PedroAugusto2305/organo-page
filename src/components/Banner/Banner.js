import "./Banner.css";

function Banner() {
  // JSX -> parece um HTML mas não é
  return (
    <header className="banner">
      <img
        src="/images/banner.png"
        alt="Banner principal da página do Organo"
      />
    </header>
  );
}

export default Banner;
