import { DIFFERENCE, HEADINGS_STATS, NUMBER_OF_CARDS, NUMBER_OF_CATEGORIES } from '../helpers/constants';
import createElement from '../helpers/utils';
import data from '../data/cards';

class StatsPage {
    createSection() {
        const tableContainer = createElement('div', 'table_container');
        const tableStat = createElement('div', 'table-stat');
        const table = createElement('table', 'table');
        const tHead = createElement('thead', 't-head'); 
        const tBody = createElement('tbody', 't-body');
        const statsButton = createElement('div', 'stats-buttons');
        const repeatWord = createElement('div', 'buttons', 'Repeat difficult words');
            repeatWord.classList.add('repeat-word');
        const reset = createElement('div', 'buttons', 'Reset');
            reset.classList.add('reset');

        const arr = this.prepareData();

        for (let i = 0; i < HEADINGS_STATS.length; i += 1) {
            const th = document.createElement('th');
                th.textContent = HEADINGS_STATS[i];
            tHead.append(th);
        }

        for (let i=0; i<NUMBER_OF_CARDS*NUMBER_OF_CATEGORIES; i += 1) {
            const tr = document.createElement('tr');
                for (let j = 0; j < 7; j += 1) {
                    tr.innerHTML += `<td>${arr[i][j]}</td>`;
                }
            tBody.append(tr);
        }
      
        table.append(tHead);
        table.append(tBody);
        statsButton.append(repeatWord);
        statsButton.append(reset);
        tableStat.append(table);
        tableContainer.append(statsButton);
        tableContainer.append(tableStat);
        document.querySelector('main').append(tableContainer);

        document.querySelectorAll('th').forEach((category, index) => {
            category.addEventListener('click', () => {
                category.classList.toggle('chosen');
                this.sortDataUp(category, index);
            })
        })
    }

    prepareData() {
        const arrData = [];
        for (let j=0; j<NUMBER_OF_CARDS; j += 1) {
            for (let i=0; i<NUMBER_OF_CARDS;i += 1) {
                const arr = [];
                const obj = JSON.parse(localStorage.getItem(data[j + DIFFERENCE][i].word));
                let per = Math.trunc(obj.right * 100 / (obj.wrong + obj.right));
                if(Number.isNaN(per)) {
                    per = 0;
                }
            arr.push(data[0][j], data[j + DIFFERENCE][i].word, data[j + DIFFERENCE][i].translation, obj.watched, obj.right, obj.wrong, per);
            arrData.push(arr);
            }
        }
        this.funcName = 'prepareData';
        return arrData;
    }

    sortDataUp(category, index) {
        const table = document.querySelector('table');
        let sortedRows;
        if (Number.isNaN(+table.rows[0].cells[index].innerHTML)) {
            if (category.className === 'chosen') {
                sortedRows = Array.from(table.rows).sort((rowA, rowB) => rowA.cells[index].innerHTML > rowB.cells[index].innerHTML ? 1 : -1);
            } else {
                sortedRows = Array.from(table.rows).sort((rowA, rowB) => rowB.cells[index].innerHTML > rowA.cells[index].innerHTML ? 1 : -1);
            }
            
        } else if (category.className === 'chosen') {
                sortedRows = Array.from(table.rows).sort((rowA, rowB) => rowB.cells[index].innerHTML - rowA.cells[index].innerHTML);
        } else {
                sortedRows = Array.from(table.rows).sort((rowA, rowB) => rowA.cells[index].innerHTML - rowB.cells[index].innerHTML);  
        }
      
        table.tBodies[0].append(...sortedRows);
        this.funcName = 'sortData';
    }
}

export default StatsPage;