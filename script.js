const bubble = document.querySelector('.header__bubble');
const closeButton = document.querySelector('.header__bubble-button');
const nextSection = document.querySelector('.header__inner');

closeButton.addEventListener('click', function() {

  const bubbleHeight = bubble.offsetHeight;
  
  bubble.style.height = bubble.offsetHeight + 'px';
  bubble.style.opacity = '0';
  bubble.style.padding = '0';
  bubble.style.margin = '0';
  bubble.style.border = 'none';
  
  nextSection.style.marginTop = `-${bubbleHeight}px`;
  
  setTimeout(() => {
    bubble.remove();
    nextSection.style.marginTop = '0';
  }, 300);
});
