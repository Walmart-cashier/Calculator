window.addEventListener('load', () => {

    let calDisplay = document.querySelector('.calDisplay');
    let calButtons = document.querySelectorAll('.calButton');

    let clearButton = document.querySelector('.clearButton');
    let num1, num2,op;
    clearButton.addEventListener('click', () => {
        calDisplay.textContent = " ";
    })

    calButtons.forEach((item) => {
        if (!(item.dataset.val == "=")) {
            if (!(item.dataset.val == "+" || item.dataset.val == "-" || item.dataset.val == "/" || item.dataset.val == "%" || item.dataset.val == "*")) {
                item.addEventListener('click', () => {
                    calDisplay.textContent += item.dataset.val;
                })
            } else {
                item.addEventListener('click', () => {
                    op = item.dataset.val;
                    num1 = calDisplay.textContent.trim();
                    calDisplay.textContent += item.dataset.val;
                })
            }

        } else {
            item.addEventListener('click', () => {
                num2 = calDisplay.textContent.match(/(?<=[\+\-\/\%\*]).*/g).join("");
                num1=parseInt(num1);
                num2=parseInt(num2);
                calculate(num1,num2,op);
            })

        }
    })


    function setDisplay(val) {
        calDisplay.textContent = val;
    }

    function calculate(a,b,c) {
        switch (c) {
            case '+':
                add(a, b);
                break;

            case '-':
                sub(a, b);
                break;

            case '/':
                div(a, b);
                break;

            case '%':
                rem(a, b);
                break;

            case '*':
                mul(a, b);
                break;
        }
    }

    function add(a, c) {
        setDisplay(a + c);
    }

    function sub(a, c) {
        setDisplay(a - c);
    }

    function div(a, c) {
        let val=a/c;
        setDisplay(val.toFixed(5));
    }

    function rem(a, c) {
        let val=a%c;
        setDisplay(parseFloat(val.toFixed(3)));
    }

    function mul(a, c) {
        setDisplay(a * c);
    }



let astr='4+5';
let newastr=astr.match(/(?<=[\+\-\/\%\*]).*/g).join("");
//console.log(newastr);


});
