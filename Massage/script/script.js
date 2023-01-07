let multiLanguage = {
    RU: {
        header: ["На главную", "Частые вопросы", "Контакты"],
        main: {
            title: ["Классический массаж тела", "Релакс массаж", "Антицеллюлитный массаж", "Лимфодренажный массаж", "Спортивный массаж"],
            description: [[], [], [], [], []],
            fon: ["../media/classic.jpeg", "../media/relax.jpeg", "../media/anticelulit.jpeg", "../media/limf.jpeg", "../media/sport.jpeg"]
        },
        form: {
            title: "Заполните форму и с вами свяжутся",
            labelText: ["Имя и фамилия", "Email", "Телефон", "Отправить"]
        },
        button: "Отправить заявку"
    },
    EN: {

    },
    PL: {

    }
}

let openBlock = false;

document.getElementById("btnOpenForm").onclick = function() {
    if (openBlock == false) {
        document.getElementById("formBlock").style.display = "block";
        openBlock = true;
    }
}
document.getElementById("closeFormBlock").onclick = function() {
    if (openBlock == true) {
        document.getElementById("formBlock").style.display = "none";
        openBlock = false;
    }
}

window.onwheel = function(event) {
    if (event.wheelDelta >= 0) {
        console.log('Scroll up');
        window.onwheel = null;
        
    }
    else {
        console.log('Scroll down');
        window.onwheel = null;
        
    }
}

