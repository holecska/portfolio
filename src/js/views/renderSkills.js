import { elements } from './base';

const renderSkill = skill => {

  const markup = `
  <div class="about__item" id="${skill.id}" >
    <div class="about__skill">${skill.name}</div>
    <div class="about__baritemAdd">
      <div class="about__baritemAddAfter"  id="baritem-${skill.id}"></div>
      <div class="about__baritemValue" id="barValue-${skill.id}">${skill.level} %</div>
    </div>
  </div>
  `
  elements.skills.insertAdjacentHTML('beforeend', markup)

  styleAfterPseudoElement(skill.id, skill.level);
};

const styleAfterPseudoElement = (id, level) => {
  const newId = "baritem-" + id;
  const element = document.getElementById(newId);
  const barValue = "barValue-" + id;
  const childElement = document.getElementById(barValue);
  const widthProp = level + "%";
  element.style.width = widthProp;
}

export const renderSkills = skills => {
  skills.forEach(renderSkill);
}
