let multiLanguage = {
    RU: {
        header: ["На главную", "Частые вопросы", "Контакты"],
        main: {
            title: ["Классический массаж тела", "Релакс массаж", "Антицеллюлитный массаж", "Лимфодренажный массаж", "Спортивный массаж"],
            description: [[], [], [], [], []],
            fon: ["./media/classic.jpeg", "./media/relax.jpeg", "./media/anticelulit.jpeg", "./media/limf.jpeg", "./media/sport.jpeg"]
        },
        form: {
            title: "Заполните форму и с вами свяжутся",
            labelText: ["Имя и фамилия", "Email", "Телефон", "Отправить"]
        },
        button: "Отправить заявку"
    },
    EN: {
        header: ["Home", "FAQ", "Contact"],
        main: {
            title: ["Classical body massage", "Relax Massage", "Anti-cellulite massage", "Lymphatic drainage massage", "Sports massage"],
            description: [[], [], [], [], []],
            fon: ["./media/classic.jpeg", "./media/relax.jpeg", "./media/anticelulit.jpeg", "./media/limf.jpeg", "./media/sport.jpeg"]
        },
        form: {
            title: "Fill out the form and you will be contacted",
            labelText: ["Name and last name", "Email", "Phone", "Submit"]
        },
        button: "Leave a message"
    },
    PL: {
        header: ["Strona główna", "Częste pytania", "Kontakt"],
        main: {
            title: ["Masaż klasyczny ciała", "Masaż relaksacyjny", "Masaż antycellulitowy", "Masaż drenażowy limfatyczny", "Masaż sportowy"],
            description: [[], [], [], [], []],
            fon: ["./media/classic.jpeg", "./media/relax.jpeg", "./media/anticelulit.jpeg", "./media/limf.jpeg", "./media/sport.jpeg"]
        },
        form: {
            title: "Wypełnij formularz, a skontaktujemy się z Tobą",
            labelText: ["Imię i nazwisko", "Email", "Telefon", "Wyślij"]
        },
        button: "Wyślij wniosek"
    }
}

let userLang = navigator.language || navigator.userLanguage; 
let userLangNew = userLang.split('-')[0].toUpperCase();

let openBlock = false;
let upDown = true;
let numberWindow = 0;
const titleText = document.getElementById("titleText");
const imgBackground = document.getElementById("main");
const navBar = document.getElementsByClassName("navBar");
const langIcon = document.getElementsByClassName("langSmallBlock");
const btnOpenForm = document.getElementById("btnOpenForm");
const titleForm = document.getElementById("titleForm");
const btnForm = document.getElementById("button-blue");
const nameForm = document.getElementById("name");
const emailForm = document.getElementById("email");
const phoneForm = document.getElementById("phone");

const arrowLang = document.getElementById("arrowLang");
let arrowLangVar = true;
console.log(btnForm);

// Start setup site
window.onload = () => {
    startSetupSite();
}
function startSetupSite() {
    switch (userLangNew) {
        case "RU":
            setupRuFunc();
            break;
        case "EN":
            setupEnFunc();
            break;
        case "PL":
            setupPlFunc();
            break;
    }
}
function setupRuFunc() {
    for (let i = 0; i < navBar.length; i ++) {
        navBar[i].innerText = multiLanguage.RU.header[i];
    }
    titleText.innerText = multiLanguage.RU.main.title[numberWindow];
    langIcon[1].style.display = "none";
    langIcon[2].style.display = "none";
    btnOpenForm.innerText = multiLanguage.RU.button;
    titleForm.innerText = multiLanguage.RU.form.title;
    nameForm.placeholder = multiLanguage.RU.form.labelText[0];
    emailForm.placeholder = multiLanguage.RU.form.labelText[1];
    phoneForm.placeholder = multiLanguage.RU.form.labelText[2];
    btnForm.innerText = multiLanguage.RU.form.labelText[3];
}
function setupEnFunc() {
    for (let i = 0; i < navBar.length; i ++) {
        navBar[i].innerText = multiLanguage.EN.header[i];
    }
    titleText.innerText = multiLanguage.EN.main.title[numberWindow];
    langIcon[0].style.display = "none";
    langIcon[2].style.display = "none";
    btnOpenForm.innerText = multiLanguage.EN.button;
    titleForm.innerText = multiLanguage.EN.form.title;
    nameForm.placeholder = multiLanguage.EN.form.labelText[0];
    emailForm.placeholder = multiLanguage.EN.form.labelText[1];
    phoneForm.placeholder = multiLanguage.EN.form.labelText[2];
    btnForm.innerText = multiLanguage.EN.form.labelText[3];
}
function setupPlFunc() {
    for (let i = 0; i < navBar.length; i ++) {
        navBar[i].innerText = multiLanguage.PL.header[i];
    }
    titleText.innerText = multiLanguage.PL.main.title[numberWindow];
    langIcon[0].style.display = "none";
    langIcon[1].style.display = "none";
    btnOpenForm.innerText = multiLanguage.PL.button;
    titleForm.innerText = multiLanguage.PL.form.title;
    nameForm.placeholder = multiLanguage.PL.form.labelText[0];
    emailForm.placeholder = multiLanguage.PL.form.labelText[1];
    phoneForm.placeholder = multiLanguage.PL.form.labelText[2];
    btnForm.innerText = multiLanguage.PL.form.labelText[3];
}

// open and close form block
document.getElementById("btnOpenForm").onclick = function() {
    if (openBlock == false) {
        document.getElementById("formBlock").style.display = "block";
        openBlock = true;
        document.getElementById("btnOpenForm").disable = true;
        document.getElementById("shadowMain").style.boxShadow = "0 0 0 9999px rgba(0,0,0, 0.3)";
    }
}
document.getElementById("closeFormBlock").onclick = function() {
    if (openBlock == true) {
        document.getElementById("formBlock").style.display = "none";
        openBlock = false;
        document.getElementById("btnOpenForm").disable = false;
        document.getElementById("shadowMain").style.boxShadow = "none";
    }
}

// animate slide site
window.addEventListener('wheel', function (event) {
    if (upDown) {
        if (event.wheelDelta >= 0) {
            // console.log('Scroll up');
            upDown = false;
            updateTime();
            updateWindowSite(false);
        }
        else {
            // console.log('Scroll down');
            upDown = false;
            updateTime();
            updateWindowSite(true);
        }
    }
});
function updateTime() {
    setTimeout(() => upDown = true, 1500);
}
function updateWindowSite(scrollingDirection) {
    if (scrollingDirection) {
        console.log(scrollingDirection);
        if (numberWindow < 4) {
            numberWindow ++;
        }
        switch (userLangNew) {
            case "RU":
                titleText.innerText = multiLanguage.RU.main.title[numberWindow];
                imgBackground.style.backgroundImage = `url(${multiLanguage.RU.main.fon[numberWindow]})`;
                break;
            case "EN":
                titleText.innerText = multiLanguage.EN.main.title[numberWindow];
                imgBackground.style.backgroundImage = `url(${multiLanguage.EN.main.fon[numberWindow]})`;
                break;
            case "PL":
                titleText.innerText = multiLanguage.PL.main.title[numberWindow];
                imgBackground.style.backgroundImage = `url(${multiLanguage.PL.main.fon[numberWindow]})`;
                break;
        }
    } else {
        console.log(scrollingDirection);
        if (numberWindow > 0) {
            numberWindow --;
        }
        switch (userLangNew) {
            case "RU":
                titleText.innerText = multiLanguage.RU.main.title[numberWindow];
                imgBackground.style.backgroundImage = `url(${multiLanguage.RU.main.fon[numberWindow]})`;
                break;
            case "EN":
                titleText.innerText = multiLanguage.EN.main.title[numberWindow];
                imgBackground.style.backgroundImage = `url(${multiLanguage.EN.main.fon[numberWindow]})`;
                break;
            case "PL":
                titleText.innerText = multiLanguage.PL.main.title[numberWindow];
                imgBackground.style.backgroundImage = `url(${multiLanguage.PL.main.fon[numberWindow]})`;
                break;
        }
    }
}

// Choose a site translation
arrowLang.onclick = () => {
    if (arrowLangVar) {
        switch (userLangNew) {
            case "RU":
                langIcon[1].style.display = "block";
                langIcon[2].style.display = "block";
                break;
            case "EN":
                langIcon[0].style.display = "block";
                langIcon[2].style.display = "block";
                break;
            case "PL":
                langIcon[0].style.display = "block";
                langIcon[1].style.display = "block";
                break;
        }
        arrowLang.src = "./media/arrow-up.png";
        arrowLangVar = false;
    } else {
        switch (userLangNew) {
            case "RU":
                langIcon[1].style.display = "none";
                langIcon[2].style.display = "none";
                break;
            case "EN":
                langIcon[0].style.display = "none";
                langIcon[2].style.display = "none";
                break;
            case "PL":
                langIcon[0].style.display = "none";
                langIcon[1].style.display = "none";
                break;
        }
        arrowLang.src = "./media/arrow-down.png";
        arrowLangVar = true;
    }
}
langIcon[0].onclick = () => {
    userLangNew = "RU";
    arrowLang.src = "./media/arrow-down.png";
    arrowLangVar = true;
    startSetupSite();
}
langIcon[1].onclick = () => {
    userLangNew = "EN";
    arrowLang.src = "./media/arrow-down.png";
    arrowLangVar = true;
    startSetupSite();
}
langIcon[2].onclick = () => {
    userLangNew = "PL";
    arrowLang.src = "./media/arrow-down.png";
    arrowLangVar = true;
    startSetupSite();
}