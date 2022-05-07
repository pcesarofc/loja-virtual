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

const addToCart = ({games}) => {
    const user = firebase.auth().currentUser;

        if (user) {
            axios.post('https://loja-virtualpc-default-rtdb.firebaseio.com/clientes/' + user.uid + "/chart.json",
                {
                    "game": games.game,
                    "price": parseFloat(games.newprice.replace(",", ".").replace("R$", "")),
                    "img": games.img
                }
            )
        } else {
            window.alert('Você precisa estar logado!')
        }
}

const filterGames = ({setGames, filtro, url}) => {
    axios.get(url + '?orderBy="franquia"&equalTo="' + filtro + '"').then(response => {
        var i;
        var newgames = []

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
    })
}

function marioFilter({setFiltro, mario, zelda, pokemon, monsterhunter}) {
    if (mario[0].checked) {
        zelda[0].checked = false;
        pokemon[0].checked = false;
        monsterhunter[0].checked = false;
        setFiltro('Mario')
    } else setFiltro('')
}

function pokemonFilter({setFiltro, mario, zelda, pokemon, monsterhunter}) {

    if (pokemon[0].checked) {
        mario[0].checked = false;
        zelda[0].checked = false;
        monsterhunter[0].checked = false;
        setFiltro('Pokémon')
    } else setFiltro('')
}

function zeldaFilter({setFiltro, mario, zelda, pokemon, monsterhunter}) {

    if (zelda[0].checked) {
        pokemon[0].checked = false;
        mario[0].checked = false;
        monsterhunter[0].checked = false;
        setFiltro('Zelda')
    } else setFiltro('')
}

function monsterHunterFilter({setFiltro, mario, zelda, pokemon, monsterhunter}) {

    if (monsterhunter[0].checked) {
        zelda[0].checked = false;
        pokemon[0].checked = false;
        mario[0].checked = false;
        setFiltro('Monster Hunter')
    } else setFiltro('')
}

export {
    Login,
    Logout,
    loadAxios,
    expandGames,
    retractGames,
    addToCart,
    filterGames,
    marioFilter,
    pokemonFilter,
    zeldaFilter,
    monsterHunterFilter
};