const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  let sentence = expr.match(/.{10}/g);

  let decoded = sentence.map(el => {
    if (el.includes('*')) {
      return ' ';
    } else {
      let letter = el.slice(el.indexOf('1'));
      letter = letter.replace(/10/g, '.');
      letter = letter.replace(/11/g, '-');
      letter = letter.replace(/00/g, '');
      return MORSE_TABLE[letter];
    }
  });
  return decoded.join('');
}

module.exports = {
  decode
};
