//马踏棋盘的实现




class HorseBoard {
    constructor(x, y) {
        //X代表横坐标,即列,Y同理
        // this.X = x;
        // this.Y = y;
        this.count =0
        this.board = []
        this.visited=[] //所有位置是否均被访问this.board.length ** 2, true
        this.moves=[]
        for (let i = 0; i < x; i++) {
            this.board[i] = []
            for (let j = 0; j < y; j++) {
               this.board[i][j] = 0
            }
        }
    }

    //根据当前位置(point),马走日, (位置坐标)
    getPossibleMoves(chessboard, position) {
        const possibleMoves = [
            [position[0] - 1, position[1] - 2],
            [position[0] - 2, position[1] - 1],
            [position[0] + 1, position[1] - 2],
            [position[0] + 2, position[1] - 1],
            [position[0] - 2, position[1] + 1],
            [position[0] - 1, position[1] + 2],
            [position[0] + 1, position[1] + 2],
            [position[0] + 2, position[1] + 1],
        ];

        //边界过滤(这个过滤有问题)
        return possibleMoves.filter((move) => {
            const boardSize = chessboard.length;
            //最好不要写连续的判断, 需要隔开,否则会出错
            return ((0<=move[0] &&move[0] < boardSize) && (0<= move[1]&&move[1] < boardSize));
        });
    }
    
    isMoveAllowed(chessboard, move) {
        return chessboard[move[0]][move[1]] == 0;
    }

    isCompletelyVisited() {
        return (this.board.length ** 2) === this.count;
    }
    reSort(curBoard,moves){
        moves.sort((a,b)=>{
            let x=this.getPossibleMoves(curBoard,a).length
            let y=this.getPossibleMoves(curBoard,b).length
            return x-y
        })
    }
    //进行回溯(核心)现在存在问题
    /**
     * 
     * @param {*} chessboard 
     * @param {*} move 代表某个可以走的点
     */
    knightTourRecursive(chessboard, move) {
        const curBoard = chessboard;
        curBoard[move[0]][move[1]] = ++this.count
        let possibleMoves = this.getPossibleMoves(curBoard, move);
        // this.visited[move[0]*this.board.length+move[1]]=true
        // let move1=possibleMoves[?]
        // this.getPossibleMoves(curBoard,move1).length

        this.reSort(curBoard,possibleMoves)


        for (let i = 0; i < possibleMoves.length; i++) {
            let currentMove = possibleMoves[i];//第一个点,所有能走二维数组集合,走过的不能再放在里面

            if (this.isMoveAllowed(curBoard, currentMove)) {
                move=currentMove
                this.knightTourRecursive(curBoard,move)

                this.count--;
                curBoard[move[0]][move[1]]=0
            }
           
        }
        //使用贪心算法进行优化

        if (this.isCompletelyVisited()) {
            return
                
        }

    }

    main(step1=[0,0]) {
        let move = [];
        move = step1;

       this.knightTourRecursive(this.board, move);
      
        return this.board;
    }
}

//最后直接将走的棋盘位置给记录下来
let board = new HorseBoard(6,6)
// let a=board.main([0,0])

let a=board.main([4,1]) //这个代表行与列,先行后列
console.log(a);
