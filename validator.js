let message_panel = document.getElementById("message-panel");
let panel_text = document.getElementById("panel-text");
let background = document.getElementById("bg");
let passcode = document.getElementById("input");

const congrat = "Поздравляем, вы успешно справились с нашими вступительными испытаниями.\n Вы доказали, что наш интерес к вам был в полной мере оправдан. Мы еще свяжемся с вами, новый кандидат в сотрудники лаборатории гаджетов будущего."

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function validate()
{
    if(passcode.value == "40102541013")
    {
        message_panel.style.height = "100%";
        background.style.top = "0";

        await sleep(2000);

        for (var symb in congrat)
        {
            panel_text.innerHTML += congrat[symb];
            await sleep(50);
        }

        await sleep(900);

        panel_text.innerHTML += "<br/><br/>";
        panel_text.innerHTML += "El Psy Congroo.";
    }
    else
    {
        alert("Код неверный!");
    }
}
