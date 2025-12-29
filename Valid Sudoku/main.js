function validSudoku(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const cell = board[r][c];
            if (cell === '.') continue;
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (rows[r].has(cell) || cols[c].has(cell) || boxes[boxIndex].has(cell)) {
                return false;
            }
            rows[r].add(cell);
            cols[c].add(cell);
            boxes[boxIndex].add(cell);
        }
    }

    return true;
};