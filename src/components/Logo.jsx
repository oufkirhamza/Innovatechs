const SOURCES = {
  lockup: `${process.env.PUBLIC_URL}/brand/logo.png`,
  mark: `${process.env.PUBLIC_URL}/brand/logo-mark.png`,
};

const Logo = ({ variant = "mark", className = "", alt = "" }) => (
  <img src={SOURCES[variant]} alt={alt} draggable="false" className={className} />
);

export default Logo;
