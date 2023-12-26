export const giaiThua = (n: number) : number => {
    if (n <= 1) {
        return 1;
    }
    return n * giaiThua(n - 1);
}

export const kiemTraSoNguyenTo = (n: number) : boolean => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}