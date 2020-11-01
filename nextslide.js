var nam = [
    "Santu Bhattacharyya,Father",
      "Munmun Bhattacharyya,Mother",
      "Soumendu Bhattacharyya,Me",
      "Motilal Bhattacharyya,Grandpa",
      "Maya Bhattacharyya,Grandma",
      "Family!",
  ];
  


var s = 0;
function nextslide() {

    if (s == 6) {
        s = 0;
    }

    document.getElementById("names").value = nam[s];
    s++;

}