function generateMultiplicationTable() {
    var num = document.getElementById("numInput").value;
    var table = document.getElementById("multiplicationTable");
    table.innerHTML = '';
    for (var i = 1; i <= 10; i++) {
        table.innerHTML += `<tr><td>${num} * ${i} = ${num * i}</td></tr>`;
      }
  }