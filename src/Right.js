import "./Right";

function Right() {
  return (
    <div className="container">
    <div className="right_side">
      <div className="about">
        <h2 className="title2">Profile</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quasi
          animi perferendis odit, at earum magnam, rem modi neque facilis vero?
          Harum adipisci voluptates ab numquam debitis, ad tenetur suscipit!
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
            <h4>Senior ux</h4>
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
          <div className="percent">
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
export default Right;
