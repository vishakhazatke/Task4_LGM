let display = document.getElementById('calculate');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "undefined"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -100);
                }
                break;
            case 'log':
                try{
                    display.innerText=Math.log(display.innerText);
                } catch {
                    display.innerText = "undefined"
                }
                break;
            default:
                display.innerText += e.target.innerText;
                
        }
    });
});