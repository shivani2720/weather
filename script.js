var button=document.getElementById("btn").addEventListener("click", function(){
    var weather=document.getElementById("search").value;
    
    var temp=document.getElementById("temp");
    var name=document.getElementById("name");
    var country=document.getElementById("country");
    var sky=document.getElementById("sky");
    var rain=document.getElementById("rain");
    var wind=document.getElementById("wind");
    var humidity=document.getElementById("humidity");
    var img=document.querySelector(".img");
    var right=document.querySelector(".right");



//    ------------------------ use ajax here-----------------------------------

    var url=`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=c0a4a73a898b10afd539e005e08742d2`;

    var xhr=new XMLHttpRequest();

    xhr.onreadystatechange =()=>{
        if(xhr.readyState==4 && xhr.status==200){
            var data=JSON.parse(xhr.responseText);
       //      console.log(data);
            
               right.style.display="block";
               temp.innerHTML=`${Math.round(data.main.temp - 273.15)} °C`; 
              name.innerHTML=`${data.name} / `;
              country.innerHTML=`${data.sys.country}`;
              sky.innerHTML=`${data.weather[0].main}    `;
              wind.innerHTML=`${data.wind.speed} Km/h`;
              humidity.innerHTML=`${data.main.humidity} %`;
            
          if(data.weather[0].main == "Clouds"){
                 img.src= "clouds.png";
          }
          else if(data.weather[0].main == "Clear"){
                 img.src= "sun.png";
          }
          else if(data.weather[0].main == "Rain"){
                 img.src= "heavy-rain.png";
          }
          else if(data.weather[0].main == "Snow"){
                 img.src= "snow.png";
          }
          else if(data.weather[0].main == "Mist"){
                 img.src= "mist.png";
          }
          else if(data.weather[0].main == "Drizzle"){
                 img.src= "drizzle.png";
          }
        }   
        
    }

    xhr.open('GET', url, true)
xhr.send();
})
