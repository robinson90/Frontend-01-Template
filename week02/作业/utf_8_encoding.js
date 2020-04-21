function UTF8_Encoding (s) {
  const data = [...s].map(val=> parseInt(`0x${val.codePointAt(0).toString(16)}`));
  if (data.length <= 1) {
    // 0000-007f
    console.log(parseInt('0x007f'), parseInt('0x07FF'), parseInt('0xFFFF'));
    console.log(data)
    if (data[0] <=parseInt('0x007f')) {
      // 0xxxxxxx
      const codeList = new Array(1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0)
      const codeData = [...data[0].toString(2).padStart(7, 0)]
      codeData.forEach((val, i) => {
        codeList[1 + i] = val;
      })
      return codeList.join('')
    } else if (data[0] <=parseInt('0x07FF')) {
      // 110xxxxx	10xxxxx
      const codeList = new Array(1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0)
      const codeData = [...data[0].toString(2).padStart(11, 0)]
      codeData.forEach((val, i) => {
        if (i < 5) {
          codeList[3 + i] = val;
        } else {
          codeList[5 + i] = val;
        }
      })
      return codeList.join('')
    } else if (data[0] <=parseInt('0xFFFF')) {
      // 24位
      // 1110xxxx	10xxxxxx	10xxxxxx
      const codeList = new Array(1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0)
      const codeData = [...data[0].toString(2).padStart(16, 0)]
      codeData.forEach((val, i) => {
        if (i < 4) {
          codeList[4 + i] = val;
        } else if (i < 10) {
          codeList[6 + i] = val;
        } else {
          codeList[8 + i] = val;
        }
      })
      return codeList.join('')
    } else if (data[0] <=parseInt('0x1FFFFF')) {
      // 11110xxx	10xxxxxx	10xxxxxx	10xxxxxx
      const codeList = new Array(1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0)
      const codeData = [...data[0].toString(2).padStart(21, 0)]
      codeData.forEach((val, i) => {
        if (i < 3) {
          codeList[5 + i] = val;
        } else if (i < 9) {
          codeList[7 + i] = val;
        } else if (i < 17) {
          codeList[9 + i] = val;
        } else {
          codeList[11 + i] = val;
        }
      })
      return codeList.join('')
    } else if (data[0] <=parseInt('0x3FFFFFF')) {
      // 111110xx	10xxxxxx	10xxxxxx	10xxxxxx	10xxxxxx
      const codeList = new Array(1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0)
      const codeData = [...data[0].toString(2).padStart(26, 0)]
      codeData.forEach((val, i) => {
        if (i < 2) {
          codeList[6 + i] = val;
        } else if (i < 8) {
          codeList[8 + i] = val;
        } else if (i < 14) {
          codeList[10 + i] = val;
        } else if (i < 20) {
          codeList[12 + i] = val;
        } else {
          codeList[14 + i] = val;
        }
      })
      return codeList.join('')
    } else {
      // 7FFFFFFF
      // 1111110x	10xxxxxx	10xxxxxx	10xxxxxx	10xxxxxx	10xxxxxx
      const codeList = new Array(1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0)
      const codeData = [...data[0].toString(2).padStart(26, 0)]
      codeData.forEach((val, i) => {
        if (i < 1) {
          codeList[7 + i] = val;
        } else if (i < 7) {
          codeList[9 + i] = val;
        } else if (i < 13) {
          codeList[11 + i] = val;
        } else if (i < 19) {
          codeList[13 + i] = val;
        } else if (i < 25) {
          codeList[15 + i] = val;
        } else {
          codeList[17 + i] = val;
        }
      })
      return codeList.join('')
    }
  }
}

// 1110xxxx	10xxxxxx	10xxxxxx
console.log(UTF8_Encoding('厉')==='111001011000111010001001')
// console.log(UTF8_Encoding('厉害'))