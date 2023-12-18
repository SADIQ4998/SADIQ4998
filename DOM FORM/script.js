function handleClick(radioButton) {

  var selectedGender = radioButton.value;

  console.log("Selected Gender: " + selectedGender);
}




/*body{
  display: flex;
  justify-content: center;
  background-color: rgb(214, 205, 205);
  
}
table {
  border-collapse: collapse;
  width: 25%;
}

th, td {
  border: 1px solid #141414;
  padding: 8px;
}

th {
  text-align: left;
  background-color: #070606;
  margin: 25px;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

label {
  display: block;
}

input[type=radio] {
  margin-right: 8px;
}

.submit {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
#title{
  color: aqua;
  
}
#box{
  background-color: gray;

