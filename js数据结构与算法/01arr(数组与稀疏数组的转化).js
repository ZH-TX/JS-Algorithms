// 11*11的数组 0无, 1白 ,2黑

    class SparseArr {
        constructor(n,m) {
            this.n=n;
            this.m=m;
            let arrTwo = [];
            for (let i = 0; i < n; i++) {
                arrTwo[i] = [] //这一步很重要
                for (let j = 0; j < m; j++) {
                    arrTwo[i][j] = 0
                }
            }
            console.log(arrTwo);
            
            // return arrTwo
        }
        //二维数组的创建
        arr22(n, m) {
            let arrTwo = [];
            for (let i = 0; i < n; i++) {
                arrTwo[i] = [] //这一步很重要
                for (let j = 0; j < m; j++) {
                    arrTwo[i][j] = 0
                }
            }
            console.log(arrTwo);
            return arrTwo
        }
    }
    let newArr=new SparseArr(2,2)

    console.log(newArr.n);
    



//其他方法
function arr22(n, m) {
    let arrTwo = [];
    for (let i = 0; i < n; i++) {
        arrTwo[i] = [] //这一步很重要
        for (let j = 0; j < m; j++) {
            arrTwo[i][j] = 0
        }
    }

    arrTwo[1][2] = 1
    arrTwo[2][3] = 2


    console.log(arrTwo);
    //转成稀疏数组
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arrTwo[i][j] !== 0) {
                sum++
            }
        }
    }
    let SpareArr = [];
    for (let i = 0; i < sum+1; i++) {
        SpareArr[i] = [] //这一步很重要
        for (let j = 0; j < 3; j++) {
            SpareArr[i][j] = 0
        }
    }
    
    SpareArr[0][0] = n
    SpareArr[0][1] = m
    SpareArr[0][2] = sum
    
    let i1 = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arrTwo[i][j] !== 0) {
               
                SpareArr[i1][0] = i
                SpareArr[i1][1] = j
                SpareArr[i1][2] = arrTwo[i][j]
                i1++
            }


        }
    }
    console.log(sum,SpareArr);
}

arr22(11, 11)