
let clickCounter = 0;

function updateDisplay() {
    document.querySelector('.container span').textContent = clickCounter;
  }
  
  function updateLastAction(action) {
    document.querySelector('.last-action').textContent = `Last action: ${action}`;
  }

  function minusFive() {
    clickCounter = clickCounter - 5;
    updateDisplay();
    updateLastAction('-5');
  }
  
  function minusOne() {
    clickCounter -= 1;
    updateDisplay();
    updateLastAction('-1');
  }
  
  function reset() {
    clickCounter = 0;
    updateDisplay();
    updateLastAction('reset');
  }
  
  function plusOne() {
    clickCounter += 1;
    updateDisplay();
    updateLastAction('+1');
  }
  
  function plusFive() {
    clickCounter = clickCounter + 5;
    updateDisplay();
    updateLastAction('+5');
  }
