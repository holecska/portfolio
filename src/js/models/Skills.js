const skillObject = [
  {
    "id": 1,
    "name": "HTML5/CSS/SCSS",
    "level": 85,
  },
  {
    "id": 2,
    "name": "JavaScript",
    "level": 75,
  },
  {
    "id": 3,
    "name": "jQuery",
    "level": 45,
  },
  {
    "id": 4,
    "name": "React",
    "level": 25,
  },
  {
    "id": 5,
    "name": "FullStack",
    "level": 75,
  },
  {
    "id": 6,
    "name": "Python/Flask",
    "level": 80,
  },
  {
    "id": 7,
    "name": "SQL/SQLAlchemy",
    "level": 75,
  },
  {
    "id": 8,
    "name": "Auth0 Authentication",
    "level": 65,
  }
];

export default class Skill {

  getSkills() {
    this.result = skillObject;
  }
}
