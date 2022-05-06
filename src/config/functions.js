import { firebase, auth } from '../service/Firebase';
import axios from 'axios';

const Logout = ({setUsuario}) => {
    firebase.auth().signOut();
    setUsuario()
}

const Login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider)
}

const loadAxios = ({quantity, setGames, url}) => {
    var i;
    var newgames = []
    
    axios.get(url).then(response => {
            response.data.length = quantity;
            
            for (i in response.data) {
                if (response.data[i].newprice === "") {
                    newgames = [...newgames, {
                        game: response.data[i].game,
                        newprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                        oldprice: " ",
                        img: response.data[i].img,
                        franquia: response.data[i].franquia
                    }]
                } else {
                    newgames = [...newgames, {
                        game: response.data[i].game,
                        newprice: "R$" + response.data[i].newprice.toFixed(2).toString().replace(".", ","),
                        oldprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                        img: response.data[i].img,
                        franquia: response.data[i].franquia
                    }]
                }
            }
            setGames(newgames)
        }
    )
}

const expandGames = ({quantity, setGames, url, setQuantity}) => {
    var quantityupdated = quantity + 8;
    var i;
        var newgames = []
    
    axios.get(url).then(response => {
        response.data.length = quantityupdated;

        for (i in response.data) {
            if (response.data[i].newprice === "") {
                newgames = [...newgames, {
                    game: response.data[i].game,
                    newprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                    oldprice: " ",
                    img: response.data[i].img,
                    franquia: response.data[i].franquia
                }]
            } else {
                newgames = [...newgames, {
                    game: response.data[i].game,
                    newprice: "R$" + response.data[i].newprice.toFixed(2).toString().replace(".", ","),
                    oldprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                    img: response.data[i].img,
                    franquia: response.data[i].franquia
                }]
            }
        }
        setGames(newgames);
        setQuantity(quantityupdated);
    })
}

const retractGames = ({setQuantity, setGames, games}) => {
    var gamesupdated = [];
    gamesupdated = games;
    gamesupdated.length = 8;
    setGames(gamesupdated);
    setQuantity(8);
}

export { Login, Logout, loadAxios, expandGames, retractGames };