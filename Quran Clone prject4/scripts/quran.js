let container = document.querySelector('.container');
let loader = document.querySelector('#loader');

const buildDown = (surahNumber,surahname,surahNameEng) =>{
    container.innerHTML += `  <div class="surah-info">
    <div class="surah-names">
        <a href="http://127.0.0.1:3000/Quran%20Clone%20prject4/tafsiir.html?id=${surahNumber}" id="surah-eng">${surahNameEng}</a>
        <a href="http://127.0.0.1:3000/Quran%20Clone%20prject4/tafsiir.html?id=${surahNumber}" id="surah-ar">${surahname}</a>
    </div>
    <span id="ayah-number">${surahNumber}</span>
</div>`
}

const searchSurah = (e) =>{
    let surahInf = document.querySelectorAll('.surah-info');
    let term = e.target.value.toUpperCase();
    // console.log(term)

    surahInf.forEach((surah)=>{
        let surahEng = surah.querySelector('#surah-eng').innerText.toUpperCase();
        let surahAr = surah.querySelector('#surah-ar').innerText.toUpperCase();
        if(surahAr.indexOf(term) > -1 || surahEng.indexOf(term) > -1 ){
            surah.style.display= 'flex';
        }else{
            surah.style.display= 'none';
        }
    })
}
const getAllSurah = async () =>{
    loader.style.display="block";

    let request = await fetch('http://api.alquran.cloud/v1/quran/quran-uthmani');
    let surah = await request.json();

    loader.style.display="none"

     surah.data.surahs.forEach((surah)  =>{
        console.log(surah)
        buildDown(surah.number,surah.name,surah.englishName)

     });
}
getAllSurah();


document.addEventListener('input',searchSurah);