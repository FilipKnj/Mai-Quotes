const c = console.log.bind(document);
const quotes = document.querySelector('.quotes');

const createBtns = () => {
    let div = `<div class='quote'></div>`;

    for(let i = 0; i < 24; i++){
        quotes.innerHTML += div
    }
};

createBtns();

const btns = document.querySelectorAll('.quote');

let quotesArr = ['her eyes','her smile','her personality','her kindness','her voice','her reassurance','her honesty','her beauty','her humor','her complement','her huge heart',"she's adorable","she's respectful","she's herself","she's understanding","shes's pretty","she's perfect","she's caring","she's kind hearted","she's protective","she's not judgmental","she makes me happy","she listens to me","she shows she cares",];



const fillBtn = () => {

    for (let i = 0; i < quotesArr.length; i++) {        
        btns[i].innerText = quotesArr[i];
    }

};

fillBtn();

const showQuote = e => {
    e.target.style.color = `#C98474`
    quotesArr.pop();
    if(quotesArr.length === 0){
        document.querySelectorAll('.title-moon').forEach(moon => {
            moon.style.opacity = `1`;
        })
    }
}

btns.forEach(btn => {
    btn.addEventListener('click',showQuote);
})