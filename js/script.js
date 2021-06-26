
function input(e) {
    charTable = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","a","b","c","d","e","f"]
    let id = e.id;
    const value = e.value;
    console.log(id, e.value)
    const resultId = id + "-result"
    if(charTable.includes(value[0])&&charTable.includes(value[1])){
        var valueLenght = value.length;
        if(valueLenght==2){
           document.getElementById(resultId).innerHTML = value;
        }
        else if(valueLenght==1){
            document.getElementById(resultId).innerHTML = "0" + value;
        }
        else if(valueLenght==null){
            document.getElementById(resultId).innerHTML = "00";
        }
    }
}

function MOV(){

    // Zmienne wyboru
    let firstReg = document.getElementsByClassName('firstReg')[0].value;
    let secondReg = document.getElementsByClassName('secondReg')[0].value;

    // Zmienne wyniku
    let ah = document.getElementById('ah-result').innerText;
    let al = document.getElementById('al-result').innerText;
    let bh = document.getElementById('bh-result').innerText;
    let bl = document.getElementById('bl-result').innerText;
    let ch = document.getElementById('ch-result').innerText;
    let cl = document.getElementById('cl-result').innerText;
    let dh = document.getElementById('dh-result').innerText;
    let dl = document.getElementById('dl-result').innerText;
    // AX1
    if(firstReg == 'ax1' && secondReg == 'ax2') // Jeśli jest ten sam
    {
        alert("Wybierz różne rejestry")
    }
    else if(firstReg == 'ax1' && secondReg == 'bx2') // Z AX do BX
    {
        document.getElementById('bh-result').textContent = ah;
        document.getElementById('bl-result').textContent = al;
    }
    else if(firstReg =='ax1' && secondReg =="cx2") // Z AX do CX
    {
        document.getElementById('ch-result').textContent = ah;
        document.getElementById('cl-result').textContent = al;
    }
    else if(firstReg =='ax1' && secondReg =="dx2") // Z AX do DX
    {
        document.getElementById('dh-result').textContent = ah;
        document.getElementById('dl-result').textContent = al;
    }
    // BX1
    if(firstReg == 'bx1' && secondReg == 'ax2') // Z BX do AX
    {
        document.getElementById('ah-result').textContent = bh;
        document.getElementById('al-result').textContent = bl;
    }
    else if(firstReg == 'bx1' && secondReg == 'bx2') // Jeśli jest ten sam
    {
        alert("Wybierz różne rejestry")
    }
    else if(firstReg =='bx1' && secondReg =="cx2") // Z BX do CX
    {
        document.getElementById('ch-result').textContent = bh;
        document.getElementById('cl-result').textContent = bl;
    }
    else if(firstReg =='bx1' && secondReg =="dx2") // Z BX do DX
    {
        document.getElementById('dh-result').textContent = bh;
        document.getElementById('dl-result').textContent = bl;
    }
    // CX1
    if(firstReg == 'cx1' && secondReg == 'ax2') // Z CX do AX
    {
        document.getElementById('ah-result').textContent = ch;
        document.getElementById('al-result').textContent = cl;
    }
    else if(firstReg == 'cx1' && secondReg == 'bx2') // Z CX do BX
    {
        document.getElementById('bh-result').textContent = ch;
        document.getElementById('bl-result').textContent = cl;
    }
    else if(firstReg =='cx1' && secondReg =="cx2") // Jeśli jest ten sam
    {
        alert("Wybierz różne rejestry")
    }
    else if(firstReg =='cx1' && secondReg =="dx2") // Z CX do DX
    {
        document.getElementById('dh-result').textContent = ch;
        document.getElementById('dl-result').textContent = cl;
    }
    // DX1
    if(firstReg == 'dx1' && secondReg == 'ax2') // Z DX do AX
    {
        document.getElementById('ah-result').textContent = dh;
        document.getElementById('al-result').textContent = dl;
    }
    else if(firstReg == 'dx1' && secondReg == 'bx2') // Z DX do BX
    {
        document.getElementById('bh-result').textContent = dh;
        document.getElementById('bl-result').textContent = dl;
    }
    else if(firstReg =='dx1' && secondReg =="cx2") // Z DX do CX
    {
        document.getElementById('ch-result').textContent = dh;
        document.getElementById('cl-result').textContent = dl;
    }
    else if(firstReg =='dx1' && secondReg =="dx2") // Jeśli jest ten sam
    {
        alert("Wybierz różne rejestry")
    }
}
function XCHG()
{
    // Zmienne wyboru
    let firstReg = document.getElementsByClassName('firstReg')[0].value;
    let secondReg = document.getElementsByClassName('secondReg')[0].value;

    // Zmienne wyniku
    let ah = document.getElementById('ah-result').innerText;
    let al = document.getElementById('al-result').innerText;
    let bh = document.getElementById('bh-result').innerText;
    let bl = document.getElementById('bl-result').innerText;
    let ch = document.getElementById('ch-result').innerText;
    let cl = document.getElementById('cl-result').innerText;
    let dh = document.getElementById('dh-result').innerText;
    let dl = document.getElementById('dl-result').innerText;
    //AX1
    if(firstReg == 'ax1' && secondReg == 'ax2')
    {
        alert("Wybierz różne rejestry")
    }
    else if(firstReg == 'ax1' && secondReg == 'bx2')
    {
        document.getElementById('bh-result').textContent = ah;
        document.getElementById('bl-result').textContent = al;
        document.getElementById('ah-result').textContent = bh;
        document.getElementById('al-result').textContent = bl;
    }
    else if(firstReg == 'ax1' && secondReg == 'cx2')
    {
        document.getElementById('ch-result').textContent = ah;
        document.getElementById('cl-result').textContent = al;
        document.getElementById('ah-result').textContent = ch;
        document.getElementById('al-result').textContent = cl;
    }
    else if(firstReg == 'ax1' && secondReg == 'dx2')
    {
        document.getElementById('dh-result').textContent = ah;
        document.getElementById('dl-result').textContent = al;
        document.getElementById('ah-result').textContent = dh;
        document.getElementById('al-result').textContent = dl;
    }

    //BX1
    if(firstReg == 'bx1' && secondReg == 'ax2')
    {
        document.getElementById('ah-result').textContent = bh;
        document.getElementById('al-result').textContent = bl;
        document.getElementById('bh-result').textContent = ah;
        document.getElementById('bl-result').textContent = al;
    }
    else if(firstReg == 'bx1' && secondReg == 'bx2')
    {
        alert("Wybierz różne rejestry")
    }
    else if(firstReg == 'bx1' && secondReg == 'cx2')
    {
        document.getElementById('ch-result').textContent = bh;
        document.getElementById('cl-result').textContent = bl;
        document.getElementById('bh-result').textContent = ch;
        document.getElementById('bl-result').textContent = cl;
    }
    else if(firstReg == 'bx1' && secondReg == 'dx2')
    {
        document.getElementById('dh-result').textContent = bh;
        document.getElementById('dl-result').textContent = bl;
        document.getElementById('bh-result').textContent = dh;
        document.getElementById('bl-result').textContent = dl;
    }

    //CX1
    if(firstReg == 'cx1' && secondReg == 'ax2')
    {
        document.getElementById('ah-result').textContent = ch;
        document.getElementById('al-result').textContent = cl;
        document.getElementById('ch-result').textContent = ah;
        document.getElementById('cl-result').textContent = al;
    }
    else if(firstReg == 'cx1' && secondReg == 'bx2')
    {
        document.getElementById('bh-result').textContent = ch;
        document.getElementById('bl-result').textContent = cl;
        document.getElementById('ch-result').textContent = bh;
        document.getElementById('cl-result').textContent = bl;
    }
    else if(firstReg == 'cx1' && secondReg == 'cx2')
    {
        alert("Wybierz różne rejestry")
    }
    else if(firstReg == 'cx1' && secondReg == 'dx2')
    {
        document.getElementById('dh-result').textContent = ch;
        document.getElementById('dl-result').textContent = cl;
        document.getElementById('ch-result').textContent = dh;
        document.getElementById('cl-result').textContent = dl;
    }

    //DX1
    if(firstReg == 'dx1' && secondReg == 'ax2')
    {
        document.getElementById('ah-result').textContent = dh;
        document.getElementById('al-result').textContent = dl;
        document.getElementById('dh-result').textContent = ah;
        document.getElementById('dl-result').textContent = al;
    }
    else if(firstReg == 'dx1' && secondReg == 'bx2')
    {
        document.getElementById('bh-result').textContent = dh;
        document.getElementById('bl-result').textContent = dl;
        document.getElementById('dh-result').textContent = bh;
        document.getElementById('dl-result').textContent = bl;
    }
    else if(firstReg == 'dx1' && secondReg == 'cx2')
    {
        document.getElementById('ch-result').textContent = dh;
        document.getElementById('cl-result').textContent = dl;
        document.getElementById('dh-result').textContent = ch;
        document.getElementById('dl-result').textContent = cl;
    }
    else if(firstReg == 'dx1' && secondReg == 'dx2')
    {
        alert("Wybierz różne rejestry")
    }
}

function setToEmpty(){
    document.getElementById('ah-result').textContent = "00";
    document.getElementById('al-result').textContent = "00";
    document.getElementById('bh-result').textContent = "00";
    document.getElementById('bl-result').textContent = "00";
    document.getElementById('ch-result').textContent = "00";
    document.getElementById('cl-result').textContent = "00";
    document.getElementById('dh-result').textContent = "00";
    document.getElementById('dl-result').textContent = "00";
}

function randomize(charArray) {
    var currentChar = charArray.length,  randomChar;

    while (0 !== currentChar) {
      randomChar = Math.floor(Math.random() * currentChar);
      currentChar--;
      [charArray[currentChar], charArray[randomChar]] = [
        charArray[randomChar], charArray[currentChar]];
    }

    return charArray;
}
function setToRandom(){
    charTable = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"]
    randomize(charTable);
    document.getElementById('ah-result').textContent = charTable[0] + charTable[1];
    randomize(charTable);
    document.getElementById('al-result').textContent = charTable[0] + charTable[1];
    randomize(charTable);
    document.getElementById('bh-result').textContent = charTable[0] + charTable[1];
    randomize(charTable);
    document.getElementById('bl-result').textContent = charTable[0] + charTable[1];
    randomize(charTable);
    document.getElementById('ch-result').textContent = charTable[0] + charTable[1];
    randomize(charTable);
    document.getElementById('cl-result').textContent = charTable[0] + charTable[1];
    randomize(charTable);
    document.getElementById('dh-result').textContent = charTable[0] + charTable[1];
    randomize(charTable);
    document.getElementById('dl-result').textContent = charTable[0] + charTable[1];
}