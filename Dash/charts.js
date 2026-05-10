const tagsCtx=document
    .getElementById('tagsChart');
new Chart(tagsCtx,{
    type: 'doughnut',
    data: {
        labels: [
            'Implementation',
            'Math',
            'Strings',
            'Greedy',
            'Brute Force',
            'Sortings',
            'Constructive Algorithms',
            'Binary Search',
            'DP',
            'Data Structures',
            'Geometry',
            'Bitmasks',
            'Combinatorics',
            'Number Theory',
            'Graph Matchings',
            'Shortest Paths',
            'Expression Parsing',
            'DFS and Similar',
            'Graphs',
            '*Special',
            'Ternary Search',
            'Hashing'
        ],
        datasets: [{
            label: 'Solved',
            data: [83, 40, 28, 26, 25, 12, 10, 6, 5, 4, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
            borderWidth: 1
        }]
    },
    options:{
        responsive: true,
        plugins:{
            legend: {
                labels:{
                    color: '#cbd5e1'
                }
            }
        }
    }
});
/*Rating Chart*/
const ratingCtx = document
    .getElementById('ratingChart');

new Chart(ratingCtx, {

    type: 'line',

    data: {

        labels: [
            'Contest 1',
            'Contest 2',
            'Contest 3',
            'Contest 4',
            'Contest 5'
        ],

        datasets: [{

            label: 'Rating',

            data: [800, 900, 980, 1100, 1190],

            tension: 0.4,

            fill: true
        }]
    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                labels: {
                    color: '#e2e8f0'
                }
            }
        },

        scales: {

            y: {

                ticks: {
                    color: '#94a3b8'
                },

                grid: {
                    color: 'rgba(255,255,255,0.05)'
                }
            },

            x: {

                ticks: {
                    color: '#94a3b8'
                },

                grid: {
                    color: 'rgba(255,255,255,0.05)'
                }
            }
        }
    }
});