// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || !matrix.length) {
        return [];
    }
    return matrix.reduce((acc, curr, index) => {
        const sortedArr = index % 2 === 0 ? curr : curr.reverse();
        return acc.concat(sortedArr);
    }, []);
};
