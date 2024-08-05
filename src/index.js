// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];

    if (matrix == [] || !Array.isArray(matrix)) {
        return arr;
    }

    for (let i = 0; i < matrix.length; i++) {
        i % 2 !== 0 ? arr.push(...matrix[i].reverse()) : arr.push(...matrix[i]);
    }

    return arr;
};
