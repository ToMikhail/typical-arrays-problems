exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let tmp = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] < tmp) {
                tmp = array[i];
            }
        }
        return tmp;
    }
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let tmp = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] > tmp) {
                tmp = array[i];
            }
        }
        return tmp;
    }
}



exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let tmp = 0;
        let result;

        for (let i = 0; i < array.length; i++) {
            tmp += array[i];
        }

        result = tmp / array.length;
        return result;
    }
}
