//马踏棋盘的实现




class HorseBoard {
    constructor(x, y) {
        //X代表横坐标,即列,Y同理
        // this.X = x;
        // this.Y = y;
        this.count =0
        this.board = []
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

    isBoardCompletelyVisited() {
        return (this.board.length ** 2) === this.count;
    }
    //进行回溯(核心)现在存在问题
    /**
     * 
     * @param {*} chessboard 
     * @param {*} move 代表某个可以走的点
     */
    knightTourRecursive(chessboard, move) {
        const curBoard = chessboard;
       
       //代表第一个
        // this.moves.push(move)
        let possibleMoves = this.getPossibleMoves(curBoard, move);
        curBoard[move[0]][move[1]] = ++this.count
        //如何达到回溯的功能呢??回退上一个点,的其他位置
        // if(possibleMoves.length==0){

        // }
        for (let i = 0; i < possibleMoves.length; i++) {
            let currentMove = possibleMoves[i];//第一个点,所有能走二维数组集合

            if (this.isMoveAllowed(curBoard, currentMove)) {
                move=currentMove
                this.knightTourRecursive(curBoard,move)
                
            }else{
                //这个一点行不通
            }
        }
        // this.moves.pop()
        // move=this.moves[this.moves.length-1]
        // curBoard[move[0]][move[1]]=0

        if (!this.isBoardCompletelyVisited()) {
            curBoard[move[0]][move[1]]=0
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
let a=board.main([0,0])

// let a=board.main([2,1])
console.log(a);
