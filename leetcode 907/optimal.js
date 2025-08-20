//IMP NOTES - https://www.notion.so/25285b61575a8092831ee8f6e6e7bd2e?source=copy_link

var sumSubarrayMins = function(arr) {
    let n = arr.length;
    const MOD = 1e9 + 7;  // Define MOD constant
    
    // Previous Less or Equal Element - O(n)
    let st1 = [];
    let ple = [];
    for (let i = 0; i < n; i++) {
        while (st1.length > 0 && arr[st1[st1.length - 1]] >= arr[i]) {
            st1.pop();
        }
        if (st1.length === 0) {
            ple.push(-1);
        } else {
            ple.push(st1[st1.length - 1]);
        }
        st1.push(i);
    }
    
    // Next Less Element - O(n)
    let st = [];
    let nle = new Array(n).fill(n);
    for (let i = n - 1; i >= 0; i--) {
        while (st.length > 0 && arr[st[st.length - 1]] > arr[i]) {
            st.pop();
        }
        if (st.length === 0) {
            nle[i] = n;
        } else {
            nle[i] = st[st.length - 1];
        }
        st.push(i);
    }
    
    // Calculate result - O(n)
    let res = 0;
    for (let i = 0; i < n; i++) {
        let left = i - ple[i];
        let right = nle[i] - i;
        res = (res + arr[i] * left * right) % MOD;  // Apply MOD here
    }
    
    return res;
};