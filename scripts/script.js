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
                    <p>550</p>`;
        selectSeat.appendChild(div);

        // seat number decrease
        let avaliableSeat = getElementByIdIntegerValue("avaliable-seat");
        avaliableSeat--;
        setElementByIdIntegerValue("avaliable-seat", avaliableSeat);

        // seat count increase
        let seatCount = getElementByIdIntegerValue("seat-count");
        seatCount++;
        setElementByIdIntegerValue("seat-count", seatCount);

        // total price increase
        let totalPrice = getElementByIdIntegerValue("total-price");
        totalPrice += 550;
        setElementByIdIntegerValue("total-price", totalPrice);
        setElementByIdIntegerValue("grand-total", totalPrice);

        // coupon button enable
        if (totalPrice >= 1100) {
          const couponButton = getElementByIdText("coupon");
          couponButton.disabled = false;
        }
      } else {
        console.log("Seat is already booked");
      }
    });
  });
});

// apply coupon code
function applyDiscount() {
  const couponCode = getElementByIdValue("coupon-code");
  console.log(couponCode);
  const totalPrice = getElementByIdIntegerValue("total-price");
  console.log(totalPrice);

  if (couponCode === "NEW15") {
    const discount = 0.15 * totalPrice;
    const newTotalPrice = totalPrice - discount;
    setElementByIdIntegerValue("discount-price", discount);
    setElementByIdIntegerValue("grand-total", newTotalPrice);
  } else {
    console.log("Invalid coupon code");
  }

//   couple coupon code
if(totalPrice >= 2200){
    if(couponCode === "COUPLE20"){
        const discount = 0.20 * totalPrice;
        const newTotalPrice = totalPrice - discount;
        setElementByIdIntegerValue("discount-price", discount);
        setElementByIdIntegerValue("grand-total", newTotalPrice);
    }
}

document.getElementById("coupon-code").value = "";
}
