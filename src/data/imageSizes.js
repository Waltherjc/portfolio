// Generated from the files in /public/img — aspect ratios keep figures
// from reflowing once images decode. Regenerate after adding images
// (command is in README.md).
export const aspect = {
  "John Walther Headshot Square.jpg": 1.0,
  "John Walther Headshot.jpg": 1.3324,
  "John Walther Roll Cage.jpg": 1.0,
  "Oil-Tank-1.jpg": 0.75,
  "Oil-Tank-2.jpg": 0.75,
  "Oil-Tank-Behind-1.jpg": 0.75,
  "Oil-Tank-Behind-2.jpg": 0.75,
  "Oil-Tank-Behind-3.jpg": 0.75,
  "Oil-Tank-Behind-CAD-1.jpg": 1.3563,
  "Oil-Tank-Behind-CAD-2.jpg": 1.3333,
  "Oil-Tank-Front-CAD-1.jpg": 1.4512,
  "Oil-Tank-Front-CAD-2.jpg": 1.3327,
  "Oil-Tank-Side-1.jpg": 0.75,
  "Oil-Tank-Side-2.jpg": 1.3333,
  "Oil-Tank-Side-3.jpg": 0.75,
  "Oil-Tank-Side-CAD-1.jpg": 1.3329,
  "Oil-Tank-Side-CAD-2.jpg": 1.3324,
  "Roll Cage Welding.jpg": 1.3333,
  "Shower-Chair-Diermeier.jpg": 1.5,
  "Shower-Chair-Hero.jpg": 1.5,
  "Shower-Chair-Team.jpg": 1.5,
  "Shower-Chair-Work-1.jpg": 1.5,
  "Shower-Chair-Work-2.jpg": 1.5,
  "Suspension Arm Outline.jpg": 1.3333,
  "Suspension CAD Arm Complete.jpg": 1.1345,
  "Suspension CAD Complete.jpg": 1.8755,
  "Suspension CAD Iter 1.jpg": 1.1303,
  "Suspension CAD Iter 2.jpg": 1.1345,
  "Suspension CAD Iter 3.jpg": 1.1313,
  "Suspension Completed.jpg": 1.3333,
  "Syringe Pump Feature.jpg": 1.3359,
  "Syringe Pump Rendering 1.png": 1.787,
  "Syringe Pump Rendering 2.png": 1.7865,
  "Syringe Pump Wiring.png": 2.0894,
  "Wire Roll Cage.jpg": 1.3333
};

export const ratioOf = (name, fallback = 1.5) => aspect[name] ?? fallback;
