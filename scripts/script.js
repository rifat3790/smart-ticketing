function buyTicket() {
  console.log("Buying ticket...");
  document
    .getElementById("ph-paribahan")
    .scrollIntoView({ behavior: "smooth" });
}

document.getElementById("A1").addEventListener("click", function () {
  console.log("A1 clicked");
});

document.addEventListener("DOMContentLoaded", function () {
  const seats = document.querySelectorAll(".serial-number");

  seats.forEach((seat) => {
    seat.addEventListener("click", function () {
      // check if seat is already booked
      // console.log(seat.classList.contains('booked'));
      if (!seat.classList.contains("booked")) {
        seat.classList.add("booked");
        seat.classList.add("bg-[#1DD100]");
        seat.classList.add("text-white");
        removeElementClass("booked-seats", "hidden");

        // get the seat number
        const seatText = seat.innerText;
        console.log(`Seat ${seatText} selected`);

        const selectSeat = getElementByIdText("selected-seat");

        const div = document.createElement("div");
        div.className = "font-inter flex justify-between text-[#03071299]";
        div.innerHTML = `
                    <p>${seatText}</p>
                    <p>Economy</p>
                    <p>500</p>`;
                    selectSeat.appendChild(div);

        // seat number decrease
        let avaliableSeat = getElementByIdIntegerValue("avaliable-seat");
        avaliableSeat--;
        setElementByIdIntegerValue("avaliable-seat", avaliableSeat);
        
        // seat count increase
        let seatCount = getElementByIdIntegerValue("seat-count");
        seatCount++;
        setElementByIdIntegerValue("seat-count", seatCount);
      } else {
        console.log("Seat is already booked");
      }
    });
  });
});
