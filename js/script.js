/*
Esercizio di oggi: Vue Email List
nome repo: vue-email-list
Descrizione:
Attraverso l'apposita API di Boolean :
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            options:{
                params:{
                    min:0,
                    max:0,
                    items:0
                }
            },
            elencoMail:[]
        }
    },


    computed: {

    },

    methods: {
        callApi(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail', this.options).then((res) => {
                    console.log(res.data.response);
                    this.elencoMail.push(res.data.response);
                })
            }
        }

    },
    created(){
        this.callApi();
    }

});

app.mount('#app');