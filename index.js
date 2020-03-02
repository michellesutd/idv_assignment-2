let chart = document.getElementById('chart');

// chart height
let chartHeight = 8;

let data = [{
  'course': {
    'name': 'Business',
    'coords': [14, 25]
  },
  'students': {
    'no': 12,
    'coords': [96, 25]
  },
  'shape': {
    'type': 'rect',
    'coords': [120, 25],
    'width': 8
  }
}, {
  'course': {
    'name': 'Classical',
    'coords': [14, 130]
  },
  'students': {
    'no': 98,
    'coords': [107, 130]
  },
  'shape': {
    'type': 'rect',
    'coords': [143, 130],
    'width': 65.3
  }
}, {
  'course': {
    'name': 'Professional',
    'coords': [14, 235]
  },
  'students': {
    'no': 152,
    'coords': [134, 235]
  },
  'shape': {
    'type': 'rect',
    'coords': [167, 235],
    'width': 101.3
  }
}, {
  'course': {
    'name': 'Scientific',
    'coords': [14, 340]
  },
  'students': {
    'no': 161,
    'coords': [99, 340]
  },
  'shape': {
    'type': 'rect',
    'coords': [131, 340],
    'width': 107.3
  }
}, {
  'course': {
    'name': 'Normal',
    'coords': [14, 445]
  },
  'students': {
    'no': 383,
    'coords': [87, 445]
  },
  'shape': {
    'type': 'rect',
    'coords': [129, 445],
    'width': 255.3
  }
}, {
  'course': {
    'name': 'Industrial',
    'coords': [14, 550]
  },
  'students': {
    'no': 2252,
    'coords': [109, 550]
  },
  'shape': {
    'type': 'curvedbar',
    'coords': [163, 555],
    'width': [369, 220]
  }
}];

let textGenerator = function textGenerator(xPos, yPos, label) {
  let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute('x', xPos);
  text.setAttribute('y', yPos);
  text.textContent = label;
  return text;
};

//rectangle or bar chart generator
let RectangleGenerator = function RectangleGenerator(groupBlock) {
  let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.appendChild(textGenerator(groupBlock['course']['coords'][0], groupBlock['course']['coords'][1], groupBlock['course']['name']));
  g.appendChild(textGenerator(groupBlock['students']['coords'][0], groupBlock['students']['coords'][1], groupBlock['students']['no']));
  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', groupBlock['shape']['coords'][0]);
  rect.setAttribute('y', groupBlock['shape']['coords'][1]);
  rect.setAttribute('height', chartHeight);
  rect.setAttribute('width', groupBlock['shape']['width']);
  g.appendChild(rect);
  return g;
};

// generates curved path bars
let CurvedPathGenerator = function CurvedPathGenerator(groupBlock) {
  let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.appendChild(textGenerator(groupBlock['course']['coords'][0], groupBlock['course']['coords'][1], groupBlock['course']['name']));
  g.appendChild(textGenerator(groupBlock['students']['coords'][0], groupBlock['students']['coords'][1], groupBlock['students']['no']));
  let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
  path.setAttribute('d', "M ".concat(groupBlock['shape']['coords'][0], " ").concat(groupBlock['shape']['coords'][1], " h").concat(groupBlock['shape']['width'][0], " a10 10 0 0,1, 0, 68 H58 a10 10 0 0,0, 0, 68 h").concat(groupBlock['shape']['width'][1]));
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'rgb(179, 156, 136)');
  path.setAttribute('stroke-width', chartHeight);
  g.appendChild(path);
  return g;
};

//decides which to generates beased on group type
let GroupGenerator = function GroupGenerator(groupBlock) {
  return groupBlock['shape']['type'] === 'rect' ? RectangleGenerator(groupBlock) : CurvedPathGenerator(groupBlock);
};

//loops through data array
data.forEach(function (group) {
  chart.appendChild(GroupGenerator(group));
});

//generates hover style for bar chart
let chartStyle = document.createElement("style");
chartStyle.innerHTML = "rect:hover { fill:white; } \n        path:hover {\n            fill: none;\n            stroke: white;\n            stroke-width: 8;\n        }\n";
document.getElementsByTagName("head")[0].appendChild(chartStyle);
