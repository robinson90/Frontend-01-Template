const client_id = 'Iv1.5f77bd0e081f2e25';
const redirect_uri = 'http://localhost';
const client_secret = '0d1758f4b4daae75f2b6ad142ff644644197d1f4';
const state = 'ghj123'
const url = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(client_id)}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent('read:user')}&state=${encodeURIComponent(state)}`
console.log(url)

// code=7b1d814d1c2e2b89bce3&state=ghj123

const postUrl = `https://github.com/login/oauth/access_token?client_id=${encodeURIComponent(client_id)}&client_secret=${encodeURIComponent(client_secret)}&code=${'7b1d814d1c2e2b89bce3'}&redirect_uri=${redirect_uri}&state=${encodeURIComponent(state)}`
console.log(postUrl)
{
  function reqListener () {
    // access_token=abc490ac516ea3c42d61455500aeabe033644610&expires_in=28800&refresh_token=r1.fd5d24d06e59c7a3502553195de8aa2bab92a80c84db26e6ef19a32a1f8fb52d5aa93eb0cc45bbcd&refresh_token_expires_in=15897600&scope=&token_type=bearer
    console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("POST", 'https://github.com/login/oauth/access_token?client_id=Iv1.5f77bd0e081f2e25&client_secret=0d1758f4b4daae75f2b6ad142ff644644197d1f4&code=7b1d814d1c2e2b89bce3&redirect_uri=http://localhost&state=ghj123');
  oReq.send()
  // oReq.send();
}

// const sleep = (val) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve('ghj')
//       reject(new Error('Err'))
//     }, val)
//   })
// }

// async function a(){
//   try {
//     const val = await sleep(1)
//     console.log(val, '----------------')
//   } catch (error) {
//     console.log(error)
//   }
// }
// a()