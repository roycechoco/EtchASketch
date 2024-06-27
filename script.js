
const body=document.body;


document.addEventListener('DOMContentLoaded', function() {

    let divs =[];

    function divCreate (noOfDivs) 
    { 
        let divs =[];
           
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


   


                            
    
    

    

    


  
});
