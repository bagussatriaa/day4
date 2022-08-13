const cardData = [];
function addPost(event) {
  event.preventDefault();
  let projectName = document.getElementById('project-name').value;
  let startDate = document.getElementById('start-date').value;
  let endDate = document.getElementById('end-date').value;
  let desc = document.getElementById('description').value;

  // icons
  let node = document.getElementById('node').checked;
  let python = document.getElementById('python').checked;
  let laravel = document.getElementById('laravel').checked;
  let js = document.getElementById('js').checked;
  // icons conditions
  if (node) {
    node = document.getElementById('node').value;
  } else {
    node = '';
  }
  if (python) {
    python = document.getElementById('python').value;
  } else {
    python = '';
  }
  if (laravel) {
    laravel = document.getElementById('laravel').value;
  } else {
    laravel = '';
  }
  if (js) {
    js = document.getElementById('js').value;
  } else {
    js = '';
  }

  let image = document.getElementById('img').files;
  if (image.length == 0) {
    return alert('Please select an image to continue');
  }
  image = URL.createObjectURL(image[0]);
  // input alert
  if (projectName == '') {
    return alert('Fill the name of the project');
  } else if (desc == '') {
    return alert('Description must be filled in');
  } else if (node == '' && python == '' && laravel == '' && js == '') {
    return alert('Take at least 1 technologies');
  }

  let post = {
    projectName,
    startDate,
    endDate,
    desc,
    js,
    node,
    python,
    laravel,
    image,
  };
  // console.log(post);
  // console.log(cardData);
  cardData.push(post);
  renderCard();
}

function renderCard() {
  document.getElementById('contents').innerHTML = '';

  for (let i = 0; i < cardData.length; i++) {
    document.getElementById('contents').innerHTML += `
    <div class="contents" id="contents">
        <div class="card">
          <img src="${cardData[i].image} " alt="User image" />
          <h3>${cardData[i].projectName}</h3>
          <h6>Duration</h6>
          <p>${cardData[i].desc} </p>
          <div class="icon">
          <i class="fa-brands fa-${cardData[i].node}"></i>
          <i class="fa-brands fa-${cardData[i].python}"></i>
          <i class="fa-brands fa-${cardData[i].laravel}"></i>
          <i class="fa-brands fa-${cardData[i].js}"></i>
        </div>
          <div class="card-button">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>`;
  }
}
