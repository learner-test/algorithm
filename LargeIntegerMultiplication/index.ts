class LIMultiplication {
    num1: number;
    num2: number;
    isPositive: boolean;
    constructor(num1: number, num2: number) {
        this.num1 = num1
        this.num2 = num2
        this.isPositive = true
    }
    normalMul(): number {
        return this.num1 * this.num2
    }
    lIMul(): number {
        let isPositive = 1
        if((this.num1 < 0 && this.num2 > 0) || (this.num1 > 0 && this.num2 < 0)) {
            isPositive = -1
        }
        return isPositive * this.mul(Math.abs(this.num1), Math.abs(this.num2))
    }
    private mul(num1: number, num2: number): number {
        let len1 = (num1 + '').length
        let len2 = (num2 + '').length
        if(len1 > 1 && len2 > 1) {
            let mul1 = Math.floor(len1 / 2)
            let mul2 = Math.floor(len2 / 2)
            let A = Math.floor(num1 / Math.pow(10, mul1))
            let B = num1 % Math.pow(10, mul1)
            let C = Math.floor(num2 / Math.pow(10, mul2))
            let D = num2 % Math.pow(10, mul2)        
            return this.mul(A, C) * Math.pow(10, mul1 + mul2) + this.mul(A, D) * Math.pow(10, mul1) + this.mul(B, C) * Math.pow(10, mul2) + this.mul(B, D)
        }
        return num1 * num2
    }
}