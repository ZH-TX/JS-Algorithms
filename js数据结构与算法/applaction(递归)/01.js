/**
 * 递归的使用:\ (堆栈, 堆引用类型的指向)
 * 1. 就像数学中数列中的通项表达式一样, 表达程序的精髓
 * 2. 写递归, 需要向退出递归的条件逼近
 * 
 */

 //1, 迷宫问题:使用二维数组来进行模拟
// 1代表墙, 2代表路线
 class AiGong{
    constructor(n,m){
        this.arr=[]
        for(let i=0;i<n;i++){
            this.arr[i]=[]
            for(let j=0;j<m;j++){
                this.arr[i][j]=0
            }
        }
        //四周都是墙(横)
        for(let i=0;i<m;i++){
            this.arr[0][i]=1
            this.arr[n-1][i]=1    
        }
        //竖
        for(let i=0;i<n;i++){
            this.arr[i][0]=1
            this.arr[i][m-1]=1
        }
        this.arr[3][1]=1
        this.arr[3][2]=1
        this.arr[3][3]=1
        return this.arr
    }
    
 }

 let map=new AiGong(8,8)
 console.log(map);
 getWay(map,1,1)
 console.log('------------');
 console.log(map);
  /**
     * 1.(1,1)出发, (6,6)为出口
     * map(i,j), 0没有走过,1为墙,2为可以走的路, 3该店走过走不通
     * 同时需要制定一个策略: 规定开始的走法: 下->右->上->左, 走不通在进行回溯
     * 
     * */

function getWay(map=[],i,j){
    
    if(map[6][6]==2)return true;
    else{
        if(map[i][j]==0){
            //按策略: 下->右->上->左, 
            map[i][j]=2
            if(getWay(map,i+1,j))return true;
            else if(getWay(map,i,j+1))return true;
            else if(getWay(map,i-1,j))return true;
            else if(getWay(map,i,j-1))return true;
            else{
                map[i][j]=3
                return false
            }
            
        }else {
            return false
        }
    }
} 

 


