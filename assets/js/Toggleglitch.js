document.addEventListener('DOMContentLoaded', function() {
    // Use event delegation for dynamically added elements
    document.addEventListener('click', function(e) {
      const dropdownToggle = e.target.closest('.dropdown-toggle');
      if (dropdownToggle) {
        e.preventDefault();
        const dropdownMenu = dropdownToggle.nextElementSibling;
        dropdownMenu.classList.toggle('show');
      }
    });
  });
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('touchstart', function(e) {
      e.preventDefault();
      const menu = this.nextElementSibling;
      menu.classList.toggle('show');
    });
  });