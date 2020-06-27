//队列的实现;
//顺序队列以及循环队列
class Queue{
    constructor(maxSize){
        this.maxSize=maxSize;
        this.arr= Array(maxSize);
        this.front=0; //队列头
        this.rear=0;  // 队列尾
    }
    //判断是否满了
    isFull(){
        return (this.rear+1)%this.maxSize==this.front
    }
    //判断队列是否为空
    isVoid(){
        return this.front==this.rear
    }
    //添加数据到队列
    addQueue(num){
        if(this.isFull()){
            return;
        }else{
            this.arr[this.rear]=num;
            this.rear=(this.rear+1)%this.maxSize
        }
    }
    //出队列
    getQueue(){
        if(this.isVoid()){
            return;
        }else{
            let temp=this.arr[this.front];
            this.front=(this.front+1)%this.maxSize
            return temp
        }
    }
    showQueue(){
        //队列中有效的个数
        if(this.isVoid()){return;}
        else{
            for(let i=this.front;i<this.front+(this.rear-this.front+this.maxSize)%this.maxSize;i++){
                console.log(`arr[${i%this.maxSize}]=${this.arr[i%this.maxSize]}`);          
            }
        }

    }

}
let a=new Queue(5)
a.addQueue('A')
a.addQueue('B')
a.addQueue('C')
a.addQueue('D')
// a.addQueue('E')
a.getQueue()
a.getQueue()

a.addQueue('1')
a.addQueue('2')

// a.addQueue('3')

a.showQueue()
console.log(a.arr);



/**
 * 
 * 
 */


