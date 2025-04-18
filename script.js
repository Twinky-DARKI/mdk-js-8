document.addEventListener("DOMContentLoaded", () => {
  // dropdown toggle
  document.querySelectorAll(".menu-item > a").forEach(link => {
    link.addEventListener("click", e => {
      const dropdown = link.nextElementSibling
      if (dropdown && dropdown.classList.contains("dropdown")) {
        e.preventDefault()
        dropdown.classList.toggle("show")
      }
    })
  })
  // close dropdown on outside click
  document.addEventListener("click", e => {
    document.querySelectorAll(".dropdown.show").forEach(menu => {
      if (!menu.parentElement.contains(e.target)) {
        menu.classList.remove("show")
      }
    })
  })
  // accordion behavior
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling
      const isOpen = content.classList.contains("open")
      // close all
      document.querySelectorAll(".accordion-content.open").forEach(c => c.classList.remove("open"))
      if (!isOpen) content.classList.add("open")
    })
  })
})
