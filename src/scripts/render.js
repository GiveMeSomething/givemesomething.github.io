const imageLists = [
  "src/public/images/cafe.jpg",
  "src/public/images/quiet.jpg",
  "src/public/images/reflection.jpg",
  "src/public/images/sundown.jpeg",
];

// Positioning for image stack
const STACK_START = -4;
const STACK_STEP = 22;

// Positioning for image in image stack
const IMAGE_START = 25;
const IMAGE_STEP = 30;

function renderImageStack() {
  const root = document.getElementById("img-stack-root");

  const container = document.createDocumentFragment();

  for (let i = 0; i < 5; i++) {
    const imageStack = renderImageStackContainer(i);
    container.appendChild(imageStack);
  }

  root.appendChild(container);
}

function renderImageStackContainer(index) {
  const container = document.createDocumentFragment();

  const div = document.createElement("div");

  div.className = "absolute w-full h-full moving-bot-to-top";
  div.style.left = `${STACK_START + index * STACK_STEP}%`;

  for (let i = 0; i < 6; i++) {
    const image = renderImage(i);
    div.appendChild(image);
  }

  container.appendChild(div);
  return container;
}

function renderImage(index) {
  const container = document.createDocumentFragment();

  const imageContainer = document.createElement("div");
  imageContainer.className = "absolute w-1/5 h-1/4";
  imageContainer.style.bottom = `-${IMAGE_START + index * IMAGE_STEP}%`;

  const image = document.createElement("img");
  image.src = imageLists[index % imageLists.length];
  image.alt = `Photo number ${index + 1}`;
  image.className = "w-full h-full object-cover";

  imageContainer.appendChild(image);
  container.appendChild(imageContainer);

  return container;
}

renderImageStack();
