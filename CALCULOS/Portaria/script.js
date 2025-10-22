function check(){

    var wasBorn = parseInt(document.getElementById("birth").value)
    var res = document.getElementById("result")
    var clientAge = document.getElementById("age")

    if(isNaN(wasBorn)){
        res.textContent = "Type only numbers 🚫"
        res.style.color = "gold"
        return
    }

    const thisYear = new Date().getFullYear()
    const age = thisYear - wasBorn

    if(age >= 18){
      res.textContent = "Over 18, ENTRY ✅"
      clientAge.textContent = age
      document.getElementById("v1").style.display = "block"
      document.getElementById("v2").style.display = "none"

      document.getElementById("emoji01").style.display = "block"
      document.getElementById("emoji02").style.display = "none"
    }else{
      res.textContent = "Under 18, NOT ALLOWRD 🔞"
      clientAge.textContent = age
      document.getElementById("v2").style.display = "block"
      document.getElementById("v1").style.display = "none"

      document.getElementById("emoji01").style.display = "block"
      document.getElementById("emoji02").style.display = "none"
    }
    
}