$(document).ready(function() {


    $('#btn-loaddata').click(() => {
      loadPriceApi();
      //document.getElementById("btn-loaddata").disabled = "true";
      //$('#btn-loaddata').prop('disabled', true);
      //"btnloaddata".disabled = "true";
    });
    $('#btn-cleardata').click(()=>{
        clearpricedata();
    });
  
  });


function loadPriceApi() {
    // TODO: get the random joke from the API
    let val = $('#Cryptocurrencyform').val();
    fetch("https://api.nomics.com/v1/currencies/ticker?key=28cb5d59967a8f4d186f5de72b904dec&ids=BTC,ETH,XRP,ADA,LTC,BCH,DOT,BNB,UNI,LINK,VET,THETA&interval=1d,30d&convert=EUR&per-page=100&page=1")
    .then(response => response.json())
    .then(data => {
        console.log(data)
       
        data.forEach((currency) => {
            if(currency.id==val){
                //console.log(currency.id)
                //console.log(currency.price)
                $('#c_id').empty();
                $('#c_name').empty();
                $('#c_price').empty();
                $('#c_mcap').empty();
                $('#c_msupply').empty();
                $('#c_csupply').empty();
                $('#c_rank').empty();


                let row = currency.id;
                $('#c_id').append(row);
                row = currency.name;
                $('#c_name').append(row)
                row = currency.price;
                $('#c_price').append(row)
                row = currency.market_cap;
                $('#c_mcap').append(row)
                row = currency.max_supply;
                $('#c_msupply').append(row)
                row = currency.circulating_supply;
                $('#c_csupply').append(row)
                row = currency.rank;
                $('#c_rank').append(row)
            }
        });
    });
  }

function clearpricedata(){
    $('#c_id').empty();
    $('#c_name').empty();
    $('#c_price').empty();
    $('#c_mcap').empty();
    $('#c_msupply').empty();
    $('#c_csupply').empty();
    $('#c_rank').empty();
}
