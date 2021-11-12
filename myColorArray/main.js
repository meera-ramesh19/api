


   function colorFunction(id) {

      document.getElementById('container').innerHTML = '';
     const textColor= document.getElementById("text__color")
     textColor.innerHTML = document.getElementById(id).value;
      filterArray(textColor.innerHTML)
 }

      function filterArray(colour){
        let colors=[
            {name:'forestgreen',color:'#228B22',},
           // 'forestgreen',
           {name:'limegreen', color:'#32CD32',},
            // 'limegreen',
            {name:'seagreen', color:'#2E8B57',},
            // 'seagreen',
           {name:'springgreen', color:'#00FF7F',},
            // 'springgreen',
             {name:'yellowgreen', color:'#9ACD32',},
            // 'yellowgreen',
          {name:'mediumseagreen', color:'#3CB371',},
            // 'mediumseagreen',
          {name:'rebeccapurple', color:'#663399',},
            // 'rebeccapurple',
             {name:'navypurple', color:'#9457eb',},
            // 'navypurple',
              {name:'mediumpurple', color:'#9370DB',},
            // 'mediumpurple',
            {name:'darkred', color:'#A70D2A',},
            // 'darkred',
           {name:'red', color:'#FF0000',},
           // 'red',
             {name:'indianred', color:'#CD5C5C',},
            'indianred',
             {name:'ivyblue', color:'#3090C7',},
            // 'ivyblue',
            {name:'skyblue', color:'#6698FF',},
            // 'skyblue',
          {name: 'lightsteelblue', color:'#B0CFDE',},
           // 'lightsteelblue',
            {name:'gray', color:'#808080',},
            // 'gray',
            {name:'lightslategray', color:'#778899',},
            // 'lightslategray',
            { name:'yellow', color:'#FFFF00',},
            // 'yellow',
            {name:'lightyellow', color:'#FFFFE0',},
            // 'lightyellow',
          {name:'bananayellow', color:'#FFE135',},
           // 'bananayellow',
           {name:'lemonyellow', color:'#FFF44F',},
            // 'lemonyellow',
          ];
         const cont=document.getElementById('container');
         const newColor=colors.filter(function(obj){
            for(key in obj){
              if(obj[key].includes(colour)){
                console.log(obj)
                return obj
              }
            }
         });
          // const newColor= colors.filter((color,index)=>color.name.includes(colour));
         console.log(colour, newColor);
         // displayArray(newColor);
   //
   //    }
   //
   // function displayArray(newColor){
        if (newColor.length===0){
         // const cont=document.getElementById('container')
          let heading = document.createElement('h1')
          let message=document.createTextNode("Sorry, Color Does Not Exist😅")
          heading.appendChild(message);
          cont.appendChild(heading)

        }else if (newColor.length>0)
        {

      //  const myDiv = document.createElement('div');
           for(i=0;i<newColor.length;i++){

            console.log(`.${newColor[i].name}`)
            const myDiv = document.createElement('div');

            // Set some attributes
            myDiv.setAttribute( "class", "result" );
            // myDiv.setAttribute('style', 'display:flex;');
            myDiv.style.color = "black";
            myDiv.style.fontSize = "15px"
            // myDiv.style.width = '150px';
            // myDiv.style.height = 'auto';
            // myDiv.style.border='2px solid black'
            myDiv.style.backgroundColor =  `${newColor[i].color}`;
            let myTextNode=document.createTextNode(newColor[i].name)
            myDiv.appendChild(myTextNode)
            cont.appendChild(myDiv);
            }
        }
   }
// }


// Example:


//   var arr = ['alpha', 'bravo', 'charlie', 'delta', 'echo'];
//   var cont = document.getElementById('container');

//   // create ul element and set the attributes.
//   var ul = document.createElement('ul');
//   ul.setAttribute('style', 'padding: 0; margin: 0;');
//   ul.setAttribute('id', 'theList');

//   for (i = 0; i <= arr.length - 1; i++) {
//       var li = document.createElement('li');     // create li element.
//       li.innerHTML = arr[i];      // assigning text to li using array value.
//       li.setAttribute('style', 'display: block;');    // remove the bullets.

//       ul.appendChild(li);     // append li to ul.
//   }

//   cont.appendChild(ul);       // add list to the container.
