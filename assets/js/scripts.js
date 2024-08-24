document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".dropdown-item");
    var sections = document.querySelectorAll(".toggle-section");
  
    // 기본적으로 모든 섹션을 숨기기
    sections.forEach(function(section) {
      section.style.display = "none";
    });
  
    menuItems.forEach(function(menuItem) {
      menuItem.addEventListener("click", function(event) {
        event.preventDefault();
        var targetId = this.getAttribute("data-target");
  
        // 모든 섹션 숨기기
        sections.forEach(function(section) {
          section.style.display = "none";
        });
  
        // 선택된 섹션만 표시
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = "block";
        }
      });
    });
  });
  