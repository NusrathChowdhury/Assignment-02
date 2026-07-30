function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== 'number' || tokensUsed < 0){
        return 'Invalid'
    }
    if(tokensUsed <= 500){
        return 0
    }

    let extra =tokensUsed-500
    let cost=Math.floor(extra/100)*5

    return cost
}
console.log(calculateAiCost(300));    
console.log(calculateAiCost(500));    
console.log(calculateAiCost(650));    // 5
console.log(calculateAiCost(1000));   // 25
console.log(calculateAiCost(-10));    // Invalid
console.log(calculateAiCost("500"));  // Invalid