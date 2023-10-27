document.querySelector(".loadBoats").addEventListener("click", () => {
    const btn = document.querySelector(".loadBoats");
    btn.classList.add("button--loading", "toWhite");
    setTimeout(() => {
      btn.classList.remove("button--loading", "toWhite");
    }, 1000);
  });

  document.querySelector(".exploreMore").addEventListener("click", () => {
    const btn = document.querySelector(".exploreMore");
    btn.classList.add("button--loading", "toWhite");

    setTimeout(() => {
      btn.classList.remove("button--loading", "toWhite");
      for (const trip of document.getElementsByClassName("destination")) {
        console.log(trip);
        trip.classList.remove("hideTrip");
      }
    }, 1000);
  });