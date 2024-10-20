function summation() {
    let output = [];
    const arr1 = [1, 0, 2, 3, 4];
    const arr2 = [3, 5, 6, 7, 8, 13];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        const value1 = arr1[i] || 0;
        const value2 = arr2[i] || 0;
        output.push(value1 + value2);
    }

    console.log(output); 
}

summation();