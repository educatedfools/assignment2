//PART 1---------------------------------------------------------

//STEP 1
//var nNumPrompt = window.prompt('Please enter a number');
//window.console.log(Math.abs(nNumPrompt));

//STEP 2
//var nRoundUp = window.prompt('Please enter a number with a decimal');
//window.console.log(Math.ceil(nRoundUp));

//STEP 3
//started using alert here as bringing up the console kills live preview and that got annoying fast.
//var nRoundUp = window.prompt('Please enter a number with a decimal');
//window.alert(Math.floor(nRoundUp));

//STEP 4
//var nCommaNum = window.prompt("Please enter a group of 5 numbers with a comma between each. I.E. 1,2,3,4,5");
//var nRemoveCommas = nCommaNum.split(",");
//var nMax = Math.max.apply(null, nRemoveCommas);
//var nMin = Math.min.apply(null, nRemoveCommas);
//window.alert("min is " + nMin + " and max is " + nMax);

//STEP 5
//var nSqRt = window.prompt("Please enter a number");
//window.alert(Math.sqrt(nSqRt));

//PART 2---------------------------------------------------------

//STEP 6
//var dGetDate = new Date();
//window.alert(dGetDate);

//STEP 7
//function dDaysInMonth(month, year) {
//    return new Date(year, month, 0).getDate();
//}
//window.alert(dDaysInMonth(6, 2016));

//STEP 8
//var dMonthNames = [
//        "January",
//        "February",
//        "March",
//        "April",
//        "May",
//        "June",
//        "July",
//        "August",
//        "September",
//        "October",
//        "November",
//        "December"
//    ];
//
//var dDate = new Date();
//window.alert(dMonthNames[dDate.getMonth()]);

//STEP 9
//var day = new Date();
//if (day.getDay === 0 || day.getDay === 6) {
//    window.alert("it's the weekend. go to the beach");
//} else {
//    window.alert('not the weekend. go to work.');
//}

//STEP 10
//var dDaysOfWeek = [
//        'Sunday',
//        'Monday',
//        'Tuesday',
//        'Wednesday',
//        'Thursday',
//        'Friday',
//        'Saturday'
//    ];
//var dYesterday = new Date();
//window.alert(dDaysOfWeek[dYesterday.getDay() - 1]);

//STEP 11
//var dDaysOfWeek = [
//        'Sunday',
//        'Monday',
//        'Tuesday',
//        'Wednesday',
//        'Thursday',
//        'Friday',
//        'Saturday'
//    ];
//
//var dDate = new Date();
//window.alert(dDaysOfWeek[dDate.getDay()].substring(0, 1));

//PART 3 --------------------------------------------------------

//STEP 12
//var x = window.prompt('Enter a number');
//var y = window.prompt('enter another number(not the same number)');
//if (x > y) {
//    window.alert(x);
//} else {
//    window.alert(y);
//}

//STEP 13
//var aNames = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
//var nPercents = [80, 77, 88, 95, 68];
//var nGrade = [];
//var i;
//for (i = 0; i < 5; i++) {
//    if (nPercents[i] >= 90) {
//        nGrade[i] = "A";
//    } else if (nPercents[i] >= 80) {
//        nGrade[i] = "B";
//    } else if (nPercents[i] >= 70) {
//        nGrade[i] = "C";
//    } else if (nPercents[i] <= 60) {
//        nGrade[i] = "D";
//    } else {
//        nGrade[i] = "F";
//    }
//    window.console.log(aNames[i] + ": " + nGrade[i]);
//}

//STEP 14
//var i;
//for (i = 1; i <= 15; i++) {
//    if (i % 2 === 0) {
//        window.console.log(i + ' is even');
//    } else {
//        window.console.log(i + ' is odd');
//    }
//}

//STEP 15
//var i;
//for (i = 1; i <= 100; i++) {
//    if (i % 3 === 0 && i % 5 === 0) {
//        window.console.log(i + ' is a fizzbuzz');
//    } else if (i % 3 === 0) {
//        window.console.log(i + ' is a fizz');
//    } else if (i % 5 === 0) {
//        window.console.log(i + ' is a buzz');
//    } else {
//        window.console.log(i);
//    }
//}

//PART 4

//STEP 1
//var nStartGame = window.confirm('Are you ready to play the game?');
//if (nStartGame === true) {
//    window.alert('Awesome, our hero is waiting!');
//} else {
//    window.alert('Too bad, we\'re going to play anyway because our hero desperately needs your help!');
//}

//STEP 2
//window.alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…');

//STEP 3
//var sDirectionChoice = window.prompt('Which direction would you like to head (please enter forward, left, or right).');

//STEP 4
//switch (sDirectionChoice) {
//case "forward":
//    window.alert('You walk about 100 yards and safely make your way out of the cave.');
//    break;
//case "left":
//    window.alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.');
//    break;
//case "right":
//    window.alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.');
//    break;
//default:
//    window.alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.');
//}

//STEP 5
//var nRateNum = window.prompt('Please rate my game on a scale of 1-10');
//if (nRateNum < 1 || nRateNum > 10 || isNaN(nRateNum)) {
//    nRateNum = 10;
//    window.alert('Very funny, you gave it a 10');
//} else if (nRateNum >= 6 && nRateNum <= 10) {
//    window.alert('Thank you, we will continue to make improvements to the game!');
//} else if (nRateNum >= 1 && nRateNum <= 5) {
//    window.alert('Whatever, you weren\'t very good at this game anyway!');
//} else {
//    window.alert('something is broken');
//}

//PART 5

//STEP 1-8
//var coinFlip = Math.floor(Math.random() * 20);
//var choice = window.prompt('Heads or Tails').toUpperCase();
//window.console.log(coinFlip);
//if (coinFlip >= 10) {
//    coinFlip = "HEADS";
//} else {
//    coinFlip = "TAILS";
//}
//
//if (choice === 'HEADS') {
//    if (coinFlip === "HEADS") {
//        window.alert('The flip was heads and you chose heads...you win!');
//    } else {
//        window.alert('The flip was tails but you chose heads...you lose!');
//    }
//}
//if (choice === 'TAILS') {
//    if (coinFlip === "TAILS") {
//        window.alert('The flip was heads but you chose tails...you lose!');
//    } else {
//        window.alert('The flip was tails and you chose tails...you win!');
//    }
//}

//PART 6

//STEP 1
//var coinFlip;

//STEP 2
//var i;
//for (i = 0; i < 10; i++) {
//STEP 3
//    coinFlip = Math.round(Math.random());
//STEP 4
//    if (coinFlip === 0) {
//        window.console.log('Heads');
//    } else {
//        window.console.log('Tails');
//    }
//}

//PART 7
//STEP 1
//var coinFlip;
//STEP 2

//do {
//STEP 3
//    coinFlip = Math.round(Math.random());
//STEP 4
//    if (coinFlip === 0) {
//        window.console.log('Heads');
//    } else {
//        window.console.log('Tails');
//    }
//STEP 5
//} while (coinFlip === 0);

//PART 8
//var i;
//var x = "";
//for (i = 1; i < 8; i++) {
//    x += "#";
//    window.console.log(x);
//}

//PART 9

//var i;
//for (i = 0; i <= 15; i++) {
//    if (i % 2 === 0) {
//        window.console.log(i + ' is even');
//    } else {
//        window.console.log(i + ' is odd');
//    }
//}





