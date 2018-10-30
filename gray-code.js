/**
 * 89 (monday 11/4)
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let results;
    const findGrayCode = (array = [0]) => {
        if (array.length === 1 << n) {
            return results = array;
        }
        const num = array[array.length - 1];
        const options = [];
        for (let i = 0; i < n; i += 1) {
            options.push(num ^ (1 << i));
        };
        options.forEach(elem => {
            if (!array.includes(elem)) {
                const temp = array.slice();
                temp.push(elem);
                findGrayCode(temp);
            }
        });
    };
    findGrayCode();
};

console.log(grayCode(3));
