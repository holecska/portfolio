let imgObject = [
  {
    "url": "https://holecska.github.io/frontendmentor-socialmedia/",
    "codeUrl": "https://github.com/holecska/frontendmentor-socialmedia",
    "name": "Social Media Dashboard",
    "description": "This challange was given by Frontendmentor. I created this website using the basic technologies, such as HTML5, CSS/SCSS and JavaScript for the color changes. Try the magic with the toggle button in the tablet ;)",
    "picture": "css/img/projects/socialmedia.png"
  },
  {
    "url": "https://holecska.github.io/EasyBank-Landing-Page/",
    "codeUrl": "https://github.com/holecska/EasyBank-Landing-Page",
    "name": "EasyBank Landing Page",
    "description": "By creating this website I have experienced technologies such as Flexbox, Grid Systems, and animations in CSS. This challange was also given by Frontendmentor.",
    "picture": "css/img/projects/easybank.png"
  },
  {
    "url": "https://holecska.github.io/Huddle-Project/",
    "codeUrl": "https://github.com/holecska/Huddle-Project",
    "name": "Huddle Project",
    "description": "This website is created with the basic technologies, at creating this site I focused on learning the basic Bootstrap syntaxes",
    "picture": "css/img/projects/huddle.png"
  },
  {
    "url": "https://holecska.github.io/codeberry-blogsite/",
    "codeUrl": "https://github.com/holecska/codeberry-blogsite",
    "name": "HTML5/CSS Practice Course Project 1.",
    "description": "I attended a practice course at CodeBerry School, where I had 4 projects in 4 weeks. One of them is this blog main site. I created this website using HTML/CSS and SASS. This, first project was scored for 76,25%. After this project I focused more precisely on the mentioned advices.",
    "picture": "css/img/projects/codeberry-blog.png"
  },
  {
    "url": "https://holecska.github.io/codeberry-chatsite/",
    "codeUrl": "https://github.com/holecska/codeberry-chatsite",
    "name": "HTML5/CSS Practice Course Project 2.",
    "description": "I attended a practice course at CodeBerry School, where I had 4 projects in 4 weeks. One of them is this chat site. I created this website using HTML/CSS and SASS. At the scoring I got 93,75% for this work :)",
    "picture": "css/img/projects/codeberry-chat.png"
  },
  {
    "url": "https://holecska.github.io/codeberry-registration/",
    "codeUrl": "https://github.com/holecska/codeberry-registration",
    "name": "HTML5/CSS Practice Course Project 3.",
    "description": "I attended a practice course at CodeBerry School, where I had 4 projects in 4 weeks. One of them is this registration site. I created this website using HTML/CSS and SASS. At the scoring I got 92,5%% for this work.",
    "picture": "css/img/projects/codeberry-registration.png"
  }
];

export default class ImgGallery {
  constructor () {
    this.prev = {};
    this.main = {};
    this.next = {};
  }

  setImages(prevImg, mainImg, nextImg) {

    this.prev.ImageUrl = imgObject[prevImg.ImageIndex].picture;
    this.main.ImageUrl = imgObject[mainImg.ImageIndex].picture;
    this.next.ImageUrl = imgObject[nextImg.ImageIndex].picture;
  }

  lengthImgObject() {
    return imgObject.length;
  }

  setProjectDescription(mainImg) {
    this.main.Description = imgObject[mainImg.ImageIndex].description;
  }

  setProjectTabletLink(mainImg) {
    this.main.WebsiteUrl = imgObject[mainImg.ImageIndex].url;
    this.main.CodeUrl = imgObject[mainImg.ImageIndex].codeUrl;
  }

  setProjectsTitles(prevImg, mainImg, nextImg) {
    this.main.Title = imgObject[mainImg.ImageIndex].name;
    this.prev.Title = imgObject[prevImg.ImageIndex].name;
    this.next.Title = imgObject[nextImg.ImageIndex].name;
  }
}
