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
            
        
    }
        
    
})


/* MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. 
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. */

