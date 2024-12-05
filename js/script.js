// ini fiLe javascript

function validateForm() {
    let inputBeratBadan = parseInt(document.getElementById('berat-badan-input').value);
    let inputUsia = parseInt(document.getElementById('usia-input').value);
    let inputTinggiBadan = parseInt(document.getElementById('tinggi-badan-input').value) / 100;

    console.log('BB:' + inputBeratBadan);
    console.log('Usia:' + inputUsia);
    console.log('Tinggi:' + inputTinggiBadan);
    if (inputBeratBadan != '' && inputUsia != '' && inputTinggiBadan != '' ) {
        let calculate = (inputBeratBadan / (inputTinggiBadan * inputTinggiBadan)).toFixed(1);
        updateResult(calculate);
    } else {
        alert('Data Belum Di Input! Mohon Cek Kembali');
    }
}

function updateResult(value) {
    document.getElementById('result-calculation').innerHTML = value;

    if (value < 18.5) {
        document.getElementById('info-result').innerText = "Anda Kekurangan Berat Badan";
    } else if(value >= 18.5 && value <= 25.0){
        document.getElementById('info-result').innerText = "Anda Memiliki Berat Badan Ideal";
    } else if(value >= 25.0 && value <= 30.0){
        document.getElementById('info-result').innerText = "Anda Kelebihan Berat Badan";
    } else {
        document.getElementById('info-result').innerText = "Obesitas";
    }
}
