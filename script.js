let  estimate = 0;
let answer = '';
const grinning_face = "\u{1F600}";
const disappointed_face = "\u{1F61E}";
const estimate_value = 10;

if (window.confirm("Хочеш пройти тест?")){
    alert(`Погнали${grinning_face}`)
    answer = window.prompt('Скільки буде 2+2?')
    if(answer == 4){
        estimate += estimate_value;
    }
    answer = window.prompt('Скільки буде 5 / 0?')
    if(answer == 'На 0 ділити не можна'){
        estimate += estimate_value;
    }
    answer = window.prompt('Сонце встає на сході?(так/ні)')
    if(answer == 'так'){
        estimate += estimate_value;
    }
    answer = window.prompt('Якого кольору небо?')
    if(answer == "блакитного"){
        estimate += estimate_value;
    }
    answer = window.prompt('Яка правильна відповідь на головне питання життя, всесвіту та всього такого?')
    if(answer == 42){
        estimate += estimate_value;
    }
    alert("Your estimate is "+ estimate);
}
else {
    alert(`Bye${disappointed_face}`)
}
