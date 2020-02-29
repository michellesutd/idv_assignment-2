//label position variables
let yMarginTop = 25
let yMarginBottom = 105
let categoryXPosition = 14

//bar variables
let barHeight = 8

//select the svg element
let svg = document.getElementById('chart')

let data = [
  {
    "category": "business",
    "num_of_students": 12,
    "num_of_students_pixels": 8
  },
  {
    "category": "classical",
    "num_of_students": 98,
    "num_of_students_pixels": 65.3
  },
  {
    "category": "professional",
    "num_of_students": 152,
    "num_of_students_pixels": 101.3
  },
  {
    "category": "scientific",
    "num_of_students": 161,
    "num_of_students_pixels": 107.3
  },
  {
    "category": "normal",
    "num_of_students": 383,
    "num_of_students_pixels": 255.3
  }
];

for (let index = 0; index < data.length; index++) {
  let item = data[index];
  let yPosition = yMarginTop + (index * yMarginBottom);
}
