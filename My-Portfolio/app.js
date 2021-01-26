const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;

  }

};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
<div style="height: 400px;" align=center id="Home">
  <img src="Images/137585722_1937338286415702_7614672190580954233_n.png" style='width: 200px;
  height: 300px;'/>
  <p style ="text-align:center;padding:10px">Front-end web developer</p>
  <p>My goal is to develop and design fast, responsive websites that clearly communicate with the visitors</p>
</div>
  <div style="height:100px" align="center" >
    <div>
      <i style="padding:10px" class="fa fa-envelope"></i>
    </div>
    <div>
      <a style="text-decoration:none;align:center;color: black; padding: 20px" href = "mailto: Callumroy@me.com">Callumroy@me.com</a>
    </div>
  </div>
<section id="github">
  <a href="https://github.com/CallumPat123" style="color:black;text-decoration:none"  class="">
        <div style="padding:5px"class="center" align="center">
            <img style="height:100px;padding:5px;width:100px"src="Images/GitHub-Mark.png"></img>
        </div>
        <div style="text-align: center;padding:5px" class="right" align="center">
          <h4 style="font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: 14px;line-height: 1.42857143 ">github.com/CallumPat123</h3>
        </div>
  </a>
</section>
`;
document.getElementById("github").setAttribute("style", "height:200px;border-top: 1px solid #244397; border-bottom:1px solid #244397; display: float;")
//document.getElementById("linkedin").setAttribute("style", "height:200px; border-bottom:1px solid #244397; display: float;")

};

// project State
const projectsState = function(page) {
  document.querySelector('#heading').textContent = '';
  document.querySelector('#content').innerHTML = `
  <div align="center">
    <p>I currently haven't completed any projects, except for this portfolio</p>
  </div>

`;
};

// education State
const educationState = function(page) {
  document.querySelector('#heading').textContent = "";
  document.querySelector('#content').innerHTML = `
  <section style="margin:0"id="hale" class="">
      <div style="padding:50px"class="center" align="left">
          <img style="width:400px" src="Images/HaleSchool.jpeg"></img>
      </div>
      <div style="text-align:left;" class="right" align="right">
        <h4 style="font-family:inheret;font-weight: 500;">Graduate Of High School</h1>
        <h3 style="font-family:inheret;font-weight: 500;">Hale School Wembley Downs</h1>
      </div>
    </section>
    <section id="uwa" class="">
      <div style="padding:50px"class="left" align="center">
          <img style="height:100px;padding:5px;width:250px"src="Images/uwa-logo.png"></img>
      </div>
      <div style="text-align: left;padding:50px" class="right" align="right">
        <h4 style="font-family:inheret;font-weight: 500;">Current Student</h3>
        <h3 style="font-family:inheret;font-weight: 500;">Bachelor Of Science</h1>
        <h4 style="font-family:inheret;font-weight: 500;">Computer Science Major</h3>
        
      </div>
    </section>
    <section id="udemy" class="">
      <div style="padding:50px"class="left" align="center">
          <img style="height:200px;padding:5px;width:250px"src="Images/Screen Shot 2021-01-25 at 5.40.38 pm.png"></img>
      </div>
      <div style="text-align: left;padding:50px" class="right" align="right">
        <h4 style="font-family:inheret;font-weight: 500;">Completed Udemy Course</h3>
      </div>
  </section>
    
    `
    document.getElementById("hale").setAttribute("style", "border-top:1px solid #244397; border-bottom:1px solid #244397;background-color: #c3d9f2; display:flex;flex-wrap: wrap;align-items: center;justify-content: space-around;min-height: 30vh;")
    document.getElementById("uwa").setAttribute("style", "border-bottom:1px solid #244397; display: flex; flex-wrap: wrap;align-items: center;justify-content: space-around;min-height: 30vh;")
    document.getElementById("udemy").setAttribute("style", "border-bottom:3px solid #244397; display: flex;flex-wrap: wrap; align-items: center; justify-content: space-around; min-height: 30vh;")
};

// skill State
const skillsState = function(page) {
  document.querySelector('#heading').textContent = '';
  document.querySelector('#content').innerHTML = `
  <div style="">
    <div class="d-flex flex-column">
      <div style=" padding:20px;text-align: center;class="p-2">
        <h3 style=" height:50px;border-bottom: 1px solid black;text-align:center">Web</h3>
        <img style="height:150px;padding:20px" src="Images/js.png"></img>
        <img style="height:150px;padding:5px" src="Images/html5.png"></img>
        <img style="height:150px;padding:5px" src="Images/css5.png"></img>
        <img style="height:150px ;padding:20px" src="Images/bootstrap.png"></img>
      </div>
      <div style="padding:20px; text-align: center;" class="p-2">
        <h3 style="height:50px;border-bottom: 1px solid black;text-align:center">Other Languages</h3>
        <img style="height:150px;padding:20px" src="Images/Java-Logo.png"></img>
        <img style="height:100px;padding:7px" src="Images/python.jpg"></img></div>
    </div>
  </div>

`;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('about'),
      projects = document.getElementById('projects'),
      skills = document.getElementById('skills');

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// Project
projects.addEventListener('click', (e) => {
  page.change(new projectsState);

  e.preventDefault();
});

// Skill
education.addEventListener('click', (e) => {
  page.change(new educationState);

  e.preventDefault();
});

// Skill
skills.addEventListener('click', (e) => {
  page.change(new skillsState);

  e.preventDefault();
});

