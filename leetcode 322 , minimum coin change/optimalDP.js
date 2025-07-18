//time - O(n*amount)
//space - O(amount);

var coinChange = function (coins, amount) {
    let n = coins.length;
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0;//0 coins required to make 0rs sum.
    for (let i = 0; i < n; i++) {
        let temp = new Array(amount + 1).fill(Infinity);
        temp[0] = 0;
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i]) {
                temp[j] = Math.min(1 + temp[j - coins[i]], dp[j]);
                //we take temp[j-coins[i]] as when we take the curr coin we find the min
                //num of coins req to make j-coins[i] , while having the option to 
                //take the SAME COIN AGAIN , but whenever we do take it we do a +1.
            }
            else {
                temp[j] = dp[j];
            }
        }
        dp = temp;
    }
    if (dp[amount] < Infinity) return dp[amount];
    return -1;
};