const {success, error}=require("../utils/responseWrapper");

const getPrimeNumbers=async(req,res)=>{
    try{
        const {number}=req.query

        if(isNaN(number)){
            return res.send(error(400,"Passed values is not a number"));
        }
        const allPrimes=getPrimes(Number(number))
        console.log("I am here with number ",number);
        return res.send(success(200,allPrimes));
    }catch(e){
        return res.send(error(500,e.message));
    }
}

function getPrimes(n) {
    const primes = [];
  
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
  
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primes.push(i);
      }
    }
  
    return primes.join(', ');
  }

module.exports={
    getPrimeNumbers
}