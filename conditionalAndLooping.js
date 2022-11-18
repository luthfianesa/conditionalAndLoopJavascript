  //  Kondisi :
// pintar, cantik, seiman
//pinter tapi gaseiman, gajadi nikah
// cantik tapi gaseiman, gajadi nikah
// pintar dan seiman, jadi nikah
// cantk dan seiman, gajadi nikah


const smart = true
const beautiful = true
const sameReligion = true

if (smart === true && sameReligion === true) {
  console.log('Jadi nikah');
}  else {
  console.log('Gak jadi nikah');
}
console.log('\n');
  
// Indonesia merdeka 1945 

  //  Test Case
// let tahunSekarang = 2022
// let tahunSekarang = 1945
let tahunSekarang = 'Tan Malaka'

if (tahunSekarang >= 1945) {
  console.log('Ini tahun ketika Indonesia sudah merdeka');
} else if (tahunSekarang < 1945) {
  console.log('Ini tahun ketika Indonesia belum merdeka');
} else {
  console.log('Tipe data bukan angka');
}
console.log('\n');




// > 80 Excelent
// >= 60 Good job
// >= 50 Ngulang
// else tidak naik kelas

// Excelent
let nilai = 81

// Good job
// let nilai = 80
// let nilai = 60

// Ngulang
// let nilai = 59
// let nilai = 50

// Tidak naik kelas
// let nilai = 40

if (nilai > 80) {
  console.log('Excelent!');
} else if (nilai >= 60) {
  console.log('Good Job');
} else if (nilai >= 50) {
  console.log('Ngulang');
} else {
  console.log('Tidak Naik Kelas!!!');
}
console.log('\n');



  // Buat fungsi fizzbuzz mengguakan if-else
// Nomor habis dibagi 3 keluarin Fizz, 5 Buzz, 3 & 5 FizzBuzz
function fizzbuzz(number) {
  let result = ''
  if (number % 3 === 0 && number % 5 === 0) {
     result = `Angka ${number} adalah Fizzbuzz`;
  } else if (number % 3 === 0) {
     result = `Angka ${number} adalah Fizz`;
  } else if (number % 5 === 0) {
     result = `Angka ${number} adalah Buzz`;
  } else {
    result = number
  }
  return result
}

//  0 special case
console.log(fizzbuzz(0));
console.log('\n');

// Fizz
const fizz3 = fizzbuzz(3)
console.log(fizz3);
const fizz6 = fizzbuzz(6)
console.log(fizz6);
const fizz9 = fizzbuzz(9)
console.log(fizz9);
console.log('\n');

// Buzz
const buzz5 = fizzbuzz(5)
console.log(buzz5);
const buzz10 = fizzbuzz(10)
console.log(buzz10);
const buzz20 = fizzbuzz(20)
console.log(buzz20);
console.log('\n');

// Fizzbuzz
const fizzbuzz15 = fizzbuzz(15)
console.log(fizzbuzz15);
const fizzbuzz30 = fizzbuzz(30)
console.log(fizzbuzz30);
const fizzbuzz45 = fizzbuzz(45)
console.log(fizzbuzz45);
console.log('\n');

// Guru => Mengajar
// Pelaut => Berlayar
// Polisi => Mengatur Lalu Lintas
// Selebihnya => Gatau Ngapain

let profession = 'Pesulap Merah'

switch (profession) {
  case 'Guru':
    console.log('Mengajar')
    break;
  case 'Pelaut':
    console.log('Berlayar')
    break;
  case 'Police':
    console.log('Mengatur Lalu Lintas')
    break;

  default :
    console.log('Gatau Ngapain')
    break;
}
console.log('\n');

// let kondisiPerut = 'Lapar'
// let kondisiPerut = 'Perut Kosong'
// let kondisiPerut = 'Perut Penuh'
let kondisiPerut = 'Kram'

switch (kondisiPerut) {
  case 'Lapar':
    console.log('Makan')
    break;
  case 'Perut Kosong':
    console.log('Asam Lambung Naik')
    break;
  case 'Perut Penuh':
    console.log('Ngantuk')
    break;

  default :
    console.log('Tidur')
    break;
}
console.log('\n');

  // Ternary Operator
// Kondisi button bisa true bisa false
// Kalo button true -> Tampilkan sidebar
// Kalo false -> Hilangin sidebar


let button = true;
// let button = false;

// Disimpan di Variabel
let result = button  ? 'Tampilkan Sidebar' :  'Hilangkan Sidebar';
console.log(result);

// Tanpa Variabel
button  ? console.log('Tampilkan Sidebar') :  console.log('Hilangkan Sidebar');
console.log('\n');

// Dimasukkan ke dalam function
function buttonFunction(button) {
  return button ? 'Tampilkan Sidebar' : 'Hilangkan Sidebar';
}

console.log(buttonFunction(true))
console.log(buttonFunction(false))
console.log('\n');

  // Looping
let value = -5;
// Cetak Nomor 5 Sampe -5
for (let i = 5; i >= value ; i--) {
  console.log(i);
}

  // Proses Looping 
// 5 - 1 = 4
// 4 - 1 = 3
// 3 - 1 = 2
// 2 - 1 = 1
// 1 - 1 = 0
// 0 - 1 = -1
// -1 - 1 = -2
// -2 - 1 = -3
// -3 - 1 = -4
// -4 - 1 = -5
console.log('\n');



// Cetak Nomor Kelipatan 2
let limit = 20

for (let i = 2; i <= limit; i = i+2) {
  console.log(i);
}

// Cetak Nomor Kelipatan 2 pake if
for (let i = 2; i <= limit; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log('\n');

// Cetak No 1 - 15
// Habis dibagi 3 & 5 = > FizzBuzz
// Habis dibagi 3 = > Fizz
// Habis dibagi 5 = > Buzz
// Jika tidak ada = > Keluarin Angkanya

let limitNum = 15;

// Cetak angka FizzBuzz Menggunakan Looping dan If
for (let i = 1; i <= limitNum; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
     console.log(`Angka ${i} adalah Fizzbuzz`);
  } else if (i % 3 === 0) {
     console.log(`Angka ${i} adalah Fizz`);
  } else if (i % 5 === 0) {
     console.log(`Angka ${i} adalah Buzz`);
  } else {
    console.log(`Ini angka ${i}`);
  }
}
console.log('\n');

  // Fungsi FizzBuzz Tanpa Return
// function fizzBuzz(startingNumber, endNumber) {
//   for (let i = startingNumber; i <= endNumber; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//        console.log(`Angka ${i} adalah Fizzbuzz`);
//     } else if (i % 3 === 0) {
//        console.log(`Angka ${i} adalah Fizz`);
//     } else if (i % 5 === 0) {
//        console.log(`Angka ${i} adalah Buzz`);
//     } else {
//        console.log(`Ini angka ${i}`);
//     }
//   }
// }

// console.log(fizzBuzz(1, 15));

  // Fungsi fizzbuzz menggunakan looping dan if 
function fizzBuzz(startingNumber, endNumber) {
  for (let i = startingNumber; i <= endNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
       console.log(`Angka ${i} adalah Fizzbuzz`);
    } else if (i % 3 === 0) {
       console.log(`Angka ${i} adalah Fizz`);
    } else if (i % 5 === 0) {
       console.log(`Angka ${i} adalah Buzz`);
    } else {
       console.log(`Ini angka ${i}`);
    }
  }
  return '\n'
}

console.log(fizzBuzz(1, 15));
console.log('\n');

  //  Nested Loop
  // Expected Output
// putaran 1 pushup 1
// putaran 1 pushup 2
// putaran 1 pushup 3
// putaran 1 pushup 4
// putaran 2 pushup 1
// putaran 2 pushup 2
// putaran 2 pushup 3
// putaran 2 pushup 4

let putaran = 2;
let pushUp = 4

for (let i = 1; i <= putaran; i++) {
  for (let j = 1; j <= pushUp; j++) {
    console.log('Putaran i ke ', i , ' Pushup j ke ', j);
  }
}