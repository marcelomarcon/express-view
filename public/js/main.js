const btns = document.querySelectorAll("button[data-index]");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-index");
    const boards = document.querySelectorAll("form[data-index]");
    const active = document.querySelector(".active");

    active && active.classList.remove("active");

    boards.forEach((board) => {
      if (board.getAttribute("data-index") === id) {
        board.classList.add("active");
      }
    });
  });
});
