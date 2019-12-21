function xo(str){
    jumlahX = 0;
    jumlahO = 0;

    for(i = 0; i < str.length; i++){
        if (str[i] === 'x'){
            jumlahX++;
        }else{
            jumlahO++;
        }
    }

    if (jumlahX === jumlahO){
        return true;
    }else{
        return false;
    }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));