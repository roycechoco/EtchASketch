
const body=document.body;


document.addEventListener('DOMContentLoaded', function() {

for (let i=0; i<=15;i++)
    {   
       
        const rowDiv = document.createElement('div');

        rowDiv.className = 'rowdiv';

        

    
      
        const container = document.getElementById('container');
        rowDiv.innerText = 'Test';
        container.appendChild(rowDiv);

    };

  
});


