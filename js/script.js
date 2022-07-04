var app = new Vue (
    {
        el: '#root',
        data: {
            currentContact: 0,
            userInput: '',
            userFilter: '',
            currentMessage: false,
            isActive: false,
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
        },
        methods: {
            // funzione per mostrare il contatto attualmente selezionato 
            showCurrentContact(index) {
                this.currentContact = index;
                this.currentMessage = false;
            },

            // funzione per inviare messaggi 
            addMessage() {
                const userMessage = {
                    date: dayjs( ).format('DD/MM/YYYY HH:mm:ss'),
                    text: this.userInput,
                    status: 'sent'
                };

                // devo pushare l'oggetto messaggio dentro l'array di messaggi di un utente
                if (userMessage.text.length > 0) {
                    this.contacts[this.currentContact].messages.push(userMessage);
                    this.userInput = '';
                };

                setTimeout(() => {
                    const autoReply = {
                        date: dayjs( ).format('DD/MM/YYYY HH:mm:ss'),
                        text: 'Ok',
                        status: 'received'
                    };
                    this.contacts[this.currentContact].messages.push(autoReply);

                }, 1000);
                
            },

            // funzione per filtrare la ricerca 
            filter() {
                
                // eseguo un for each per controllare tutti i nomi dei contatti per poi confrontarli 
                this.contacts.forEach((element) => {
                    if(element.name.toLowerCase().includes(this.userFilter.toLowerCase() )) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    };
                });
            },

            // dropdown 
            showDropdown(index) {
                if(this.currentMessage === index) {
                    this.currentMessage = false;
                } else {
                    this.currentMessage = index;
                };
            },

            // menu dropdown (optional)
            menuDropdown() {
                if(this.isActive === false) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            },

            // funzione per eliminare messaggio
            deleteMessage (index) {
                this.contacts[this.currentContact].messages.splice(index, 1);
                this.currentMessage = false;
            }
        }
    }
)