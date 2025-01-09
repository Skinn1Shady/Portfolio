function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      showPopup(true);
  
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
      document.getElementById("all_recommendations").appendChild(element); 
      
      recommendation.value = "";
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.topmenu');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
