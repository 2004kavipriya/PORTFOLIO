document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const sidebarLinks = document.querySelectorAll('#side-nav li a'); // Selector for the sidebar links
    
    // Function to check if the section is in the viewport
    const isInViewport = (section) => {
      const rect = section.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };
  
    // Event listener for scroll
    window.addEventListener('scroll', () => {
      let found = false; // To track if the active section is found
  
      sections.forEach((section) => {
        const link = document.querySelector(`#side-nav li a[href="#${section.id}"]`);
  
        if (isInViewport(section) && !found) {
          // Mark the first section in view as active
          sidebarLinks.forEach((link) => link.classList.remove('active')); // Remove active from all
          link.classList.add('active'); // Add active to the current link
          found = true; // Ensure only one link is active at a time
        }
      });
    });
  });
  