import { createElement } from './lib/dom.js';

export default class GridView {
    constructor(width, height, rows, cols) {
        this.gridWidth = width;
        this.gridHeight = height;
        this.cellWidth = width / cols;
        this.cellHeight = height / rows;
        this.rows = rows;
        this.cols = cols;

        this._table = null;

        this.onClick = Function.prototype;

        this._init();
    }

    get element() {
        return this._table;
    }

    updateCell(cell) {
        const tableCell = this._table.rows[cell.row].cells[cell.col];
        tableCell.classList.toggle('alive', cell.isAlive);
    }

    update(grid) {
        this._forEachCell((tableCell, rowIndex, cellIndex) => {
            this._updateCell(tableCell, grid[rowIndex][cellIndex]);
        })
    }

    _init() {
        this._createTable();
        this._handleEvents();
    }

    _createTable() {
        const table = createElement('table', { className: 'grid' })
        
        for (let i = 0; i < this.rows; i++) {
            const row = createElement('tr', { className: 'row' });
            for (let j = 0; j < this.cols; j++) {
                const cell = createElement('td', {
                    className: 'cell',
                    width: this.cellWidth,
                    height: this.cellHeight
                });
                
                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        this._table = table; 
    }

    _handleEvents() {
        this._table.addEventListener('click', event => {
            if (!event.target.classList.contains('cell')) return;

            const rowIndex = event.target.parentNode.rowIndex;
            const cellIndex = event.target.cellIndex;

            this.onClick(rowIndex, cellIndex);
        })
    }

    _updateCell(tableCell, cell) {
        tableCell.classList.toggle('alive', cell.isAlive);
    }

    _forEachCell(fn) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                fn(this._table.rows[i].cells[j], i, j);
            }            
        }
    }
}