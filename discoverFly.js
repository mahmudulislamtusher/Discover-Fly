// First Class Ticket
function handleTicketChange(isIncrease){
    const ticketInput = document.getElementById('ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = 0;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    const ticketTotal = ticketNewCount * 150;
    document.getElementById('ticket-total').innerText = ticketTotal;
    calculateTotal()
}
// Economic Class
function handleEconomics(isIncrease){
    const ticketInput = document.getElementById('economic-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = 0;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    const ticketTotal = ticketNewCount * 100;
    document.getElementById('economic-count').innerText = ticketTotal;
    calculateTotal()
}

// calculateTotal
function calculateTotal(){
    
    const totalPrice = (document.getElementById('ticket-count').value * 150) + (document.getElementById('economic-ticket-count').value * 100);
    console.log(totalPrice)
    document.getElementById('sub-total').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

