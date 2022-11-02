import "./App.css";
import avatar from "./img/avt.jpg";
import star from "./img/blank-square.png";
import ScrollIntoView from "react-scroll-into-view";

function App() {
  return (
    <div class="main">
      <nav>
        <div class="menu">
          <ul>
            <li>
              <ScrollIntoView selector={"#profile"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Profile
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#experience"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Experiences
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#ability"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Abilities
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#project"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Projects
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#contact"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Contact
                </button>
              </ScrollIntoView>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="content-1" id="profile">
      <h1>Profile</h1>
      <h2>I'm a student</h2>
        </div>
        <hr />
        <div class="content-2">
          <div class="content-2-left">
            <h2 class="">About me</h2>
            <p>
              I am a lovely cat. I have passion in IT and I want to become data
              analyst.
            </p>
          </div>
          <div class="content-2-center">
            <img src={avatar} />
          </div>
          <div class="content-2-right">
            <h2 class="">Details</h2>
            <b>Name:</b>
            <div>Trương Minh Khiết</div>
            <b>Age:</b>
            <div>21 years</div>
            <b>Location:</b>
            <div>UIT, VNU-HCM</div>
          </div>
        </div>
        <div class="content-3" id="experience">
          <h1 class="title">Experiences</h1>
          <hr />
          <div class="content-3-top">
            <div class="content-3-left">
              <h3>Education</h3>
              <b>UIT, VNU-HCM</b>
              <div>Apr 2019 - June 2024</div>
            </div>
            <div class="content-3-right">
              <b>Information System</b>
              <p>
                The education was mainly System design-basec course, but I also
                learned about Web, Data analysis and more. During my time
                college, I specialized in OOP, data science. Now, I'm learning
                web development
              </p>
            </div>
          </div>
          <hr />
          <div class="content-3-bottom">
            <div class="content-3-bottom-left">
              <h3>Working experiences</h3>
              <b>Facebook | Fresher Engineer</b>
              <div>Sep 2020 - Sep 2021</div>
            </div>
            <div class="content-3-bottom-right">
              <b>Partime - Fresher Web Developer</b>
              <p>Development product about Web application</p>
            </div>
            <div class="content-3-bottom-right">
              <b>Freelancer</b>
              <p>Working as a Fresher Developer on a dating function on Facebook page. Dating function is an app as Tinder</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="content-4" id="ability">
          <h1 class="title">Abilities</h1>
          <hr />
          <h2>Skills</h2>
          <div class="content-4-top">
            <div class="content-4-top-left">
              <div>HTML/CSS</div>
              <div>SQL</div>
              <div>JQuery</div>
              <div>Javascript</div>
            </div>
            <div class="content-4-top-center">
              <div class="content-4-top-center-1">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
              </div>
              <div class="content-4-top-center-2">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
              </div>
              <div class="content-4-top-center-3">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
              </div>
              <div class="content-4-top-center-4">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
              </div>
            </div>
            <div class="content-4-top-right">
              <div>Object Oriented Programming</div>
              <div>SEO</div>
              <div>React</div>
            </div>
            <div class="content-4-top-center">
              <div class="content-4-top-center-1">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
              </div>
              <div class="content-4-top-center-2">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
              </div>
              <div class="content-4-top-center-3">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
          <div class="link-github" id="project">
            <div>
              <i>See my profile on github</i>
            </div>
            <button>
              <a href="https://github.com/khietdeptrai">See project on Github</a>
            </button>
          </div>
          <hr />
          <h2>Languages</h2>
          <div class="content-4-bottom">
            <div class="content-4-bottom-left">
              <div>Vietnamese (Native)</div>
              <div>English (IELTS 6.5)</div>
              <div>Cat (Mother Tongue)</div>
            </div>
            <div class="content-4-bottom-center">
              <div class="content-4-top-center-1">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
              </div>
              <div class="content-4-top-center-2">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
              </div>
            </div>
            <div class="content-4-bottom-right">
              <div>Japanese</div>
              <div>French</div>
            </div>
            <div class="content-4-bottom-center">
              <div class="content-4-top-center-1">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
              </div>
              <div class="content-4-top-center-2">
              <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
