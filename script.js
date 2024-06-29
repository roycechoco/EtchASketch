
const body=document.body;


document.addEventListener('DOMContentLoaded', function() {

    
    function divCreate (noOfDivs) 
    { 
       
           
                  for (let i=1; i<=(noOfDivs*noOfDivs); i++)
                    {
                    const divStyle = document.createElement('div');
                    divStyle.className = 'divstyle';
                    divStyle.textContent = `${i}`;
                    const container = document.querySelector('.container');
                    container.append(divStyle);
                    console.log("i");
                     }

                
        

    }
    divCreate(16);

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
    
 




                            
    
    

    

    


  
});
