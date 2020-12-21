const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

// Use matchMedia to check the user preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('dark', shouldAdd);
}

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    if (
        enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0 

    ){
        function presentAlert() {
            const alert = document.createElement('ion-alert');
            alert.cssClass = 'my-custom-class';
            alert.header = 'Alert';
            alert.subHeader = 'Subtitle';
            alert.message = 'This is an alert message.';
            alert.buttons = ['OK'];
          
            document.body.appendChild(alert);
            return alert.present();
          }
          presentAlert();
          return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ':$' + enteredAmount;
    expensesList.appendChild(newItem);
    
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;
    clear();
});

cancelBtn.addEventListener('click', clear);