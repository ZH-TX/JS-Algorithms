

 /**
  * 约瑟夫问题: 单向环形链表的应用
  * 环形: 链表的首尾需要连接起来
  */
 class NodeList{
    constructor(rank){
        this.rank=rank
        this.next=null
    }
    // getRank(){
    //     return this.rank
    // }
    // setRank(rank){
    //     return this.rank=rank
    // }
    // getNext(){
    //     return this.next //实现循环
    // }
    // setNext(next){
    //     return this.next=next
    // }

    logNode(){
        console.log(`rank:${this.rank}`);   
    }
}
class circleNode{
    constructor(){
        this.first=new NodeList(1)
    }

    handleNode(num){
        let curLast=this.first    //辅助指针
        
        for (let i = 1; i < num+1; i++) {
            if(i==1){
                this.first.next=this.first
            }else{
                let node=new NodeList(i)
                curLast.next=node
                node.next=this.first
                curLast=node
            }
           
        }
       
    }

    insertNode(rank){
        let temp=this.head
        while(true){
            if(temp.next==null){//需要将最后的节点指向第一个节点
                temp.next=this.head
                break;
            }
            

            if(rank<temp.next.rank){
               break;
            }
            temp=temp.next
        }
        let temp2=temp.next
        let newTemp=new NodeList(rank)
        temp.next=newTemp
        newTemp.next=temp2
    }  

    delNode(rank){
        let temp=this.head
        while(true){
            if(temp.next==null)break;
            if(rank==temp.next.rank)break;
            temp=temp.next         
        }
        let temp2=temp.next
        temp.next=temp2.next
    }
    
    showNode(){
        let temp=this.first
        // if(this.isEmpty())return;
        while(true){
            temp.logNode()
            if(temp.next==this.first)break;
            temp=temp.next   
        }
    }
}

let a=new circleNode()
a.handleNode(5)
// a.delNode(3)

a.showNode()
console.log(a);





  //nodelist类
class NodeList{
    constructor(rank,name,desc){
        this.rank=rank
        this.name=name
        this.desc=desc
        this.next
    }
    showNode(){
        console.log(`rank:${this.rank},name:${this.name},desc:${this.desc},`);   
    }
}


//没有实现按英雄排名进行插入
class singleNode{
    constructor(){
        this.head=new NodeList(0,'','')
    }
    //找到最后的节点
    // 将最后节点的next指向新的节点
    isEmpty(){
        return this.head.next==null;
    }


    addNode(rank,name,desc){ //这个Node需要吧实现Nodelist实例当做参数{rank,name,desc}
       let temp=this.head
       //遍历链表找到最后
       //非连续结构的遍历, temp相当于index 指针
       let rankNo;
       while(true){
            if(temp.next==null){
                break;
            }
            //没有找到指向下一个
            temp=temp.next 
       }
       //循环结束添加的新节点指向最后  添加
       temp.next=new NodeList(rank,name,desc)   
    }
           //若要实现按照编号顺序添加,
    /**
     * 1.首先需要一个辅助指正, temp
     * 2. 将新节点rank前一个位置next新节点
     * 3.后一个位置: 由新节点的next指向后一个节点
     * 
     */  
    insertNode(rank,name,desc){
        let temp=this.head

        // let rankNo;
        while(true){
            if(temp.next==null)break;
            // if(temp.rank<rank<temp.next.rank) {
            //     let temp2=temp.next
            //     let newTemp=new NodeList(rank,name,desc)
            //     temp.next=newTemp
            //     newTemp.next=temp2
            // }
            // temp=temp.next 
            if(rank<temp.next.rank){
               break;
            }
            temp=temp.next
           
        }
        let temp2=temp.next
        let newTemp=new NodeList(rank,name,desc)
        temp.next=newTemp
        newTemp.next=temp2
        
    }  

    //按照rank就行删除就可,与插入相反
    delNode(rank){
        let temp=this.head

        // let rankNo;
        while(true){
            if(temp.next==null)break;
         
            if(rank==temp.next.rank)break;
            
            temp=temp.next
           
        }
        let temp2=temp.next
        temp.next=temp2.next
        // newTemp.next=temp2
    }
    



    showNode(){
        let temp=this.head
        if(this.isEmpty())return;
        while(true){
            if(temp.next==null)break;
            //显示节点信息
           
            //同时将temp指针进行后移,完成循环
            temp=temp.next
            temp.showNode()
        }
        

    }

}
let a=new singleNode()
a.addNode(1,'孙悟空','跑得快')
a.addNode(3,'沙和尚','做的多')
a.insertNode(2,'猪八戒','吃的多')
a.delNode(3)

a.showNode()
console.log(a);


