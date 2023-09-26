// let name = "zuhdi"
// let umur = 16
// const tanggal_lahir = "30 April 2006"
// let bb = 55
// let tb = 165
// let status = "pelajar"



// console.log(name,)
// console.log(umur)
// console.log(tanggal_lahir)
// console.log(bb)
// console.log(tb)
// console.log(status)

// let siswa1 = {
//     nis : "101",
//     nama : "zuhdi",
//     jurusan : "RPL"
// }

// let siswa2 = {
//     nis : "102",
//     nama : "jeko",
//     jurusan : "TKJ"
// }

// console.log(siswa1)



// aray
// let jurusan = ["Reekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]
// let tingkatan_kelas = [10,11,12]

// let siswa = [

//     {
//         nama: "zuhdi", jurusan: "RPL" 
//     },

//     {
//         nama: "ying", jurusan: "TKJ"
//     },

//     {
//         nama: "gopal", jurusan: "RPL"
//     }

// ]

// console.log(jurusan)

// jurusan.push("MultiMedia")

// console.log("jumlah jurusan = " +jurusan.length)
// console.log(jurusan)


// array objek
// let barang =[
//     {nama: "Rinso", harga: 99.999},
//     {nama: "sunlight", harga: 11.111}
// ]

// console.log("isi array")
// console.log(barang)
// console.log("jumlah sekarang: "+barang.length)

// console.log("------------------------")

// barang.push(
//     {nama: "molto", harga: 88.888}   
// )

// barang.splice(1,1, "molina")

// console.log("isi array sekarang")
// console.log(barang)
// console.log("jumlah yang baru: "+barang.length)


// let siswa = [

//     {nama: "zuhdi", jurusan: "RPL"},

//     {nama: "ying", jurusan: "TKJ" },

//     {nama: "gopal", jurusan: "RPL"}
// ]

// siswa.map(
//     (sis, index) => {
//         console.log(index+1 + " " + sis.nama + " " + sis.jurusan)
//     }
// )
    

function rps(pemain1, pemain2) {
    if (pemain1 == "batu" && pemain2 == "gunting") {
        console.log("pemain 1 menang")
    } 
    else if (pemain1 == "batu" && pemain2 == "kertas" ) {
        console.log("pemain 2 menang")
    }
    else if (pemain1 == "batu" && pemain2 == "batu" ) {
        console.log("seri")
    }
    else if (pemain1 == "gunting" && pemain2 == "batu" ) {
        console.log("pemain 2 menang")
    }
    else if (pemain1 == "gunting" && pemain2 == "kertas" ) {
        console.log("pemain 1 menang")
    }
    else if (pemain1 == "gunting" && pemain2 == "gunting" ) {
        console.log("seri")
    }
    else if (pemain1 == "kertas" && pemain2 == "gunting" ) {
        console.log("pemain 2 menang")
    }
    else if (pemain1 == "kertas" && pemain2 == "batu" ) {
        console.log("pemain 1 menang")
    }
    else if (pemain1 == "kertas" && pemain2 == "kertas" ) {
        console.log("seri")
    }
}
rps("kertas ", "batu")