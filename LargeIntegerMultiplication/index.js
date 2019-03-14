var LIMultiplication = /** @class */ (function () {
    function LIMultiplication(num1, num2) {
        if (num1 === void 0) { num1 = 0; }
        if (num2 === void 0) { num2 = 0; }
        this.num1 = num1;
        this.num2 = num2;
    }
    LIMultiplication.prototype.setNum = function (num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    };
    LIMultiplication.prototype.setNum1 = function (num) {
        this.num1 = num;
    };
    LIMultiplication.prototype.setNum2 = function (num) {
        this.num2 = num;
    };
    LIMultiplication.prototype.normalMul = function () {
        return this.num1 * this.num2;
    };
    LIMultiplication.prototype.lIMul = function () {
        var isPositive = 1;
        if ((this.num1 < 0 && this.num2 > 0) || (this.num1 > 0 && this.num2 < 0)) {
            isPositive = -1;
        }
        return isPositive * this.mul(Math.abs(this.num1), Math.abs(this.num2));
    };
    LIMultiplication.prototype.mul = function (num1, num2) {
        var len1 = (num1 + '').length;
        var len2 = (num2 + '').length;
        if (len1 > 1 && len2 > 1) {
            var mul1 = Math.floor(len1 / 2);
            var mul2 = Math.floor(len2 / 2);
            var A = Math.floor(num1 / Math.pow(10, mul1));
            var B = num1 % Math.pow(10, mul1);
            var C = Math.floor(num2 / Math.pow(10, mul2));
            var D = num2 % Math.pow(10, mul2);
            return this.mul(A, C) * Math.pow(10, mul1 + mul2) + this.mul(A, D) * Math.pow(10, mul1) + this.mul(B, C) * Math.pow(10, mul2) + this.mul(B, D);
        }
        return num1 * num2;
    };
    return LIMultiplication;
}());
