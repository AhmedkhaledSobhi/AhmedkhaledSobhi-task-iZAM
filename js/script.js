// document.getElementById("menu-toggle").addEventListener("click", function () {
//   const sidebar = document.querySelector(".sidebar");
//   sidebar.classList.toggle("active");
// });


document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.getElementById('navbar-toggler');
  const menu = document.getElementById('navbar-menu');

  toggler.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});

// ---------------- dropdownLink --------------------------
document.addEventListener('DOMContentLoaded', function() {
  const dropdownLink = document.getElementById('dropdownLink');
  const dropdownMenu = document.getElementById('dropdownMenu');

  dropdownLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    dropdownMenu.classList.toggle('show'); // Toggle the visibility of the dropdown menu
  });

  // Close the dropdown menu if clicked outside
  document.addEventListener('click', function(event) {
    if (!dropdownLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
});

// ------------------ accordion -------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach((header, index) => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('i');

    // If it's the second accordion item, make it active by default
    if (index === 2) {
      content.style.display = 'block';
      if (icon) {
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
      }
    }

    header.addEventListener('click', function () {
      const isActive = content.style.display === 'block';

      // Close all open accordion contents and reset icons
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.style.display = 'none';
      });

      document.querySelectorAll('.accordion-header i').forEach(icon => {
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
      });

      // If the clicked section is already open, just close it
      if (!isActive) {
        content.style.display = 'block';
        if (icon) {
          icon.classList.remove('fa-angle-down');
          icon.classList.add('fa-angle-up');
        }
      }
    });
  });
});


// ----------------------------

document.addEventListener('DOMContentLoaded', function () {
  const themeToggleSwitch = document.getElementById('flexSwitchCheckDefault');
  const body = document.body;

  // Check if dark mode is previously enabled and apply it
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleSwitch.checked = true;
  }

  themeToggleSwitch.addEventListener('change', function () {
    if (themeToggleSwitch.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});
