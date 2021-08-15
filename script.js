const stockPrice = document.querySelector("#stock-price");
const stockQty = document.querySelector("#stock-qty");
const currentPrice = document.querySelector("#current-price");
const find = document.querySelector("#calculate");
const result = document.querySelector("#result");

function calculateProfitOrLoss(ip,qty,curr){
    if(ip > curr){
        
        var loss = (ip-curr) * qty;
        var lossPercent = (loss/ip)*100;
        result.innerText = "Sorry you have incurred loss of " + loss + " and loss percentage is " + lossPercent+"% 😥";
    }
    else if(curr > ip){
        
        var profit = (curr-ip) * qty;
        var profitPercent = (profit/ip)*100 ;
        result.innerText = "You have incurred profit of " + profit + " and profit percentage is " + profitPercent+"% 🤑";
    }
    else{
        result.innerText = "No loss, no gain 🥳"
    }
}
function findProfitOrLoss(){

    var ip = Number(stockPrice.value);
    var qty = Number(stockQty.value);
    var curr = Number(currentPrice.value);

    if(ip===0 || qty===0 || curr===0){
        result.innerText="Please fill in all fields ✍🏽";
    }

    else{
        calculateProfitOrLoss(ip,qty,curr);
    }
    
}


find.addEventListener("click",findProfitOrLoss);
