const box1 = document.getElementById('box5');
const box2 = document.getElementById('box6');
    

    box1.addEventListener('mouseenter', function() {
      box2.style.backgroundColor = '#2ecc71'; 
      box2.style.transform = 'scale(1.2)';
      box2.style.borderRadius = '50%';
    });
   

    box1.addEventListener('mouseleave', function() {
      box2.style.backgroundColor = '#e74c3c'; 
      box2.style.transform = 'scale(1)';
      box2.style.borderRadius = '10px';
    });
    
   
    box2.addEventListener('mouseenter', function() {
      box1.style.backgroundColor = '#9b59b6';
      box1.style.transform = 'rotate(45deg)';
    });
    
   
    box2.addEventListener('mouseleave', function() {
      box1.style.backgroundColor = '#3498db'; 
      box1.style.transform = 'rotate(0deg)';
    });