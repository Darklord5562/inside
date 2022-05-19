



const setCookie = (cname, cval, exdays) => {
  document.cookie = `${cname}=${cval};expires=${exdays?parseInt(exdays)*1000*60*60*24:30*1000*60*60*24}`
}


function getCookie(cname) {
  let allCookieArray = document.cookie.split(';')
  let cookie = {}
  allCookieArray.forEach(cokiePair => {
    const [key, val] = cokiePair.split('=')
    if (key === cname) {
      cookie[key] = val
    }
  })
  return cookie[cname]
}

//export {setCookie, getCookie }
