import { elements } from './base';

export const srcImages = (prevImg, mainImg, nextImg) => {
  elements.prevView.src = prevImg;
  elements.mainView.src = mainImg;
  elements.nextView.src = nextImg;
};

export const setTablet = (mainImg) => {
  elements.tablet.src = mainImg.WebsiteUrl;
  elements.projectTitle.innerHTML = mainImg.Title;
  elements.projectDescription.innerHTML = mainImg.Description;
  elements.projectPage.href = mainImg.WebsiteUrl;
  elements.codePage.href = mainImg.CodeUrl;
}

export const renderTitles = (prevImg, mainImg, nextImg) => {
  elements.projectTitlePrev.innerHTML = prevImg.Title;
  elements.projectTitleMain.innerHTML = mainImg.Title;
  elements.projectTitleNext.innerHTML = nextImg.Title;
};
