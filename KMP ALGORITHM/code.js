function computeLPS(pattern) {
    const m = pattern.length;
    // Initialize LPS array with zeros
    const lps = new Array(m).fill(0);
    
    // Length of previous longest prefix & suffix
    let lenPrev = 0;
    
    // Start from the second character (index 1)
    // lps[0] is always 0 by definition
    let i = 1;
    
    // Process the pattern and build the LPS table
    while (i < m) {
        if (pattern[i] === pattern[lenPrev]) {
            // Current character matches with the character at lenPrev position
            // Increment the matching length
            lenPrev++;
            // Store the length in LPS table
            lps[i] = lenPrev;
            // Move to next position in pattern
            i++;
        } else {
            // Characters don't match
            if (lenPrev !== 0) {
                // Fall back to the previous longest prefix-suffix
                // This is where we avoid starting from scratch
                lenPrev = lps[lenPrev - 1];
                // Note: we don't increment i here, we try again with the new lenPrev
            } else {
                // No prefix matches the current position
                lps[i] = 0;
                // Move to next position
                i++;
            }
        }
    }
    
    return lps;
}

function kmpSearch(text, pattern) {
    // Handle edge cases
    if (!pattern) return [0]; // Empty pattern matches at position 0
    if (!text) return []; // Empty text can't contain anything
    
    const n = text.length;
    const m = pattern.length;
    const matches = []; // Array to store match positions
    
    // Step 1: Compute the LPS table
    const lps = computeLPS(pattern);
    
    // Step 2: Perform the search
    let i = 0; // Index for text
    let j = 0; // Index for pattern
    
    while (i < n) {
        // Characters match at current position
        if (pattern[j] === text[i]) {
            i++; // Move to next text character
            j++; // Move to next pattern character
        }
        
        // Pattern is completely matched
        if (j === m) {
            // Found a match at position i-j
            matches.push(i - j);
            // Look for the next match, using LPS to avoid redundant comparisons
            j = lps[j - 1];
        } 
        // Mismatch after j matches
        else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                // Use LPS value to skip comparisons
                j = lps[j - 1];
            } else {
                // We're at the beginning of pattern, move to next text character
                i++;
            }
        }
    }
    
    return matches;
}

