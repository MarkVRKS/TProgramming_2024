function digitalRoot(n) {

    if(n === 0){
        return 0
    } else {
        return 1 +((n-1) % 9);
    }

}
