//Begin with the document ready function
$(document).ready(function() {
  $('#depositChecking').on('click',depositChecking);
  $('#withdrawChecking').on('click',withdrawChecking);
  $('#depositSavings').on('click',depositSavings);
  $('#withdrawSavings').on('click',withdrawSavings);
})

function makeANum(string) {

    return parseInt(string.replace('$',''));

}

function depositChecking(e) {
  e.preventDefault();
  var amount = makeANum($('#amountChecking').val());
  var checkingBalance = makeANum($('#checkingBalance').text());

  if (!Number.isInteger(amount) || !Number.isInteger(checkingBalance)) {
    alert("You must insert a number!");
  } else {
    checkingBalance += amount;
    $('#checkingBalance').text('$' + checkingBalance);
    $('#amountChecking').val('');
  }
}

function withdrawChecking(e) {
  e.preventDefault();
  var amount = makeANum($('#amountChecking').val());
  var checkingBalance = makeANum($('#checkingBalance').text());

  if(checkingBalance - amount < 0) {
    alert('You cannot overdraw the account!');
  } else {
    checkingBalance -= amount;
    $('#checkingBalance').text('$' + checkingBalance);
    $('#amountChecking').val('');
  }
}

function depositSavings(e) {
  e.preventDefault();
  var amount = makeANum($('#amountSavings').val());
  var savingsBalance = makeANum($('#savingsBalance').text());

  if (!Number.isInteger(amount) || !Number.isInteger(savingsBalance)) {
    alert("You must insert a number!");
  } else {
    savingsBalance += amount;
    $('#savingsBalance').text('$' + savingsBalance);
    $('#amountSavings').val('');
  }
}

function withdrawSavings() {
  var amount = makeANum($('#amountSavings').val());
  var savingsBalance = makeANum($('#savingsBalance').text());

  if(savingsBalance - amount < 0) {
    alert('You cannot overdraw the account!');
  } else {
    savingsBalance -= amount;
    $('#savingsBalance').text('$' + savingsBalance);
    $('#amountSavings').val('');
  }
}
    //Checking account deposit function

      //On click of the depositChecking button

        //Get value from the amountChecking input field

        //Take that value and add it to the existing value in the checkingBalance div

    //Checking account withdrawl funtion

      //On click of the withdrawChecking button

        //Get value from the amountChecking input field

        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account

    //Savings account deposit function

      //On click of the depositSavings button

        //Get value from the amountSavings input field

        //Take that value and add it to the existing value in the savingsBalance div

    //Savings account withdraw funtion

      //On click of the withdrawl button

        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
