// Url ka ayaan soo helenaa

let container = document.querySelector('.container');
let url = window.location.href;
// waxaan jar jareenaa Url  ka qiimaha uu noo sido si aan ugala baxno suurada numberkeeda 
let url_variables = url.split("?");
// waxaan sii kal jareenaa id=iyo surada number keeda
let exect_surah = url_variables[1].split("=");
// console.log(exect_surah[1]);
let offset =0;

// getig Suarh ayahs function
let AyahCounter =0
const BuidlDom = (surahMum,ayah,ayahNum) =>{
    if(AyahCounter < 1){
       let aayahSplit = ayah.split('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ');
        // console.log(aayahSplit);
        container.innerHTML += `<div id="bisin" style="padding-top:180px; "> <a href"#"  dir="rtl" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</a></div>`;
        container.innerHTML += `<div  id="aayah"  style="padding-bottom:180px; "><a href="" dir='rtl' lang='ar'>${aayahSplit[1]}<img src="./images/ayah.png" id="ayah-sign"><span id="ayah-number">${ayahNum}</span></a></div>`;
        Tafsiir(surahMum,ayahNum);
    }
    else{
        container.innerHTML += `<div  id="aayah"><a href="" dir='rtl' lang='ar'>${ayah}<img src="./images/ayah.png" id="ayah-sign"><span id="ayah-number">${ayahNum}</span></a></div>`;
        Tafsiir(surahMum,ayahNum);
    }
    AyahCounter++;
}

// reading surah Function
const readingSurah = async (surNum) =>{
    let request = await fetch(`http://api.alquran.cloud/v1/surah/${surNum}?offset=${offset}&limit=1`);
    let response = await request.json();
    // console.log(request);
    response.data.ayahs.forEach(surah => {
        // console.log(surah);
        BuidlDom(surNum, surah.text,surah.numberInSurah)
    });
}

readingSurah(exect_surah[1]);
// Tafsiir
const Tafsiir = async (surahMum,ayahNum) =>{
    let request = await fetch(`./quraanJson/${surahMum}.json`);
    let response = await request.json();
    console.log(response);
    container.innerHTML += ` <div  id="aayah" dir="rtl" lang="ar">${response.result[ayahNum-1].translation}</div><hr>`;

}

// Scrole

document.addEventListener('scroll', () => {
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight){
        
        setTimeout( () => {
            offset++;
            readingSurah(exect_surah[1]);

        },1000);

    }
})
