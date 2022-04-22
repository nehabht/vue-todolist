const app = new Vue({
    el:"#app",

    data:{

        newTask: '',

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
            //con splice tolgo l'elemento dall'array
            this.tasks.splice(indice, 1)
        },

        addTask(){

            let newAdd = {
                text : this.newTask,
                done : false,
            }
            //con unshift immetto l'elemento nell'array
            this.tasks.unshift(newAdd)

            //svuoto il campo input
            this.newTask = '';


            
        }
    }
        
    
})


/* MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. 
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. */

/* MILESTONE 2
 Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
 il todo viene rimosso dalla lista. */


/*  MILESTONE 3
 Predisporre un campo di input testuale 
 e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto 
 e utilizzato per creare un nuovo todo, 
 che quindi viene aggiunto alla lista dei todo esistenti. */
