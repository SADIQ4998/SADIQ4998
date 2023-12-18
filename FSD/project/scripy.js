const studentlist = document.querySelector("student-list")

function renderStudent(stud){
    const studentDiv = document.createElement("div");
    studentDiv.className = "card";
    studentDiv.innerHTML +=
    <h2>$(stud.name)</h2>
    <p><span>batch</span> $(stud.batch</p>
    
}