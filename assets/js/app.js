const app = new Vue({
    el:"#app",

    data:{
        tasks:[
            {
                text: "pranzo",
                done: false
            },
            {
                text: "finire l'esercizio",
                done: false
            },
            {
                text: "fare il bonus",
                done: false
            },
            {
                text: "guardare video meme",
                done: true
            },
    
        ]
    },

    methods:{
        removeTask(indice){
            console.log("rimosso", indice)
            this.tasks.splice(indice, 1)
        }
    }
        
    
})


/* MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. 
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. */

/* MILESTONE 2
 Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
 il todo viene rimosso dalla lista. */
