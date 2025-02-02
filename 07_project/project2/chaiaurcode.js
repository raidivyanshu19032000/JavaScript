const form = document.querySelector('form ');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result;
    result.innerHTML = `<span> ${bmi} </span>`;
    const msg = document.querySelector('#weight-guide');
    if (bmi < 18.6) {
      msg.appendChild(document.createElement('p'));
      msg.textContent = 'Under Weight = Less than 18.6';
      document.body.appendChild(msg);
    } else if (bmi > 18.6 && bmi < 24.9) {
      msg.appendChild(document.createElement('p'));
      msg.textContent = 'Normal Range = 18.6 and 24.9';
      document.body.appendChild(msg);
    } else {
      msg.appendChild(document.createElement('p'));
      msg.textContent = 'Overweight = Greater than 24.9';
      document.body.appendChild(msg);
    }
  }
});
