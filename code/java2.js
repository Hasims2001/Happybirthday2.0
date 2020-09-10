 var x = document.getElementById('wodin');
 var y = document.getElementById('bday');
var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++)
    {
      var page = pages[i];
      if (i % 2 === 0)
        {
          page.style.zIndex = (pages.length - i);
        }
    }


  document.addEventListener('DOMContentLoaded', function(){
  
    for(var i = 0; i < pages.length; i++)
      {
        //Or var page = pages[i];
        pages[i].pageNum = i + 1;
        pages[i].onclick=function()
          {
            if (this.pageNum % 2 === 0)
              {
                  
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
              }
            
             else
              {
                y.pause();
                  x.play();
                           
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
              }
        
           }
        }

        
  })


     



function audioplay() {
    x.pause();
  y.play();
}
function pauseaudio(){
  y.pause();
}
