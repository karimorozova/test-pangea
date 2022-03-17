const BASED_URL = 'https://admin.pangea.global/api/steps';

const refs = {
    steps: document.querySelector('#steps'),
    container: document.querySelector('.container'),
}

const calculationUnit = '<label for="unit" class="label">Unit</label><select name="unit" id="unit"><option value="other">Other</option><option value="finance">Finance</option<option value="igaming">Igaming</option><option value="automotive">Automotive</option></select>'
console.log(calculationUnit);
// fetch(BASED_URL).then(response => {
//     if(!response.ok) {
//         refs.container.insertAdjacentHTML('beforeend', calculationUnit)
//         throw new Error(response.status)
//     }
//     return response.json()}).then(data => {
//         refs.container.insertAdjacentHTML('beforeend', calculationUnit)
//     }).catch(console.log)

if(refs.steps.hasAttribute('selected')) {
    console.log('hi');
}