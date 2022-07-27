// 2 Calculeaza nota de plata

let tips = nota =>{
    if ( nota>=50 && nota ==800){
        let sumaTips = nota * 0.15;
        console.log(`Catalina va achita ${sumaTips + nota}`);
    } else if (nota>+800){
        let sumaTips = nota * 0.20;
        console.log(`Catalina va achita ${sumaTips + nota}`);
    }
}
tips(200);
tips(850);