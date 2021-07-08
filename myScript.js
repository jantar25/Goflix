const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movieList");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    clickCounter++;
    if (itemNumber - (4 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 290
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
const ball = document.querySelector(".toggleBall");
console.log(ball);
const items = document.querySelector(
  ".container,.movieListeTitle,.navBarContainer,.sideBar,.SideBarIcon,.toggle"
);
console.log(items);
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
