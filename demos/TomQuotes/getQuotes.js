value=axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/478417/3/?user_field_names=true",
    headers: {
        Authorization: "Token UYtTDHfVsFyMKMCfnPsT0AIyKnD9Tudx"
    }
})

function getRandomInt(min,max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
async function getData() {
    const value = getRandomInt(1,17);
    const url = "https://api.baserow.io/api/database/rows/table/478417/"+value+"/?user_field_names=true";
    const myHeaders = new Headers({
        "Authorization":"Token UYtTDHfVsFyMKMCfnPsT0AIyKnD9Tudx"
    });

    try {
      const response = await fetch(url,{headers:myHeaders});
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      document.querySelector("#quote").innerHTML="\""+json["Content"]+"\"";
      document.querySelector("#authorDetails").innerHTML="-Thomas Longmore";
      document.querySelector(".quoteBox").style.opacity="1";
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }