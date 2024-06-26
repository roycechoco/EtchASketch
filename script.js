
const body=document.body;


document.addEventListener('DOMContentLoaded', function() {



    function divCreate (noOfDivs) 
    { 
        
           
                for (let i=1; i<=(noOfDivs*noOfDivs); i++)
                    {
                    const divStyle = document.createElement('div');
                    divStyle.className = 'divstyle';
                    
                    const container = document.querySelector('.container');
                    container.append(divStyle);
                    console.log("i");
                     }

                
           

            




    }

    divCreate(16);



  
});
