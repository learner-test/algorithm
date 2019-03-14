class Strassen {
    row: number;
    col: number;
    strassen1: number[][];
    strassen2: number[][];
    constructor(row = 0, col = 0) {
        this.row = row
        this.col = col
    }
    resetStrassen(row: number, col: number) {
        this.strassen1 = this.randomStrassen(this.row, this.col)
        this.strassen2 = this.randomStrassen(this.col, this.row)
    }
    randomStrassen(num1: number, num2: number): number[][] {
        let arr = []
        for(let i = 0; i < num1; i++) {
            arr[i] = []
            for(let j = 0; j < num2; j++) {
                arr[i][j] = Math.ceil(Math.random() * 100)
            }
        }
        return arr
    }
}