import "./Left";

function Left() {
  return (
    <div className="container">
      <div className="left_side">
        <div className="profileText">
          <div className="imgBx"></div>
          <h2>
            Saurabh Mohite <br />
            <span>Full Stack Dveloper</span>
          </h2>
        </div>
        <div className="contactInfo">
          <h3 className="title">Contact Info</h3>
          <ul>
            <li>
              <span className="icon"></span>
              <span className="text">8668501205</span>
            </li>
            <li>
              <span className="icon"></span>
              <span className="text">saurabhmohite2214@gmail.com</span>
            </li>
            <li>
              <span className="icon"></span>
              <span className="text">Linkedin</span>
            </li>
            <li>
              <span className="icon"></span>
              <span className="text">github</span>
            </li>
            <li>
              <span className="icon"></span>
              <span className="text">Pune,Maharashtra,India</span>
            </li>
          </ul>
        </div>

        <div className="contactInfo education">
          <h3 className="title">Education</h3>
          <ul>
            <li>
              <h5>2016-2018</h5>
              <h4>Bachlero degree in mechanical enginnering</h4>
              <h4>Pune usniversity</h4>
            </li>
            <li>
              <h5>2016-2018</h5>
              <h4>Bachlero degree in mechanical enginnering</h4>
              <h4>Pune usniversity</h4>
            </li>
            <li>
              <h5>2016-2018</h5>
              <h4>Bachlero degree in mechanical enginnering</h4>
              <h4>Pune usniversity</h4>
            </li>
          </ul>
        </div>
        <div className="contactInfo languag">
          <h3 className="title">Languages</h3>
          <ul>
            <li>
              <span className="text">English</span>
              <span className="percent">
                <div></div>
              </span>
            </li>
            <li>
              <span className="text">Marathi</span>
              <span className="percent">
                <div></div>{" "}
              </span>
            </li>
            <li>
              <span className="text">Hindi</span>
              <span className="percent">
                <div></div>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Left;
