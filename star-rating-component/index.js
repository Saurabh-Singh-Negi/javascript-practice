const stars = document.querySelectorAll(".star-item");

for(let i=0;i<stars.length;i++) {

    stars[i].addEventListener("mouseover", () => {
      for(let j=0;j<=i;j++) {
        stars[j].classList.add("hover");
      }
    })

    stars[i].addEventListener("mouseout", () => {
      for(let j=0;j<=i;j++) {
        stars[j].classList.remove("hover");
      }
    })

    stars[i].addEventListener("click", () => {
      for(let j=0;j<=i;j++) {
        stars[j].classList.add("active");
      }

      for(let j=i+1;j<=stars.length;j++) {
        stars[j].classList.remove("active");
      }
    })
}

