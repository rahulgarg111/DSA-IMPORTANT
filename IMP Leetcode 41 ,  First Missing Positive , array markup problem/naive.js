/*
we know if size of array is n then maximum possible smallest positive number missing 
    //could be n , so we know answer lies in the range of [1 -> n].

    //so - NAIVE APPROACH 1 - O(n^2)time , O(1)space - 
    /* -> check for every number in range 1 to n , and see if they are present in nums or not
    the first number which isnt is the answer(smallest possible)
    
    NAIVE APPROACH 2 - O(n)time , O(n)space - 
    we make a frequency map for every number in range 1-n , and then iterate in the map to see 
    the smallest missing 
*/    