function toggleDetails(item) {
  const details = item.querySelector(".details");
  const isVisible = details.style.display === "block";
  
  // Hide all details first
  document.querySelectorAll(".details").forEach(d => d.style.display = "none");

  // Toggle current item
  details.style.display = isVisible ? "none" : "block";
}
