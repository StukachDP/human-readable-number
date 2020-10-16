module.exports = function toReadable(number) {
    let numberArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    let tenArray = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let moreTenArray = ['hundred', 'thousand'];
    let result = ' ';
    if (number < 20) {
        result = numberArray[number];
    } else {
        let part = number % 10;
        if (number < 100) {
            number = parseInt(number / 10);
            if (part === 0) {
                result = tenArray[number - 2];
            } else {
                result = tenArray[number - 2] + ' ' + numberArray[part];
            }
        } else {
            if (number % 100 < 20) {
                let partMoreTen = number % 100;
                number = parseInt(number / 100);
                if (partMoreTen === 0) {
                    result = numberArray[number] + ' ' + moreTenArray[0];
                } else {
                    result = numberArray[number] + ' ' + moreTenArray[0] + ' ' + numberArray[partMoreTen];
                }
            } else {
                let partMore = number % 10;
                let partMoreTen = parseInt(number / 10) % 10;
                number = parseInt(number / 100);
                if (partMore === 0) {
                    result = numberArray[number] + ' ' + moreTenArray[0] + ' ' + tenArray[partMoreTen - 2];
                } else {
                    result = numberArray[number] + ' ' + moreTenArray[0] + ' ' + tenArray[partMoreTen - 2] +
                        ' ' + numberArray[partMore];
                }
            }
        }
    }
    return result;
};
