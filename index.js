let idEl = document.getElementById("something")
let idEl1 = document.getElementById("something1")

let idEl2 = document.getElementById("something2")
let idEl3 = document.getElementById("something3")
let tooltipText = document.getElementById("tooltipText")
let tooltipText1 = document.getElementById("tooltipText1")
let tooltipText2 = document.getElementById("tooltipText2")
let tooltipText3 = document.getElementById("tooltipText3")


let el = document.getElementById("input-container")


let annualIncome = document.getElementById("annualIncome")
let extraIncome = document.getElementById("extraIncome")
let deductions = document.getElementById("deductions")
let age = document.getElementById("age")




let popup = document.getElementById("popup");

const looseFocus = () => {
    if (annualIncome.value == "") {
        idEl.style.visibility = "visible"
        tooltipText.style.visibility = "visible";
    } else {
        idEl.style.visibility = "hidden"
        tooltipText.style.visibility = "hidden";
    }

}

const looseFocus1 = () => {
    idEl1.style.visibility = "visible"
    console.log('aknakdnaksnaknl')
    if (extraIncome.value == "") {
        idEl1.style.visibility = "visible"
        tooltipText1.style.visibility = "visible";
    } else {
        idEl1.style.visibility = "hidden"
        tooltipText1.style.visibility = "hidden";
    }
}

const looseFocus2 = () => {
    if (age.value == "") {
        idEl2.style.visibility = "visible"
        tooltipText2.style.visibility = "visible";
    } else {
        idEl2.style.visibility = "hidden"
        tooltipText2.style.visibility = "hidden";
    }
}


const looseFocus3 = () => {
    if (deductions.value == "") {
        idEl3.style.visibility = "visible"
        tooltipText3.style.visibility = "visible";
    } else {
        idEl3.style.visibility = "hidden"
        tooltipText3.style.visibility = "hidden";
    }
}


const verify = (event) =>{
    event.preventDefault()
    
    if(annualIncome.value && extraIncome.value && age.value && deductions.value !== ""){
        
        submitted()
    }else{
        looseFocus();
        looseFocus1();
        looseFocus2();
        looseFocus3();
    }
}


const submitted = () => {
    
    // event.preventDefault()
    
    console.log("submitted");

    let grossAnnualIncome = parseInt(document.getElementById("annualIncome").value) || 0;
    let ExtraIncome = parseInt(document.getElementById("extraIncome").value) || 0;
    let Deductions = parseInt(document.getElementById("deductions").value) || 0;
    let Age = parseInt(document.getElementById("age").value) || 0;

    let x = grossAnnualIncome + ExtraIncome - Deductions;

    let res = 0;
    if (x > 800000) {
        if (Age < 40) {
            res = x - 800000 <= 0 ? 0 : 0.3 * (x - 800000);
        } else if (age >= 40 && age < 60) {
            res = x - 800000 <= 0 ? 0 : 0.4 * (x - 800000);
        } else {
            res = x - 800000 <= 0 ? 0 : 0.1 * (x - 800000);
        }
    } else {
        res = x;
    }


    let popup = document.getElementById("popup");
    popup.innerHTML = `
        <h1>Your overall income will be</h1>
        <h3>${res}</h3>
        <p>after tax deductions</p>
        <button onclick="closePopup()">Close</button>
    `;
    popup.classList.add("open-popup");
};

const closePopup = () => {
    popup.classList.remove("open-popup");
};
