
const calculateTemp = () => {
    const numberTemp = document.getElementById("temp").value;

    const tempSelected = document.querySelector("#temp_diff");
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const fahToCel = (fahr) => {
        let Celsius = ((fahr - 32) * 5) / 9;
        return elsius;
    };

    const celToFeh = (cel) => {
        let Farenheit = cel * (9/5) + 32;
        return Farenheit;
        
    };

    let result
    if(valeTemp = "cel") {
        result = celToFah(numberTemp)
        document.getElementById("resultContainer").innerHTML ='= ${result.toFixed(2)} °Farenheit'
    } else {
        result = fahToCe(numberTemp);
        document.getElementById(
            "resultContainer"
        ).innerHTML = '= ${result.toFixed(2)} °Celsius'
    }
};