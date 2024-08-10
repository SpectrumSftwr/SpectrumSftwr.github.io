let submitform = () => {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  name = name.replace(' ', '+');

  let url = `https://docs.google.com/forms/d/e/1FAIpQLSfZh6_af3aFrWK7SWhNrE8ZG82TW48QspPcwbAC1z1cZfnCJQ/viewform?usp=pp_url&entry.2065356908=${name}&entry.590981021=${email}`
  
  window.location.href = url;
}
