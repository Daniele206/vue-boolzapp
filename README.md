vue-boolzap
===
**Consegna:**

**Milestone 1**

- **Replica della grafica** con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
- **Visualizzazione dinamica della lista contatti:** tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

**Milestone 2**

- **Visualizzazione dinamica dei messaggi:** tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
- **Click sul contatto** mostra la conversazione del contatto cliccato

**Milestone 3**

- **Aggiunta di un messaggio:** l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
- **Risposta dall’interlocutore:** ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

**Milestone 4**

- **Ricerca utenti:** scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

**Milestone 5 - opzionale**

- **Cancella messaggio:** cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
- **Visualizzazione ora e ultimo messaggio inviato/ricevuto** nella lista dei contatti 

**Consigli utili:**

- Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
- I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
- Per gestire le date, può essere utile la libreria **Luxon**

## Svolgimento

1. Importare il progetto HTML e CSS di boolzap.
2. Adattarlo inserendo JS e la struttura per VUE.
3. Inserire dinamicamente i contatti con un ciclo (v-for).
4. Inserie dinamicamente anche le schermate delle chat con un ciclo (v-for).
5. Grazie ad un contatore far si che al clic dell'utente appaia solo la sua chat.
6. Rendere funzionante l'input del messaggio tramite la barra sotto la chat, ovvero far si che venga inviato un messaggio al click dell'tasto ENTER e che questo appaia a schermo, utilizzando un (v-model).
7. Creare un BOT che risponda automaticamente ai messaggi che inviamo, con un ritardo di 1 seconso, usiamo una funzione in un methods e un timignFunction (setTimeout).
8. Facciamo si che funzioni anche la ricerca dei vari utenti, creiamo una function che filtri l'array delle chat, in base all'imput, la inseriamo in computed per far si che questa funzione si aggiorni ad ogni cambiamento dell'input in modo da mostrarci solo gli utenti che contengono all'interno del loro nome la stringa nell'imput.
9. Rimuoviamo l'hover dalla freccietta che faceva apparire la tenina.
10. Impostiamo l'apparizione della singola tendina grazie al click della freccietta (abbassiamo solo la tendina relativa al messaggio grazie ad un contatore che si modifica al click, e ad una funzione che controlla se il contatore é uguale all'indice del messaggio), impostiamo la scomparsa della tendina in tre situazioni, ad un secondo click sulla freccetta, al click su qualsiasi parte del main(che non sia la tendina), all'eliminazione del messaggio.
11. Andiamo a far si che al click di Elimina messaggio si cancelli solo quel messaggio, grazie ad una fonzione che usa l'indice del messaggio per eliminare solo quello, all'eliminazione di tutti i messaggi appare un flag che ci avvisa che la chat é vuota.
12. Utilizzia le caratteristiche dell'array dei messaggi per inserie dinamicamente nella barra dell'utente la data e il contenuto dell'ultimo messaggio.
13. Rendere funzionate il tasto darkMode (la sfera mezza piena e mezza vuota).


