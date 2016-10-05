//Begin with the document ready function
$(document).ready(function() {
  $('#depositChecking').on('click',deposOrWithdraw);
  $('#withdrawChecking').on('click',deposOrWithdraw);
  $('#depositSavings').on('click',deposOrWithdraw);
  $('#withdrawSavings').on('click',deposOrWithdraw);
})

function makeANum(string) {
    return parseInt(string.replace(/\D/g,''));
}

function deposOrWithdraw(e) {
  e.preventDefault();
  var $clicked = $(e.currentTarget);
  var clickedId = $clicked.attr('id');
  var account;
  var transaction;

//Determine from button id which account to target

  if(clickedId.search('Savings') > 0) {
    account = 'Savings';
  } else {
    account = "Checking";
  }

//Set account's amount and balance variables

  var amount = makeANum($('#amount' + account).val());
  var balance = makeANum($('#balance' + account).text());

  if (!Number.isInteger(amount) || !Number.isInteger(balance)) {
    alert("You must insert a number!");
    return false;
  }

//Determine from button id which transaction to run

  if(clickedId.search('deposit') >= 0) {
    transaction = function() {
      balance += amount;
      return balance;
    }
  } else {
    transaction = function() {
      balance -= amount;
      return balance;
    }
  }

  var newBalance = transaction();

  if (newBalance < 0) {
    alert('You cannot overdraw the account!');
  } else {
    $('#balance' + account).text('$' + newBalance);
    $('#amount' + account).val('');
  }
}

//--------- CODE GRAVEYARD ----------//

// function deposit(e) {
//   e.preventDefault();
//   var $clicked = $(e.currentTarget);
//   var clickedId = $clicked.attr('id');
//   var account;
//
//   if(clickedId.search('Savings') > 0) {
//     account = 'Savings';
//   } else {
//     account = "Checking";
//   }
//
//   var amount = makeANum($('#amount' + account).val());
//   var balance = makeANum($('#balance' + account).text());
//
//   if (!Number.isInteger(amount) || !Number.isInteger(balance)) {
//     alert("You must insert a number!");
//   } else {
//     balance += amount;
//     $('#balance' + account).text('$' + balance);
//     $('#amount' + account).val('');
//   }
// }
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
