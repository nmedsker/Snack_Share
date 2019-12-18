var myData = [
  {
    title: "Food Item",
    content: "Food Preparation",
    content2: "Prep Time:",
    content3: "Ingredients:",
    content4: "Instructions:"
  },
  {
    title: "Food Item",
    content: "Food Preparation",
    content2: "Prep Time:",
    content3: "Ingredients:",
    content4: "Instructions:"
  },
  {
    title: "Food Item",
    content: "Food Preparation",
    content2: "Prep Time:",
    content3: "Ingredients:",
    content4: "Instructions:"
  },
  {
    title: "Food Item",
    content: "Food Preparation",
    content2: "Prep Time:",
    content3: "Ingredients:",
    content4: "Instructions:"
  },
  {
    title: "Food Item",
    content: "Food Preparation",
    content2: "Prep Time:",
    content3: "Ingredients:",
    content4: "Instructions:"
  },
  {
    title: "Food Item",
    content: "Food Preparation",
    content2: "Prep Time:",
    content3: "Ingredients:",
    content4: "Instructions:"
  },
  {
    title: "Food Item",
    content: "Food Preparation",
    content2: "Prep Time:",
    content3: "Ingredients:",
    content4: "Instructions:"
  },
  {
    title: "Food Item",
    content: "Food Preparation",
    content2: "Prep Time:",
    content3: "Ingredients:",
    content4: "Instructions:"
  }
];

// This is the first function to run when the page loads
function setup() {
  render();
}

// We will handle what is displayed in this function
function render() {
  var myOutput = "";
  myData.forEach(function (item, index) {
    myOutput += `
      <div class="item" onclick="showDetail(${index})">
        <h3 class="item-content">
          ${item.title}
        </h3>
        <div class="picture">
          <img src="https://images.unsplash.com/photo-1499778003268-cbafc6d08bab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Pizza" height="100px" width="100px">
        </div>
        <div class="item-content">
          ${item.content}
          ${item.content2}
          ${item.content3}
          ${item.content4}

        </div>
      </div>`;
  });
  document.querySelector("#results").innerHTML = myOutput;
}

function showDetail(i){
  var element = document.createElement("div");
  element.classList.add("detail-view");
  var detail = `
    <div class="close-button" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></div>
    <textarea id="item-title">${myData[i].title}</textarea>

    <textarea id="item-content">${myData[i].content}</textarea>
    <textarea id="item-content">${myData[i].content2}</textarea>
    <textarea id="item-content">${myData[i].content3}</textarea>
    <textarea id="item-content">${myData[i].content4}</textarea>

    <button onclick="updateContent(${i}); updateTitle(${i}); updateContent2(${i}); updateContent3(${i}); updateContent4(${i}); this.parentElement.remove();">Save</button>
  `;
  element.innerHTML = detail;
  document.querySelector('body').appendChild(element);
}

function updateContent(i) {
  myData[i].content = document.querySelector('#item-content').value;
  render();
}

function updateContent2(i) {
  myData[i].content = document.querySelector('#item-content').value;
  render();
}

function updateContent3(i) {
  myData[i].content = document.querySelector('#item-content').value;
  render();
}

function updateContent4(i) {
  myData[i].content = document.querySelector('#item-content').value;
  render();
}


function updateTitle(i) {
  myData[i].title = document.querySelector('#item-title').value;
  render();
}

// This kicks things off once the page is loaded
window.onload = setup();
