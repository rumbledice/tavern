const searchInput = document.getElementById("search-input");
const searchables = document.querySelectorAll(".searchable");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  searchables.forEach((searchable) => {
    const searchTermsMatched = Array.from(searchable.querySelectorAll("p"))
      .some((p) => p.textContent.toLowerCase().includes(searchTerm));
    
    if (searchTermsMatched) {
      searchable.style.display = "block";
    } else {
      searchable.style.display = "none";
    }
  });
});