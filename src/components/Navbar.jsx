function Navbar() {
  return (
    <>
        <div className="navbar-container">
          <div className="left-part">
            <div className="logo">
              <img src="../../public/vite.svg" alt="Brand Icon" />
            </div>

            <div className="company-name">3D SLAYERS</div>
          </div>

          <div className="right-part">
            <div className="username">SP-IN-DEMO</div>

            <div className="profile-icon">
              <img src="../../public/people_11402198.png" alt="" />
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
