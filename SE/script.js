// Ambil elemen-elemen yang diperlukan dari DOM
const temperatureForm = document.getElementById('temperature-form');
const temperatureInput = document.getElementById('temperature-input');
const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');
const reverseBtn = document.getElementById('reverse-btn');
const result = document.getElementById('result');
const explanation = document.getElementById('explanation');

// Fungsi konversi dari Celcius ke Fahrenheit
function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

// Fungsi konversi dari Fahrenheit ke Celcius
function convertToFahrenheit(celsius) {
  return (celsius * (9 / 5)) + 32;
}

// Fungsi untuk menampilkan hasil konversi
function displayResult(input, resultValue, unit) {
  result.textContent = `Hasil Konversi: ${resultValue.toFixed(2)} ${unit}`;
  explanation.textContent = `Suhu ${input} derajat ${unit === 'C' ? 'Celsius' : 'Fahrenheit'} setara dengan ${resultValue.toFixed(2)} derajat ${unit === 'C' ? 'Fahrenheit' : 'Celsius'}.`;
}

// Fungsi untuk mereset formulir
function resetForm() {
  temperatureForm.reset();
  result.textContent = '';
  explanation.textContent = '';
}

// Fungsi untuk mengubah suhu yang dimasukkan (Celcius <-> Fahrenheit)
function reverseTemperature() {
  const temperatureValue = parseFloat(temperatureInput.value);
  const unit = temperatureInput.dataset.unit;

  if (unit === 'C') {
    temperatureInput.dataset.unit = 'F';
    temperatureInput.placeholder = 'Masukkan suhu dalam Fahrenheit';
  } else {
    temperatureInput.dataset.unit = 'C';
    temperatureInput.placeholder = 'Masukkan suhu dalam Celsius';
  }

  resetForm();
  temperatureInput.value = temperatureValue;
}

// Event listener untuk tombol "Konversi"
convertBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const temperatureValue = parseFloat(temperatureInput.value);
  const unit = temperatureInput.dataset.unit;

  if (isNaN(temperatureValue)) {
    alert('Mohon masukkan suhu yang valid.');
    return;
  }

  let convertedValue;
  if (unit === 'C') {
    convertedValue = convertToFahrenheit(temperatureValue);
    displayResult(temperatureValue, convertedValue, 'C');
  } else {
    convertedValue = convertToCelsius(temperatureValue);
    displayResult(temperatureValue, convertedValue, 'F');
  }
});

// Event listener untuk tombol "Reset"
resetBtn.addEventListener('click', function () {
  resetForm();
});

// Event listener untuk tombol "Reverse"
reverseBtn.addEventListener('click', function () {
  reverseTemperature();
});
