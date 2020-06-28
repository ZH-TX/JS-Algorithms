
//八皇后的问题解决
/**
 * 1.创建一个一维数组表示, 下标表示行, 数据元素为列(均+1)
 * 例:[0,4,7,5,2,6,1,3]
 */

class queen8{
    
    constructor(n){
        this.count=0
        this.judgeCount=0
        this.max=n
        this.array=Array(n)
    }

    // no:代表第no个皇后,表示地no个皇后是否与前面的冲突
    //判断是否冲突, 列冲突, 斜线冲突
    judge(n){
        this.judgeCount++
        for (let i = 0; i < n; i++) {
            let num=this.array[i]-this.array[n]
            if(num==0||Math.abs(i-n)==Math.abs(num)){return false};
        }return true

    }

    mian(n){
        //每次冲第一列开始放, 在进行规则判断
        //n代表第几个皇后, 也就是行:
        if(n==this.max){
            this.count++
            this.logArr()
            return;
        }else{
            for (let i = 0; i < this.max; i++) {//i代表列
                this.array[n]=i
                if(this.judge(n)){//为正代表冲突, 进行下一次赋值
                    //不冲突放置 n+1个
                    this.mian(n+1)
                } 
            }
        }
    }

    logArr(){
        console.log(this.array);   
    }
}

//测试
let q=new queen8(8)
q.mian(0)
console.log(`总解法:${q.count}`,`回溯:${q.judgeCount}`);
