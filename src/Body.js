import "./body.css";

function body() {
  return (
    <div className="container">
      <div className="left_side">
        <div className="profileText">
          <div className="imgBx">
            <img src=".img/I_d_photo-removebg-preview.png" alt="profileimg" />
          </div>
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
      <div className="right_side">
        <div className="about">
          <h2 className="title2">Profile</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            quasi animi perferendis odit, at earum magnam, rem modi neque
            facilis vero? Harum adipisci voluptates ab numquam debitis, ad
            tenetur suscipit!
          </p>
        </div>
        <div className="about">
          <h2 className="title2">Experience</h2>
          <div className="box">
            <div className="year_company">
              <h5>2022-2022</h5>
              <h5>company name</h5>
            </div>
            <div className="text">
              <h4>Designer</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium ullam, dolorem sequi, beatae aliquam, cumque sit ut
                veritatis fuga laudantium aliquid quae explicabo amet debitis
                laborum. Tempore sunt molestiae vero.
              </p>
            </div>
          </div>
        </div>
        <div className="about skills">
          <h2 className="title2">Professional Skills</h2>
          <div className="box">
            <h4>Html</h4>
            <div className="percent">
              <div></div>
            </div>
          </div>
          <div className="box">
            <h4>JAVAScript</h4>
            <div className="percent">
              <div></div>
            </div>
          </div>
          <div className="box">
            <h4>JAVA</h4>
            <div className="percent style1">
              <div></div>
            </div>
          </div>
          <div className="box">
            <h4>React js</h4>
            <div className="percent">
              <div></div>
            </div>
          </div>
          <div className="box">
            <h4>C/C++</h4>
            <div className="percent">
              <div></div>
            </div>
          </div>
        </div>

        <div className="about interest">
          <h2 className="title2">Interest</h2>
          <ul>
            <li>Gaming</li>
            <li>Reading</li>
            <li>Drawing</li>
            <li>Trekking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default body;
