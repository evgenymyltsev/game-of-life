import Game from './game.js';
import View from './view.js';
import GridView from './grid-view.js';
import Controller from './controller.js'

const GRID_WIDTH = 1280;
const GRID_HEIGHT = 720;
const GRID_ROW = 36;
const GRID_COLS = 64;

const root = document.getElementById('root');

const game = new Game(GRID_ROW, GRID_COLS);
const gridView = new GridView(GRID_WIDTH, GRID_HEIGHT, GRID_ROW, GRID_COLS);
const view = new View(gridView, root);
const controller = new Controller(game, view);

