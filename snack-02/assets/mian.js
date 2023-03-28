const text1 = prompt('inserisci la prima parola');
const text2 = prompt('inserisci la seconda parola');

if( text1.length === text2.length ){
    console.log('le parole sono uguali')
}
else if( text1.length < text2.length ){
    console.log('la prima parola è più corta')
}
else {
    console.log('la prima parola è più lunga')
}