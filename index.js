// function toRoman(num) {
//     var romawi = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
//     var arab = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
//     var res = "";
    
//     for (var i = 0; i < arab.length; i++) {
//         if(num >= arab[i]) {
//             res += romawi[i];
//             num -= arab[i];
//             //  console.log(num);
//             return res + toRoman(num);
//         }
//     }
//     return res;
// }

// function toRoman(num, i = 0) {
//     var romawi = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
//     var arab = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
//     var res = '';
//     if (num === 0) return '';
//     if (num - arab[i] >= 0) {
//         res += romawi[i];
//         num -= arab[i];
//     }
//     else i++;
//     return res += toRoman(num, i);
// }

// Drive code
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("——————|——————————|———————");
console.log("4     | IV       | ", toRoman(4));
console.log("9     | IX       | ", toRoman(9));
console.log("13    | XIII     | ", toRoman(13));
console.log("1453  | MCDLIII  | ", toRoman(1453));
console.log("1646  | MDCXLVI  | ", toRoman(1646));

//abaikan code dibawah ini
module.exports = toRoman
