function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
function rente() {
    var term, rent, star, slut;
    slut = document.getElementById("rente1").value;
    star = document.getElementById("rente2").value;
    rent = document.getElementById("rente3").value;
    term = document.getElementById("rente4").value;
    
    document.getElementById("renteResult1").innerHTML = parseInt(star) * (Math.pow(parseInt(rent) + 1, term));
    document.getElementById("renteResult2").innerHTML = star;
    document.getElementById("renteResult3").innerHTML = rent;
    document.getElementById("renteResult4").innerHTML = term;
}

function kombinatorik() {
    var seg1A, seg1B;
    seg1A = document.getElementById("boxKombinatorik1").value;
    seg1B = document.getElementById("boxKombinatorik2").value;
    
    document.getElementById("kombinatorikResult1").innerHTML = (factorial(seg1A)) / factorial((seg1A - seg1B));
    document.getElementById("kombinatorikResult2").innerHTML = Math.pow(seg1A, seg1B);
    document.getElementById("kombinatorikResult3").innerHTML = factorial(seg1A) / (factorial((seg1A - seg1B)) * factorial(seg1B));
    document.getElementById("kombinatorikResult4").innerHTML = (factorial(((parseInt(seg1A)) - 1 + (parseInt(seg1B))))) / (factorial((parseInt(seg1A - 1))) * factorial(seg1B));  
}
