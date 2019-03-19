class Strassen {
    row1: number;
    col1: number;
    col2: number;
    strassen1: number[][];
    strassen2: number[][];
    constructor(row1 = 0, col1 = 0, col2 = 0) {
        this.row1= row1
        this.col1 = col1
        this.col2 = col2
    }
    setStrassen(row1: number, col1: number, col2: number) {
        this.row1 = row1
        this.col1 = col1
        this.col2 = col2
        this.strassen1 = this.randomStrassen(this.row1, this.col1)
        this.strassen2 = this.randomStrassen(this.col1, this.col2)
    }
    randomStrassen(num1: number, num2: number): number[][] {
        let arr = []
        for(let i = 0; i < num1; i++) {
            arr[i] = []
            for(let j = 0; j < num2; j++) {
                arr[i][j] = Math.ceil(Math.random() * 10)
            }
        }
        return arr
    }
    norCalculation(): number[][] {
        let arr = []
        for(let i = 0; i < this.row1; i++) {
            arr[i] = []
            for(let j = 0; j < this.col2; j++) {
                let strassen =  this.strassen1[i].map((item, index) => {
                    return item * this.strassen2[index][j]
                })
                arr[i][j] = strassen.reduce((cur, next) => {
                    return cur + next
                })
            }
        }
        console.log(arr)
        return arr
    }
    calculation () {

    }
}