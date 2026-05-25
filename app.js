document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("div");
  header.className = "header";

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.textContent = "Ravi ";

  const logoSpan = document.createElement("span");
  logoSpan.textContent = "Sharma";
  logo.appendChild(logoSpan);

  header.appendChild(logo);

  const menu = document.createElement("div");
  menu.className = "menu";

  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Education", href: "#education" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  navLinks.forEach((linkData) => {
    const navLink = document.createElement("a");
    navLink.href = linkData.href;
    navLink.textContent = linkData.text;
    menu.appendChild(navLink);
  });

  header.appendChild(menu);

  const contactBtnContainer = document.createElement("div");
  contactBtnContainer.className = "contact-btn";

  const contactAnchor = document.createElement("a");
  contactAnchor.href = "#contact";
  contactAnchor.textContent = "Contact Me";

  contactBtnContainer.appendChild(contactAnchor);
  header.appendChild(contactBtnContainer);

  document.body.prepend(header);
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. Create the main Home Section Container
  const homeSection = document.createElement("div");
  homeSection.className = "home";
  homeSection.id = "home";

  const homeImgContainer = document.createElement("div");
  homeImgContainer.className = "home-img";

  const profileImg = document.createElement("img");
  profileImg.src = "./images/ owner.jpg";
  profileImg.alt = "Profile Picture";

  homeImgContainer.appendChild(profileImg);
  homeSection.appendChild(homeImgContainer);

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "home-content-wrapper";

  const homeInfo = document.createElement("div");
  homeInfo.className = "home-info";

  const titleHeading = document.createElement("h2");
  titleHeading.textContent = "Namaste";

  const descriptionPara = document.createElement("p");
  // Construct the paragraph text along with the highlighted <span> segment
  descriptionPara.innerHTML = `Hello! <span> I'm Ravi Sharma</span>, a passionate web developer with a knack for creating dynamic and responsive websites. With a strong foundation in HTML, CSS, and JavaScript, I enjoy bringing ideas to life through code.`;

  homeInfo.appendChild(titleHeading);
  homeInfo.appendChild(descriptionPara);
  contentWrapper.appendChild(homeInfo);

  const socialLinksContainer = document.createElement("div");
  socialLinksContainer.className = "social-links";

  const socialMediaData = [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/ravisharma",
      iconClass: "ri-linkedin-fill",
    },
    {
      name: "github",
      href: "https://github.com/ravisharma",
      iconClass: "ri-github-fill",
    },
    {
      name: "twitter",
      href: "https://twitter.com/ravisharma",
      iconClass: "ri-twitter-fill",
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/ravisharma",
      iconClass: "ri-facebook-fill",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/ravisharma",
      iconClass: "ri-instagram-fill",
    },
  ];

  socialMediaData.forEach((platform) => {
    const socialAnchor = document.createElement("a");
    socialAnchor.href = platform.href;
    socialAnchor.className = "social";
    socialAnchor.target = "_blank";

    const iconElement = document.createElement("i");
    iconElement.className = platform.iconClass;

    socialAnchor.appendChild(iconElement);
    socialLinksContainer.appendChild(socialAnchor);
  });

  contentWrapper.appendChild(socialLinksContainer);

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "home-buttons";

  const contactBtn = document.createElement("a");
  contactBtn.href = "#contact";
  contactBtn.className = "btn";
  contactBtn.textContent = "Get in Touch";

  const resumeBtn = document.createElement("a");
  resumeBtn.href = "./Ravi-Sharma-Resume.pdf";
  resumeBtn.className = "btn";
  resumeBtn.setAttribute("download", "");
  resumeBtn.textContent = "Download Resume";

  buttonsContainer.appendChild(contactBtn);
  buttonsContainer.appendChild(resumeBtn);
  contentWrapper.appendChild(buttonsContainer);

  homeSection.appendChild(contentWrapper);

  document.body.appendChild(homeSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.createElement("div");
  aboutSection.className = "about";
  aboutSection.id = "about";

  const aboutImgContainer = document.createElement("div");
  aboutImgContainer.className = "about-img";

  const profileImg = document.createElement("img");
  profileImg.src = "./images/ owner.jpg";
  profileImg.alt = "Profile Picture";

  aboutImgContainer.appendChild(profileImg);
  aboutSection.appendChild(aboutImgContainer);

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "about-content-wrapper";

  const aboutInfo = document.createElement("div");
  aboutInfo.className = "about-info";

  const sectionHeading = document.createElement("h2");
  sectionHeading.textContent = "About Me";
  aboutInfo.appendChild(sectionHeading);

  const para1 = document.createElement("p");
  para1.textContent = `I am a dedicated web developer with a passion for creating engaging and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I have experience in building responsive and dynamic web applications.`;
  aboutInfo.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent = `In addition to my technical skills, I am a great team player and enjoy collaborating with others to achieve common goals. I am committed to delivering high-quality work and continuously improving my skills.`;
  aboutInfo.appendChild(para2);

  contentWrapper.appendChild(aboutInfo);

  const readMoreBtn = document.createElement("a");
  readMoreBtn.href = "#";

  readMoreBtn.className = "btn read-more";
  readMoreBtn.textContent = "Read More";

  contentWrapper.appendChild(readMoreBtn);

  aboutSection.appendChild(contentWrapper);

  document.body.appendChild(aboutSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const eduSection = document.createElement("div");
  eduSection.className = "education";
  eduSection.id = "education";

  const sectionHeading = document.createElement("h2");
  sectionHeading.textContent = "Education & Scores";
  eduSection.appendChild(sectionHeading);

  const eduContainer = document.createElement("div");
  eduContainer.className = "education-container";

  const educationData = [
    {
      iconClass: "ri-git-repository-line",
      title: "High School (Class X)",
      institution: "MAHATMA GANDHI INTER COLLEGE / UP Board",
      year: "Year of Passing: 2020",
      score: "Score: 82%",
    },
    {
      iconClass: "ri-book-open-line",
      title: "Intermediate (Class XII)",
      institution: "MAHATMA GANDHI INTER COLLEGE / UP Board",
      year: "Year of Passing: 2022",
      score: "Score: 74%",
    },
    {
      iconClass: "ri-graduation-cap-fill",
      title: "Graduation / B.Tech",
      institution:
        "KIPM College of Engineering & Technology / Affiliated to AKTU",
      year: "Current Aggregate",
      score: "CGPA: 8.2 / 10",
    },
  ];

  educationData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "education-card";

    const iconWrapper = document.createElement("div");
    iconWrapper.className = "edu-icon";
    const icon = document.createElement("i");
    icon.className = item.iconClass;
    iconWrapper.appendChild(icon);

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = item.title;

    const institutionPara = document.createElement("p");
    institutionPara.className = "edu-institution";
    institutionPara.textContent = item.institution;

    const yearPara = document.createElement("p");
    yearPara.className = "edu-year";
    yearPara.textContent = item.year;

    const scoreBadge = document.createElement("div");
    scoreBadge.className = "score-badge";
    scoreBadge.textContent = item.score;

    card.appendChild(iconWrapper);
    card.appendChild(cardTitle);
    card.appendChild(institutionPara);
    card.appendChild(yearPara);
    card.appendChild(scoreBadge);

    eduContainer.appendChild(card);
  });

  eduSection.appendChild(eduContainer);

  document.body.appendChild(eduSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.createElement("div");
  skillsSection.className = "skills";
  skillsSection.id = "skills";

  const sectionHeading = document.createElement("h2");
  sectionHeading.textContent = "Skills";
  skillsSection.appendChild(sectionHeading);

  const skillsContainer = document.createElement("div");
  skillsContainer.className = "skills-container";

  const skillsData = [
    { name: "HTML5", iconClass: "ri-html5-fill" },
    { name: "CSS3", iconClass: "ri-css3-fill" },
    { name: "JavaScript", iconClass: "ri-javascript-fill" },
    { name: "Tailwind CSS", iconClass: "ri-tailwind-css-line" },
    { name: "React", iconClass: "ri-reactjs-fill" },
    { name: "Node.js", iconClass: "ri-nodejs-fill" },
    { name: "Express.js", iconClass: "ri-expressjs-fill" },
    { name: "Python", iconClass: "ri-python-fill" },
    { name: "Java", iconClass: "ri-java-fill" },
    { name: "MongoDB", iconClass: "ri-database-2-fill" },
    { name: "MySQL", iconClass: "ri-database-fill" },
    { name: "Github", iconClass: "ri-github-fill" },
  ];

  skillsData.forEach((skillItem) => {
    const skillCard = document.createElement("div");
    skillCard.className = "skill";

    const iconElement = document.createElement("i");
    iconElement.className = skillItem.iconClass;

    const skillHeading = document.createElement("h3");
    skillHeading.textContent = skillItem.name;

    skillCard.appendChild(iconElement);
    skillCard.appendChild(skillHeading);

    skillsContainer.appendChild(skillCard);
  });

  skillsSection.appendChild(skillsContainer);

  document.body.appendChild(skillsSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.createElement("div");
  projectsSection.className = "projects";
  projectsSection.id = "projects";

  const sectionHeading = document.createElement("h2");
  sectionHeading.textContent = "Projects";
  projectsSection.appendChild(sectionHeading);

  const projectContainer = document.createElement("div");
  projectContainer.className = "project-container";

  const projectsData = [
    {
      title: "Project One",
      imgSrc: "./images/ portfolio.png",
      description:
        "A responsive portfolio website built with HTML, CSS, and JavaScript.",
      link: "#",
    },
    {
      title: "Project Two",
      imgSrc: "./images/ todo.png",
      description: "A dynamic to-do list application using React and Node.js.",
      link: "#",
    },
    {
      title: "Project Three",
      imgSrc: "./images/ weather.png",
      description:
        "A weather forecasting app utilizing API integration and JavaScript.",
      link: "#",
    },
  ];

  projectsData.forEach((projectItem) => {
    const card = document.createElement("div");
    card.className = "project";

    const img = document.createElement("img");
    img.src = projectItem.imgSrc;
    img.alt = projectItem.title;

    const heading = document.createElement("h3");
    heading.textContent = projectItem.title;

    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = projectItem.description;

    const projectBtn = document.createElement("a");
    projectBtn.href = projectItem.link;
    projectBtn.className = "btn";
    projectBtn.textContent = "View Project";

    card.appendChild(img);
    card.appendChild(heading);
    card.appendChild(descriptionPara);
    card.appendChild(projectBtn);

    projectContainer.appendChild(card);
  });

  projectsSection.appendChild(projectContainer);

  document.body.appendChild(projectsSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.createElement("div");
  contactSection.className = "contact";
  contactSection.id = "contact";

  const sectionHeading = document.createElement("h2");
  sectionHeading.textContent = "Contact Me";
  contactSection.appendChild(sectionHeading);

  const contactForm = document.createElement("form");
  contactForm.action = "#";
  contactForm.method = "post";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Your Name";
  nameInput.required = true; // Adds validation handling
  contactForm.appendChild(nameInput);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Your Email";
  emailInput.required = true;
  contactForm.appendChild(emailInput);

  const messageTextarea = document.createElement("textarea");
  messageTextarea.name = "message";
  messageTextarea.placeholder = "Your Message";
  messageTextarea.required = true;
  contactForm.appendChild(messageTextarea);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn";
  submitButton.textContent = "Send Message";
  contactForm.appendChild(submitButton);

  contactSection.appendChild(contactForm);

  document.body.appendChild(contactSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const footerElement = document.createElement("footer");
  footerElement.className = "footer";

  const footerContainer = document.createElement("div");
  footerContainer.className = "footer-container";

  const socialLinksContainer = document.createElement("div");
  socialLinksContainer.className = "social-links";

  const socialPlatforms = [
    {
      href: "https://www.linkedin.com/in/ravisharma",
      iconClass: "ri-linkedin-fill",
    },
    { href: "https://github.com/ravisharma", iconClass: "ri-github-fill" },
    { href: "https://twitter.com/ravisharma", iconClass: "ri-twitter-fill" },
    {
      href: "https://www.facebook.com/ravisharma",
      iconClass: "ri-facebook-fill",
    },
    {
      href: "https://www.instagram.com/ravisharma",
      iconClass: "ri-instagram-fill",
    },
  ];

  socialPlatforms.forEach((platform) => {
    const socialAnchor = document.createElement("a");
    socialAnchor.href = platform.href;
    socialAnchor.className = "social";
    socialAnchor.target = "_blank";

    const icon = document.createElement("i");
    icon.className = platform.iconClass;

    socialAnchor.appendChild(icon);
    socialLinksContainer.appendChild(socialAnchor);
  });

  footerContainer.appendChild(socialLinksContainer);

  const copyrightContainer = document.createElement("div");
  copyrightContainer.className = "footer-copyright";

  const copyrightPara = document.createElement("p");

  copyrightPara.innerHTML = `&copy; 2026 <span>Ravi Sharma</span>. All Rights Reserved.`;

  copyrightContainer.appendChild(copyrightPara);
  footerContainer.appendChild(copyrightContainer);

  footerElement.appendChild(footerContainer);

  document.body.appendChild(footerElement);
});
