
const body=document.body;


document.addEventListener('DOMContentLoaded', function() {

    const container = document.querySelector('.container');

    //creating divs
    function divCreate (noOfDivs) 
    { 
       
           
                  for (let i=1; i<=(noOfDivs*noOfDivs); i++)
                    {
                    const divStyle = document.createElement('div');
                    divStyle.className = 'divstyle';
                    divStyle.textContent = `${i}`;
                    
                    const containerWidth = container.clientWidth; // Get actual width of container
                    const numCols = Math.floor(containerWidth / noOfDivs); // 100 is the width of each div
                    
                    const containerHeight = container.clientHeight;
                    const numRows = Math.floor(containerHeight / noOfDivs);
                  
                    divStyle.style.width = `calc(100% / ${noOfDivs} )`;
                    divStyle.style.height = `calc(100% / ${noOfDivs} )`;
                    container.append(divStyle);
                    
                     }

                
        

    }
    divCreate(16);

    //Hovering Method

    let color = [,"#808080"];
    



    let elements = document.querySelectorAll('.divstyle');

    elements.forEach( elements  =>

    {
        elements.addEventListener("mouseover", function() 
        {
            elements.style.background
            = color[(Math.floor(color.length))];
        })

    })
    

    



   //BTN
   
        let btn = document.querySelector('.btn');
        
        btn.addEventListener('click', btnClicked);


        function btnClicked()
        {
           
           container.innerHTML ='';
           
            let divStyle = document.querySelectorAll('.divstyle');
            var dimension = window.prompt("Choose how many squares per side for new grid");
            var dimensionNumber = parseInt(dimension);
            console.log(dimensionNumber);
            

            if (dimensionNumber > 100 || dimensionNumber <= 0)
                {
                
                    console.log ("error");
                }

            else {
                 // Function for adding new divs when button clicked
                 divCreate(dimensionNumber);
            }
           
        }
        

       

      // Function for adding new divs when button clicked


      

   




                            
    
    

    

    


  
});
