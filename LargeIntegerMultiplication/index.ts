class LIM {
    num1: number;
    num2: number;
    constructor(num1: number, num2: number) {
        this.num1 = num1
        this.num2 = num2
    }
    normalMul(): number {
        return this.num1 * this.num2
    }
    lIMul(): number {
        return this.mul(this.num1, this.num2)
    }
    private mul(num1: number, num2: number): number {
        let len1 = (num1 + '').length
        let len2 = (num2 + '').length
        if(num1 === 0 || num2 === 0) {
            return 0
        } else if(len1 > 1) {
            if(len2 > 1) {

            } else {

            }
        } else {
            if(len2 > 1) {

            } else {

            }
        }
        return 1
    }
}