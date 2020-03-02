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
