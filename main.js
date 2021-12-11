//Array
// const myCar = ['BMW', 'Mazda', 'Toyota'];

//looping for
// for (let i = 0; i < myCar.length; i++) {
//     console.log(myCar[i]);
// }

//concat
// const div_user = document.getElementById('user');
// const user_logged = "Arta";
// div_user.innerHTML = `Hi, ${user_logged}, Apa Kabar?`

//Object Literal
// const cart_items = document.getElementById("cart");

// function addProduct(name, category) {
//     return {
//         name,
//         category
//     }
// }

// let getProduct = addProduct("iPhone 13", "Gadget");
// cart_items.innerHTML = `Product : ${getProduct.name} Category : ${getProduct.category}`


//Array ForEach
// const skills_holder = document.getElementById("skills");

// const yourSkills = ['UX Design', 'Mobile Development', 'Web Development'];

// yourSkills.push('Graphic Design');

// let parent = '<ul>';

// yourSkills.forEach((skill) => {
//     parent += '<li>' + skill + '</li>';
//     console.log(`${skill}`);
// });

// parent += '</ul>';

// skills_holder.innerHTML = parent;

//Map
// const skills_holder = document.getElementById("skills");

// const yourSkills = ['UX Design', 'Mobile Development', 'Web Development'];

// yourSkills.push('Graphic Design');

// const printSkills = yourSkills.map(skill => {
//     return skill;
// });

// skills_holder.innerHTML = printSkills;

//Filter
// const skills_holder = document.getElementById("skills");

// const yourSkills = ['UX Design', 'Mobile Development', 'Web Development'];

// const primarySkill = yourSkills.filter(skill =>
//     {
//         return skill !== "Web Development"
//     });

// console.log(primarySkill);
// skills_holder.innerHTML = primarySkill;

//Class
// const data = document.getElementById('data');

// class Siswa {
//     constructor(username, password, id_kelas){
//         this.username = username;
//         this.password = password;
//         this.id_kelas = id_kelas;
//     }

//     gabung(){
//         console.log(this.username + ' telah bergabung di kelas ' + this.id_kelas);
//     }

// }

// let tambahSiswa = new Siswa('Arta', '94019401', 29);
// tambahSiswa.gabung();

//Inheritance
// const data = document.getElementById('data');

// class Siswa {
//     constructor(username, password, nama_kelas){
//         this.username = username;
//         this.password = password;
//         this.nama_kelas = nama_kelas;
//     }

//     gabung(){
//         console.log(this.username + ' telah bergabung di kelas ' + this.nama_kelas);
//     }

// }

// class Langganan extends Siswa {
//     constructor(username, paket) {
//         super(username);
//         this.paket = paket;
//     }

//     gabungPaket(){
//         console.log('Hi ' + this.username +  ' telah berlangganan paket ' + this.paket);        
//     }
// }

// let tambahLangganan = new Langganan('Arta', 'Premium');
// tambahLangganan.gabungPaket();
