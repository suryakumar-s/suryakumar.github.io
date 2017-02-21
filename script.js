function computeChessBoardSquares() {
    var i;
    var count = document.getElementById('text-box').value;

    if (null != count) {
        console.log('Value is --> ', count);
        
        if (count == 0 || count < 1) {
            alert('Please enter a non-zero/non-negative integer');
        }

        else {
            for (i = 1; i <= count; i++) {
                if ((i % 2) == 0) {
                    //console.log('Value is even --> ', count);
                    document.write('<html><head><script type="text/javascript" src="script.js"></script><link rel="stylesheet" href="style.css"/></head><body><div class="parent-box-grey" id="parent-box-grey"></div></body></html>');
                }

                else {
                    //console.log('Value is odd --> ', count);
                    document.write('<html><head><script type="text/javascript" src="script.js"></script><link rel="stylesheet" href="style.css"/></head><body><div class="parent-box-black" id="parent-box-black"></div></body></html>');
                }
            }

        }
    }
}