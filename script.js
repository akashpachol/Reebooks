const menu = document.getElementById("menu");
const dropdowns = document.querySelectorAll(".dropdown");
let activeDropdown = null;
const icons = document.querySelectorAll(".bi-chevron-down");
let active_icon = null;

// Function to check viewport width and always add the event listener
function handleViewportWidth() {
  if (window.innerWidth < 981) {
    console.log("hello");
    menu.addEventListener("click", (event) => {
      const targetId = event.target.id;
      const icon_id = event.target.firstElementChild.id;
      console.log(targetId.slice(-1), "normal", icon_id);

      var icon_value = document.getElementById(
        `bi-chevron-up${icon_id.slice(-1)}`
      );
      console.log(icon_value, "mk");

      if (activeDropdown && active_icon) {
        activeDropdown.style.display = "none";

        active_icon.classList.remove("bi-chevron-up", "mt-1");

        active_icon.classList.add("bi-chevron-down", "mt-1");
      }

      if (
        activeDropdown ===
          document.getElementById(`dropdown${targetId.slice(-1)}`) &&
        document.getElementById(`bi-chevron-up${icon_id.slice(-1)}`)
      ) {
        activeDropdown = null;
        active_icon = null;
      } else {
        // Show the dropdown corresponding to the clicked item
        document.getElementById(`dropdown${targetId.slice(-1)}`).style.display =
          "block";
        activeDropdown = document.getElementById(
          `dropdown${targetId.slice(-1)}`
        );
        icon_value.classList.remove("bi-chevron-down", "mt-1");
        icon_value.classList.add("bi-chevron-up", "mt-1");

        console.log(icon_value, "mk");

        active_icon = document.getElementById(
          `bi-chevron-up${icon_id.slice(-1)}`
        );
        //   console.log(activeDropdown, "else");
      }
    });
  } else {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item, id) => {
      item.addEventListener("mouseenter", () => {
        console.log(id, "KK");

        item.querySelector(".megabar").style.display = "block";
        document;
        const icon_value = document.getElementById(`bi-chevron-up${id + 1}`);
        if (icon_value) {
          icon_value.classList.remove("bi-chevron-down");
          icon_value.classList.add("bi-chevron-up");
        }
      });

      item.addEventListener("mouseleave", () => {
        item.querySelector(".megabar").style.display = "none";
        const icon_value = document.getElementById(`bi-chevron-up${id + 1}`);
        if (icon_value) {
          icon_value.classList.remove("bi-chevron-up");
          icon_value.classList.add("bi-chevron-down");
        }
      });
    });
  }
}

// Add an initial event listener to check the viewport width when the page loads
window.addEventListener("load", handleViewportWidth);

// Add an event listener to check the viewport width whenever the window is resized
window.addEventListener("resize", handleViewportWidth);

// Get the dropdown element

// slide show

let span1 = document.getElementById("span_icon1");
let span2 = document.getElementById("span_icon2");

let slider_card = document.querySelectorAll(".slider_card");
let product_page = Math.ceil(slider_card.length / 4);
let l = 0;
let movePer = 105.34;
let maxMove = (slider_card.length - 4) * movePer;

// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");


if (mob_view.matches) {
  movePer = 205.36;
  maxMove = (slider_card.length - 2) * movePer;
}

let right_mover = () => {
  l = l + movePer;
  if (l > maxMove) {
    l = l - movePer;
  }
  for (const i of slider_card) {
    if (l <= maxMove) {
      i.style.transform = `translateX(-${l}%)`; // Use translateX for horizontal movement
    }
  }
};



let left_mover = () => {
  l = l - movePer;
  if (l < 0) {
    l = 0;
  }
  for (const i of slider_card) {
    i.style.transform = `translateX(-${l}%)`; // Use translateX for horizontal movement
  }
};


span2.onclick = () => {
  
  right_mover();
};
span1.onclick = () => {
  left_mover();
};
