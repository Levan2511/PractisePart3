'use strict';

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    //moneyPerDay = Math.round(appData.budget / 30),
    expenses: function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдется?", "");
    
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
                console.log ("done");
    
                appData.expenses[a] = b;
            } else {                            
                console.log ("bad result");
                i--;
            }
        }
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if(appData.savings === true){
            let savings = +prompt('Введите сумму збережений: ', '');
            let percent = +prompt('Введите процент по депозиту:', '');
            appData.monthIncome = savings/12/100 * percent;
    
            alert(`Ваши накопления за 1 месяц составят ${appData.monthIncome} рубля`);
        } else {
            alert('На Вашем счету нет сбережений.');
        }
    },
    optionalExpenses: function(){
        for(let i = 0; i < 3; i++) {
            let optionalExp = prompt('Введите статью необязательных расходов: ', '');
            appData.optionalExpenses[i] = optionalExp;
        }
    
        console.log(appData.optionalExpenses);
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if ( (!isNaN(Number(items)) && typeof(+items) === 'number' ) || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }
};

appData.chooseIncome();

console.log('Наша программа включает в себя данные:');
for(let objects in appData){
    console.log(objects);
}
