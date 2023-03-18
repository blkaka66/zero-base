// do something!

function getCss()
{
  fetch('star-rating/theme.css')
  .then(response => response.text())
  .then(css => {
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
  })
  .catch(error => console.error(error));
}
function getIcon()
{
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css';
  document.head.appendChild(link);
  
}
getCss();
getIcon();



function StarRating($container) {
    const maxRating = $container.getAttribute('data-max-rating');//별 갯수 가져오기
    const div = document.createElement('div');//div 만들고
    div.classList.add('star-rating-container');
    const stars = [];

    for (let i = 0; i < maxRating; i++) {
      const star = document.createElement('i');
      star.id = `star-${i}`;
    
      star.classList.add('bx', 'bxs-star');
      div.appendChild(star);
      stars.push(star);
   

  
    }
    stars.forEach((star, index) => {
      star.addEventListener("mouseenter", () => {
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add("hovered");
   
        }
      });
      
      star.addEventListener("mouseleave", () => {
        for (let i = 0; i <= index; i++) {
          stars[i].classList.remove("hovered");
        }
      });
      
      star.addEventListener("click", () => {
        
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add("selected");
        }
        for (let k=index+1;k<stars.length;k++)
        {
          stars[k].classList.remove("selected");
        }
      });
      
    });
  
    $container.appendChild(div);


  }
  
  


  export default StarRating;

