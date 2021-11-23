import Skill from './models/Skills';
import ImgGallery from './models/Images';
import * as renderSkills from './views/renderSkills';
import * as renderImages from './views/renderImages';
import { elements } from './views/base';

const state = {};

// for testing
window.state = state;

// SET ImgIndex in state

const setImgIndexState = (prevImgIndex, mainImgIndex, nextImgIndex) => {
  state.images.prev.ImageIndex = prevImgIndex;
  state.images.main.ImageIndex = mainImgIndex;
  state.images.next.ImageIndex = nextImgIndex;
}

(() => {

  // SKILLS
  state.skills = new Skill;
  state.skills.getSkills();

  renderSkills.renderSkills(state.skills.result);

  // LOAD The SLIDER

  // 1) First load Images
    state.images = new ImgGallery;

  // 2) Set the 3 images

    const prevIndex = state.images.lengthImgObject() - 1;
    setImgIndexState(prevIndex, 0, 1)

  // 3) Set the images' URLs in the state
    state.images.setImages(state.images.prev, state.images.main, state.images.next);

  // 4) Set the projects' names in the state
    state.images.setProjectsTitles(state.images.prev, state.images.main, state.images.next);

  // 4) Set main image description
    state.images.setProjectDescription(state.images.main);

  // 5) Set Tablet URl link
    state.images.setProjectTabletLink(state.images.main);

  // 6) Render the Images
    renderImages.srcImages(state.images.prev.ImageUrl, state.images.main.ImageUrl, state.images.next.ImageUrl);

  // 7) Render the Main Image in the tablet
    renderImages.setTablet(state.images.main);

  // 8) Render Project Titles in the slider
    renderImages.renderTitles(state.images.prev, state.images.main, state.images.next);
})();


//SLIDER CLICK CONTROLLER

const scrollEvent = (type) => {

  let prevImgIndex = state.images.prev.ImageIndex;
  let mainImgIndex = state.images.main.ImageIndex;
  let nextImgIndex = state.images.next.ImageIndex;

  // type 0 is Left
  if (type === 0) {
    nextImgIndex = mainImgIndex;
    mainImgIndex = prevImgIndex;

    if (prevImgIndex === 0) {
      prevImgIndex = state.images.lengthImgObject() - 1;
    } else {
      prevImgIndex--;
    }
  } else {
    prevImgIndex = mainImgIndex;
    mainImgIndex = nextImgIndex;

    if (nextImgIndex >= ( state.images.lengthImgObject() -1)) {
      nextImgIndex = 0;
    } else {
      nextImgIndex++;
    }
  }

  // Set the new Indexes in the State
    setImgIndexState(prevImgIndex, mainImgIndex, nextImgIndex);

  // Set the state with new Image URLs
    state.images.setImages(state.images.prev, state.images.main, state.images.next);

  // Set the projects' names in the state
    state.images.setProjectsTitles(state.images.prev, state.images.main, state.images.next);

  // Set main image description
    state.images.setProjectDescription(state.images.main);

  // Set Tablet URl link
    state.images.setProjectTabletLink(state.images.main);

  // Render the new Images
    renderImages.srcImages(state.images.prev.ImageUrl, state.images.main.ImageUrl, state.images.next.ImageUrl);

  // Render the Main Image in the tablet
    renderImages.setTablet(state.images.main);

  // Render Project Titles in the slider
    renderImages.renderTitles(state.images.prev, state.images.main, state.images.next);
};

// SCROLL Event CLICK

    elements.navRight.addEventListener("click", function () {
      scrollEvent(1);
    });
    elements.navLeft.addEventListener("click", function () {
      scrollEvent(0);
    });
    elements.nextView.addEventListener("click", function () {
      scrollEvent(1);
    });
    elements.prevView.addEventListener("click", function () {
      scrollEvent(0);
    });

    document.addEventListener('keyup',function(e){
        if (e.keyCode === 37) {
        scrollEvent(0);
      } else if(e.keyCode === 39) {
        scrollEvent(1);
      }
    });

//// STICKY NAVBAR COLOR CHANGE //////

window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  const nav_link = document.querySelectorAll('.navigation__link');

  if(window.scrollY <= 40) {
    nav.classList.remove('navbar-sticky');

      for (let i=0; i < nav_link.length; i++) {
        nav_link[i].classList.remove('navbar-sticky__link');
      }

  } else {
    nav.classList.add('navbar-sticky');

    for (let i=0; i < nav_link.length; i++) {
      nav_link[i].classList.add('navbar-sticky__link');
    }
  }
};

//// SCROLL TO SECTION /////
document.querySelectorAll('.navigation__link').forEach(item => {
  item.addEventListener('click', function () {
    const section=event.target.dataset.navid;
    const sectionToScroll = "section-" + section;
    const el = document.getElementById(sectionToScroll);

    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    console.log(elementPosition);
    let offsetPosition = elementPosition - 40;

    // if (section === 'about'){
    //   offsetPosition = elementPosition - 40;
    // } else if (section === 'projects') {
    //   offsetPosition = elementPosition + 405;
    // }
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
