//栈的实现,
// 使用arr模拟

class Stack{
    constructor(maxSize){
        // let {maxSize,arr,top}=this
        this.maxSize=maxSize
        this.arr=Array(maxSize)
        this.top=0    
    }
    //判断是否为空
    isEmpty(){
        return this.top==0
    }
    // 判断是否满了
    isFull(){
        return this.top==this.maxSize
    }
    //压栈
    pushStack(num){
        if(this.isFull()){return}
        else{
            this.arr[this.top]=num;
            this.top++
        }
    }
    //取栈
    getStack(){
        if(this.isEmpty()){return}
        else{
            let temp=this.arr[this.top-1]
            this.top--;
            return temp
        }
    }
    //展示
    showStack(){
        if(this.isEmpty())return;
        for (let i = 0; i <this.top; i++) {
           
            console.log(`this.arr[${i}]=${this.arr[i]}`);  
        }
    }

}
let st=new Stack(5)
st.pushStack(1)
st.pushStack(2)
st.pushStack(3)

st.getStack()
st.pushStack(4)
st.pushStack(5)

st.showStack()
console.log(st.arr);


