const GRID_WIDTH = 1280;
const GRID_HEIGHT = 720;
const GRID_ROW = 36;
const GRID_COLS = 64;

const root = document.getElementById('root');

const game = new Game(GRID_WIDTH, GRID_HEIGHT, GRID_ROW, GRID_COLS, root);

console.log(game)