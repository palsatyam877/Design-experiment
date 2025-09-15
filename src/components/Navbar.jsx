function Navbar() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <>
        <div className="navbar-container">
          <div className="left-part">
            <div className="logo">
              <img src={`..${basePath}/vite.svg`} alt="Brand Icon" />
            </div>

            <div className="company-name">3D SLAYERS</div>
          </div>

          <div className="right-part">
            <div className="username">SP-IN-DEMO</div>

            <div className="profile-icon">
              <img src={`..${basePath}/people_11402198.png`} alt="" />
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
