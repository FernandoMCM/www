const recAPI_URL = './'

const recSuma = (a , b) => {
  return a + b
}

const recSetCookie = (cname,cvalue,exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

 const recGetCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

const recFetchGet = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

// const recFetchGet = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   return await response.json()
// }
