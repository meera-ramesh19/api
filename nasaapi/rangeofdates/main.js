//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//  document.querySelector(".btn").addEventListener("click", preventMyDefault);

// const weather = [];
//  function preventMyDefault(event) {
//    event.preventDefault();
//      getPhotos();
// // }


  const form = document.querySelector('#dates')
  
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.querySelector("#result").innerHTML="";
      const start_date = document.querySelector("#startDate")
      const end_date = document.querySelector("#endDate");
      const start=start_date.value;
      const end=end_date.value;
       console.log(start,end);
      getPhotos(start,end);
  });
  
//Start of function to clear out data from input form

function clearField() {
  document.querySelector("#startDate").value = ""
  document.querySelector("#endDate").value = ""
}

async function getPhotos(start,end) {
  // document.querySelector("#desc").innerHTML = ""
 try {

  const url =
    "https://api.nasa.gov/planetary/apod?api_key=OCWcgLEbNe0Wkwa4H4T152e9OsTGjIRuhPcnUIlQ&start_date=" +
    start +
    "&end_date=" +
    end;
    console.log(url);


  const res=await fetch(url)
  const data= await res.json()
  console.log(data);
  document.querySelector("#header").innerHTML = `Dates Ranging from ${start} through ${end}`
  for(let i=0;i<data.length;i++){
    createColumnCards(data[i],i);
  }
  //run clear field function
  clearField()

  //when code is rendered scroll to ideal location for user
  document.getElementById("header").scrollIntoView()
  } catch (err) {
    console.log(err)
     }
}

  ///Create the column card

  function createColumnCards(dataInfo,i){
    console.log(dataInfo,i)
    // document.querySelector("#result").innerHTML="";
    let todayDate = dataInfo.date;
    let title = dataInfo.title;
    let urls = dataInfo.url;
    let explain = dataInfo.explanation;
    let mediaType = dataInfo.media_type;
    let hdImage = dataInfo.hdurl;
    let videoUrl='';
  
     document.querySelector("#result").insertAdjacentHTML("beforeend",

    ` <div class="cards">
       <div class="displayContainer">
        <div class="mediaContainer">
            <div class="video">
               ${ mediaType==="image"
                 ? `<img src=${hdImage} style="width:550px; height:400px;" alt="Nasa Image of the Day"/>`
               : mediaType === "video"
                  ? videoUrl = parseVideo(urls)
                 : videoUrl==="youtube" ?` <iframe class="youtubeClass" width="550" height="400" src=${hdImage} frameborder="0" allowfullscreen></iframe>`
                 : videoUrl==="vimeo"?`<iframe class="vimeoClass" src=${hdImage} width="550" height="400" frameborder="0"  allowfullscreen></iframe>` 
                  :""
                }
          </div>
       </div>
        <div class="info">
            <div class="text-explain">
             <h4 class="exp-title">${title}</h4>
              <p class="dated"><b>Dated: </b>${todayDate}</p>
              <p class="exp-desc"><b>Description:</b></p>
               <p class="exp">${explain}</p>
             </div>
        </div>
        </div>
      </div>` )  
   }

 
function parseVideo(url){
  // - Supported YouTube URL formats:
  //   - http://www.youtube.com/watch?v=My2FRPA3Gf8
  //   - http://youtu.be/My2FRPA3Gf8
  //   - https://youtube.googleapis.com/v/My2FRPA3Gf8
  // - Supported Vimeo URL formats:
  //   - http://vimeo.com/25451551
  //   - http://player.vimeo.com/video/25451551
  // - Also supports relative URLs:
  //   - //player.vimeo.com/video/25451551

  url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

  if (RegExp.$3.indexOf("youtu") > -1) {
    var type = "youtube";
  } else if (RegExp.$3.indexOf("vimeo") > -1) {
    var type = "vimeo";
  }

  return {type: type, id: RegExp.$6};

}