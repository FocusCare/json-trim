module.exports = function(json) {
    if (!json) {
        return json;
    }
    var str = JSON.stringify(json);
    var leftReg = /\"\s+/g;
    var rightReg = /\s+\"/g;
    str = str.replace(leftReg, '"').replace(rightReg, '"');
    try {
        return JSON.parse(str);
    } catch (e) {
        return json;
    }
}
