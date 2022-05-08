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

const LoadCartGames = ({setProductsCart, setValue}) =>{
    
    const user = firebase.auth().currentUser;

    if (user) {
        var i
        var newgames = []
        var total = 0
        axios.get('https://loja-virtualpc-default-rtdb.firebaseio.com/clientes/' + user.uid + '/chart.json').then(response => {
            if(response.data){
                var obj = response.data
                var result = Object.keys(obj).map(function (key) { return obj[key];  });
    
                for (i in result) {
                    newgames = [...newgames, {
                        game: result[i].game,
                        img: result[i].img,
                        price: 'R$' + result[i].price.toFixed(2).toString().replace(".", ",")
                    }]
                    total = total + result[i].price;
                }
                setValue('R$' + total.toFixed(2).toString().replace('.', ','))
                setProductsCart(newgames)
            } else{
                setValue('R$0,00')
            }
            
        })
    }
}

const DeleteGame = ({ productsCart, setValue, setProductsCart }) => {
    const url = 'https://loja-virtualpc-default-rtdb.firebaseio.com/clientes/'
    const user = firebase.auth().currentUser;
    var i;
    var price = 0;
   
    axios.get(url + user.uid + '/chart.json').then(response => {

        for (i in response.data) {
            if (response.data[i].game == productsCart.game) {
                axios.delete(url + user.uid + '/chart/' + i + '.json')
            }
        }

        var array = []
        for (i in response.data) {
            array = [...array, {
                game: response.data[i].game,
                img: response.data[i].img,
                price: 'R$' + response.data[i].price.toFixed(2).toString().replace('.', ',')
            }]
        }

        var newArray = array.filter((item) => item.game !== productsCart.game);

        for (i in newArray) {
            price = price + parseFloat(newArray[i].price.replace('R$', ''))
        }

        setValue('R$' + price.toFixed(2).toString().replace('.', ','))
        setProductsCart(newArray);

    })
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
    monsterHunterFilter,
    LoadCartGames,
    DeleteGame
};