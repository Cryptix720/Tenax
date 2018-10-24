'use strict'

/*High performance plugin for Tenax*/

function deleteFunc(arr, value) {


let formData = new FormData(arr);
let formValue = new FormValue(value);


for (formData >= 0; formData < formValue; formData++) {
if (value === arr[formData]) {
return true
}else{
	formData.delete('cache')
    formData.delete('./{path}/{file}.txt')
	formData.delete('oldCode')
	formData.delete('reuseCode')
}

}
return false
}

module.exports = deleteFunc