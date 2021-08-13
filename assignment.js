// Question -- 1 -- Sum o natural numbers.
function sumOfNNaturalNumbers(num) {
    var sum = 0;

    while (i <= num) {
        sum += i;
        i++;
    }
    return sum;
}

// Question -- 2 -- Even or not.
function checkEven(num) {
    if (num % 2 == 0) {
        return 'Even';
    }
    else {
        return 'Not Even'
    }

}

// Question -- 3 -- Prime or not.
function checkPrime(num) {
    if (num === 1) {
        return '1 is neither prime nor composite.'
    }
    else if (num === 2) {
        return 'Prime'
    }
    else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return 'Not Prime'
            }
            return 'Prime'
        }
    }
    else {
        return 'Please enter a valid number'
    }
}

// Question -- 4 -- Week Day using SWITCH case.
function weekDaySC(num) {
    var res = '';
    switch (num) {
        case 1: res = 'Monday';
            break;
        case 2: res = 'Tuesday';
            break;
        case 3: res = 'Wednesday';
            break;
        case 4: res = 'Thursday';
            break;
        case 5: res = 'Friday';
            break;
        case 6: res = 'Saturday';
            break;
        case 7: res = 'Sunday'
            break;

        default: res = 'Invalid Input';
    }
    return res;
}

// Question -- 5 -- Week Day using IF ELSE.
function weekDay(num) {
    if (num === 1) {
        return 'Monday';
    }
    else if (num === 2) {
        return 'Tuesday';
    }
    else if (num === 3) {
        return 'Wednesday';
    }
    else if (num === 4) {
        return 'Thursday';
    }
    else if (num === 5) {
        return 'Friday';
    }
    else if (num === 6) {
        return 'Saturday';
    }
    else if (num === 7) {
        return 'Sunday';
    }
    else {
        return 'Invalid Input';
    }
}

// Question -- 6 -- Week Day using Ternary Operator.
function weekDay(num) {
    var day = (num === 1) ? 'Monday' : (num === 2) ? 'Tuesday' :
        (num === 3) ? 'Wednesday' : (num === 4) ? 'Thursday' :
            (num === 5) ? 'Friday' : (num === 6) ? 'Saturday' :
                (num === 7) ? 'Sunday' : 'Invalid Input';
    return day;
}

// Question -- 7 -- Search element in Array
function arraySearch(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return 'Found';
        }
    }
    return 'Not Found';
}

// Question -- 8 -- Max in Array
function maxElement(arr) {

    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}
// Question -- 9 -- Min in Array
function maxElement(arr) {

    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}

// Question -- 10 -- Factorial of N
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else return (n * (factorial - 1));

}
// Question -- 11 -- Reverse an Array
function reverseArray(arr) {
    var reverseArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

// Question -- 12 -- Reverse a String
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// Question -- 13 -- Remove duplicate chars in the String
function removeDuplicate(str) {
    var index = 0;
    for (var i = 0; i; i++) {
        for (var j = 0; j < i; j++) {
            if (str[i] == str[j]) {
                break;
            }
        }
        if (j == i) {
            str[index++] = str[i];
        }
    }
    return str.join("").slice(str, index);
}

// Question -- 14 -- Palindrome Number
function Palindrome(num) {
    var rem, temp, final = 0;

    temp = num;
    while (num > 0) {
        rem = num % 10;
        num = parseInt(num / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        return 'The inputed number is Palindrome';
    }
    else {
        return 'not palindrome';
    }
}


// Question -- 15 -- Palindrome String
function checkPalindrome(str) {
    var len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'not palindrome';
        }
    }
    return 'palindrome';
}

// Question -- 16 -- Numbers of Words in String
function countWords(str) {
    return str.split(' ').lenght;
}

// Question -- 17 -- Number of days in Month
function daysInMonth(year, month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dayCount = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dayCount = 30;
            break;
        case 2:
            if (((year % 4 == 0) && !(year % 100 == 0))
                || (year % 400 == 0))
                dayCount = 29;
            else
                dayCount = 28;
            break;
        default:
            dayCount = 'Invalid Year or Month';
    }
}


// Question -- 18 -- 0, -ve or +ve Number using Switch Case
// function checkNumber(num) {
//     var numType = ' ';
//     switch (num) {
//         case 0: numType = '0 - Zero';

//     }
// }


// Question -- 19 -- Even or Not

// Same as question number 2. Please refer Question 2.

// Question -- 20 -- Even or Not using Switch Case
function checkEvenSC(num) {
    res = ' ';
    switch (num % 2) {
        case 0:
            res = 'Even';
            break;
        case 1:
            res = 'Not Even';
            break;
        default:
            return 'Invalid Input';
    }
}

// Question -- 21 -- Reverse word in String
function myFunction(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
};

// Question -- 22 -- Count the occurance of a char in the given string
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count += 1;
        }
    }
    return count;
}