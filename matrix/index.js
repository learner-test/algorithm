var Strassen = /** @class */ (function () {
    function Strassen(row1, col1, col2) {
        if (row1 === void 0) { row1 = 0; }
        if (col1 === void 0) { col1 = 0; }
        if (col2 === void 0) { col2 = 0; }
        this.row1 = row1;
        this.col1 = col1;
        this.col2 = col2;
    }
    Strassen.prototype.setStrassen = function (row1, col1, col2) {
        this.row1 = row1;
        this.col1 = col1;
        this.col2 = col2;
        this.strassen1 = this.randomStrassen(this.row1, this.col1);
        this.strassen2 = this.randomStrassen(this.col1, this.col2);
    };
    Strassen.prototype.randomStrassen = function (num1, num2) {
        var arr = [];
        for (var i = 0; i < num1; i++) {
            arr[i] = [];
            for (var j = 0; j < num2; j++) {
                arr[i][j] = Math.ceil(Math.random() * 10);
            }
        }
        return arr;
    };
    Strassen.prototype.norCalculation = function () {
        var _this = this;
        var arr = [];
        for (var i = 0; i < this.row1; i++) {
            arr[i] = [];
            var _loop_1 = function (j) {
                var strassen = this_1.strassen1[i].map(function (item, index) {
                    return item * _this.strassen2[index][j];
                });
                arr[i][j] = strassen.reduce(function (cur, next) {
                    return cur + next;
                });
            };
            var this_1 = this;
            for (var j = 0; j < this.col2; j++) {
                _loop_1(j);
            }
        }
        console.log(arr);
        return arr;
    };
    Strassen.prototype.calculation = function () {
    };
    return Strassen;
}());
