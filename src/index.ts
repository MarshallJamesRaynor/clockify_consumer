import axios from "axios"

let username = 'MarshallJamesRaynor';

axios.get('https://api.github.com/users/' + username);