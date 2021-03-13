module.exports = function check(str, bracketsConfig) {
    let brackets = {}
    let stack = []
    for (const iterator of bracketsConfig) {
        brackets[iterator[0]] = iterator[1];
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == brackets[stack[stack.length - 1]]) {
            stack.pop()
        } else {
            stack.push(str[i])
        }
    }
    return stack.length == 0;
}
