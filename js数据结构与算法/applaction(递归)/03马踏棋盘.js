//马踏棋盘的实现




class HorseBoard {
    constructor(x, y) {
        //X代表横坐标,即列,Y同理
        // this.X = x;
        // this.Y = y;
        this.board = []
        for (let i = 0; i < x; i++) {
            this.board[i] = []
            for (let j = 0; j < y; j++) {
               this.board[i][j] = 0
            }
        }
    }

    //根据当前位置(point),马走日, 
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

        //边界过滤
        return possibleMoves.filter((move) => {
            const boardSize = chessboard.length;
            //最好不要写连续的判断, 需要隔开,否则会出错
            return ((0<=move[0] &&move[0] < boardSize) && (0<= move[1]&&move[1] < boardSize));
        });
    }

    isMoveAllowed(chessboard, move) {
        return chessboard[move[0]][move[1]] !== 1;
    }

    isBoardCompletelyVisited(chessboard, moves) {
        const totalPossibleMovesCount = chessboard.length ** 2;
        const existingMovesCount = moves.length;
        return totalPossibleMovesCount === existingMovesCount;
    }

    knightTourRecursive(chessboard, moves) {
        const currentChessboard = chessboard;
        if (this.isBoardCompletelyVisited(currentChessboard, moves)) {
            return true;
        }
        const lastMove = moves[moves.length - 1];
        const possibleMoves = this.getPossibleMoves(currentChessboard, lastMove);
        for (let moveIndex = 0; moveIndex < possibleMoves.length; moveIndex += 1) {
            const currentMove = possibleMoves[moveIndex];
            if (this.isMoveAllowed(currentChessboard, currentMove)) {
                moves.push(currentMove);
                currentChessboard[currentMove[0]][currentMove[1]] = 1;
                if (this.knightTourRecursive(currentChessboard, moves)) {
                    return true;
                }
                moves.pop();
                currentChessboard[currentMove[0]][currentMove[1]] = 0;
            }
        }

        return false;
    }

    main(step1=[0,0]) {
        const moves = [];
        const firstMove = step1;
        moves.push(firstMove);

        this.board[firstMove[0]][firstMove[0]] = 1;
        const solutionWasFound = this.knightTourRecursive(this.board, moves);
      
        return solutionWasFound ? moves : [];
    }
}

//
let board = new HorseBoard(6,6)
let a=board.main([3,3])
console.log(a);
