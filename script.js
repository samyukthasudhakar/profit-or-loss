const stockPrice = document.querySelector("#stock-price");
const stockQty = document.querySelector("#stock-qty");
const currentPrice = document.querySelector("#current-price");
const find = document.querySelector("#calculate");
const absolute = document.querySelector("#absolute");
const percentage = document.querySelector("#percentage");

function calculateProfitOrLoss(ip,qty,curr){
    if(ip > curr){
        
        var loss = (ip-curr) * qty;
        var lossPercent = (loss/ip)*100;
        absolute.innerText = "Loss : " + loss + " Rs";
        percentage.innerText="Loss Percentage : " + lossPercent + " % 😥";
    }
    else if(curr > ip){
        
        var profit = (curr-ip) * qty;
        var profitPercent = (profit/ip)*100 ;
        absolute.innerText = "Profit : " + profit +" Rs";
        percentage.innerText="Profit Percentage : " + profitPercent + " % 🥳";
    }
    else{
        absolute.innerText = "No loss, no gain 🥳 "
        percentage.innerText="";
    }
}
function findProfitOrLoss(){

    var ip = stockPrice.value;
    var qty = stockQty.value;
    var curr = currentPrice.value;

    if(ip==="" || qty==="" || curr===""){
        absolute.innerText="Please fill in all fields ✍🏽";
        percentage.innerText="";
    }

    else{
        calculateProfitOrLoss(Number(ip),Number(qty),Number(curr));
    }
    
}


find.addEventListener("click",findProfitOrLoss);
