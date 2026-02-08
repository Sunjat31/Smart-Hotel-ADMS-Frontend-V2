
let bookings = [];
let selectedIndex = -1;

function addBooking() {
  let data = getFormData();
  if (!data) return;
  bookings.push(data);
  alert("Booking Added Successfully");
  displayBookings();
}

function selectBooking(index) {
  let b = bookings[index];
  document.getElementById("guestName").value = b.guestName;
  document.getElementById("bookingDate").value = b.bookingDate;
  document.getElementById("nid").value = b.nid;
  document.getElementById("passport").value = b.passport;
  document.getElementById("contact").value = b.contact;
  document.getElementById("roomNo").value = b.roomNo;
  document.getElementById("roomType").value = b.roomType;
  document.getElementById("checkIn").value = b.checkIn;
  document.getElementById("checkOut").value = b.checkOut;
  selectedIndex = index;
}

function updateBooking() {
  if (selectedIndex === -1) {
    alert("Select booking first!");
    return;
  }
  bookings[selectedIndex] = getFormData();
  alert("Booking Updated Successfully");
  selectedIndex = -1;
  displayBookings();
}

function cancelBooking(index) {
  bookings.splice(index, 1);
  alert("Booking Cancelled Successfully");
  displayBookings();
}

function getFormData() {
  let guestName = document.getElementById("guestName").value;
  let bookingDate = document.getElementById("bookingDate").value;
  let nid = document.getElementById("nid").value;
  let passport = document.getElementById("passport").value || "N/A";
  let contact = document.getElementById("contact").value;
  let roomNo = document.getElementById("roomNo").value;
  let roomType = document.getElementById("roomType").value;
  let checkIn = document.getElementById("checkIn").value;
  let checkOut = document.getElementById("checkOut").value;

  if (!guestName || !bookingDate || !nid || !contact || !roomNo || !roomType || !checkIn || !checkOut) {
    alert("Please fill all required fields");
    return null;
  }

  return { guestName, bookingDate, nid, passport, contact, roomNo, roomType, checkIn, checkOut };
}

function displayBookings() {
  let table = document.getElementById("bookingTable");
  table.innerHTML = `<tr>
    <th>Guest Name</th>
    <th>Date</th>
    <th>NID</th>
    <th>Passport</th>
    <th>Contact</th>
    <th>Room No</th>
    <th>Room Type</th>
    <th>Check In</th>
    <th>Check Out</th>
    <th>Action</th>
  </tr>`;

  bookings.forEach((b, index) => {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = b.guestName;
    row.insertCell(1).innerHTML = b.bookingDate;
    row.insertCell(2).innerHTML = b.nid;
    row.insertCell(3).innerHTML = b.passport;
    row.insertCell(4).innerHTML = b.contact;
    row.insertCell(5).innerHTML = b.roomNo;
    row.insertCell(6).innerHTML = b.roomType;
    row.insertCell(7).innerHTML = b.checkIn;
    row.insertCell(8).innerHTML = b.checkOut;
    row.insertCell(9).innerHTML = `<button onclick="selectBooking(${index})">Edit</button> <button onclick="cancelBooking(${index})">Cancel</button>`;
  });
}
