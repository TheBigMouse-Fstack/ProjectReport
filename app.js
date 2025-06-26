// Accordion show/hide with smooth scroll and slow animation
document.querySelectorAll(".feature-toggle").forEach((button) => {
  button.addEventListener("click", function () {
    const group = this.closest(".feature-group");
    const content = group.querySelector(".feature-table-wrapper");
    const icon = this.querySelector(".toggle-icon");
    const isHidden = content.classList.contains("hidden");

    // Toggle
    if (isHidden) {
      content.classList.remove("hidden");
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "-";
      // Smooth scroll: Nhảy nhẹ xuống phần group
      setTimeout(() => {
        group.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 210);
    } else {
      content.style.maxHeight = null;
      content.classList.add("hidden");
      icon.textContent = "+";
    }
  });
});

// Navbar shrink effect
const navbarInner = document.querySelector(".navbar-inner");
window.addEventListener("scroll", () => {
  if (window.scrollY > 56) {
    navbarInner.classList.add("shrunk");
  } else {
    navbarInner.classList.remove("shrunk");
  }
});
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      // Tính offset nav (nếu có nav fixed)
      const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;
      const top =
        target.getBoundingClientRect().top + window.scrollY - navHeight - 130; // 12 là khoảng cách nhỏ cho đẹp
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});
document.getElementById("btn1").onclick = function (e) {
  // Ngăn sự kiện mặc định nếu nhấn vào nút
  e.preventDefault();
  window.open(
    "https://github.com/bunpmc/Gender-Healthcare-Service-Management-System",
    "_blank"
  );
};
document.getElementById("btn2").onclick = function (e) {
  e.preventDefault();
  window.open("https://github.com/bunpmc/Repo2", "_blank");
};
