// luas
let t = 5
let a = 7
let b = 11

let L = 1/2 * t * (a+b)

console.log("luas trapesium")
console.log("rumus luas trapesium : 1/2 * t * (a+b)")
console.log("luas : "+ L)

console.log("----------------------------------------------")

  
// keliling
let sisi_a = 5
let sisi_b = 5
let sisi_c = 10
let sisi_d = 6

let K = sisi_a + sisi_b + sisi_c + sisi_d

console.log("keliling Trapesium")
console.log("rumus keliling trapesium : S + S + S + S")
console.log("keliling : "+ K)

class trapesium{
    constructor(a,b,c,d,t){
        this.a = a
        this.b = b
        this.c = c
        this.d = d
        this.t = t
    }
    luas = () => {
        return 1/2 * (this.a+this.b) * this.t
    }
    keliling = () => {
        return this.a*this.b + this.b+this.c + this.c*this.d + this.d+this.a
    }
}

let hasil = new trapesium(5,2,6,8,4)
console.log("Luas = " + hasil.luas())
console.log("Keliling = " + hasil.keliling())