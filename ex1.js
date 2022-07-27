//Calculeaza BMI= greutate / inaltime * inaltime. Creaza o variabila boolean care sa determine daca BMI D>L
//1
let weightDima = 60;
let weightLuiza = 54;
let heightDima = 163;
let heightLuiza = 157;

//2
console.log("BMI-ul lui Dima este"   + weightDima/(heightDima*heightDima)*10000 + "kg/m^2" );
console.log("BMI-ul Luizei este"   + weightLuiza/(heightLuiza*heightLuiza)*10000 + "kg/m^2");
//3//4
let BMIdima = weightDima/(heightDima*heightDima);
let BMIluiza = weightLuiza/(heightLuiza*heightLuiza);
if(BMIdima > BMIluiza){
    console.log(`BMI-ul lui Dima ${BMIdima}  este mai mare decat al Luizei ${BMIluiza}`);
}else{
    console.log(`BMI-ul lui Dima ${BMIdima} este mai mic decat al Luizei ${BMIluiza}`);
}
