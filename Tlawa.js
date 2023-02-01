class Surah{
    constructor(name,url){
        this.name = name;
        this.url = url;
    }
}
const body_test = document.getElementById('con');
const QuranApiRec = 'https://api.quran.com/api/v4/chapter_recitations/3?language=en'
const QuranApiNam = 'https://api.quran.com/api/v4/chapters?language=en'

const SurahInfo = []

const XML1 = new XMLHttpRequest()
const XML2 = new XMLHttpRequest()

XML1.open("GET",QuranApiRec)
XML1.onload = Audio;
XML1.send()

XML2.open("GET",QuranApiNam)
XML2.onload = Name;
XML2.send()

function Audio(){
    const data = JSON.parse(this.responseText)
    data.audio_files.forEach(element => {
        SurahInfo.push(new Surah ('',element.audio_url))
    });
    console.log(SurahInfo)
}
function Name(){
    const data = JSON.parse(this.responseText)
    console.log(data)
    let divs = ''; 
    let count = 0;
    data.chapters.forEach(e=>{
        SurahInfo[count].name = e.name_arabic
        count += 1
    })
    console.log(SurahInfo)
    SurahInfo.forEach(l=>{
        divs += 
            `<div class="a">
                <p>سورة ${l.name}</p>
                <audio controls>
                    <source src="${l.url}">
                </audio>
            </div>`
    })
    body_test.innerHTML = divs
}