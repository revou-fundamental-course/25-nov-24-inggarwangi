// ini fiLe javascript

function validateForm() {
    let inputBeratBadan = parseInt(document.getElementById('berat-badan-input').value);
    let inputUsia = parseInt(document.getElementById('usia-input').value);
    let inputTinggiBadan = parseInt(document.getElementById('tinggi-badan-input').value) / 100;

    console.log('BB:' + inputBeratBadan);
    console.log('Usia:' + inputUsia);
    console.log('Tinggi:' + inputTinggiBadan) / 100;
    if (inputBeratBadan != '' && inputUsia != '' && inputTinggiBadan != '' ) {
        let calculate = inputBeratBadan / (inputTinggiBadan * inputTinggiBadan);
        updateResult(calculate);
    } else {
        alert('Data Belum Di Input! Mohon Cek Kembali');
    }
}

function updateResult(value) {
    document.getElementById('result-calculation').innerHTML = value;
}
