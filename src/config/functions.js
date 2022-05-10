import { firebase, auth } from '../service/Firebase';
import axios from 'axios';

const uri = 'https://loja-virtualpc-default-rtdb.firebaseio.com/'

const Logout = ({setUsuario}) => {
    
    firebase.auth().signOut()
    setUsuario()
}

const Login = async () => {
    
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
}

const loadAxios = ({quantity, setGames}) => {
    
    axios.get(uri + 'jogos.json').then(response => {
        
        var i
        var newgames = []
        response.data.length = quantity
            
            for (i in response.data) {
                if (response.data[i].newprice === "") {
                    newgames = [...newgames, {
                        game: response.data[i].game,
                        newprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                        oldprice: " ",
                        img: response.data[i].img,
                        franquia: response.data[i].franquia,
                        description: response.data[i].description
                    }]
                } else {
                    newgames = [...newgames, {
                        game: response.data[i].game,
                        newprice: "R$" + response.data[i].newprice.toFixed(2).toString().replace(".", ","),
                        oldprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                        img: response.data[i].img,
                        franquia: response.data[i].franquia,
                        description: response.data[i].description
                    }]
                }
            }
            setGames(newgames)
        }
    )
}

const expandGames = ({quantity, setGames, setQuantity}) => {
    
    axios.get(uri + 'jogos.json').then(response => {
        
        var quantityupdated = quantity + 8
        var i
        var newgames = []
        
        response.data.length = quantityupdated

        for (i in response.data) {
            if (response.data[i].newprice === "") {
                newgames = [...newgames, {
                    game: response.data[i].game,
                    newprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                    oldprice: " ",
                    img: response.data[i].img,
                    franquia: response.data[i].franquia,
                    description: response.data[i].description
                }]
            } else {
                newgames = [...newgames, {
                    game: response.data[i].game,
                    newprice: "R$" + response.data[i].newprice.toFixed(2).toString().replace(".", ","),
                    oldprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                    img: response.data[i].img,
                    franquia: response.data[i].franquia,
                    description: response.data[i].description
                }]
            }
        }
        setGames(newgames)
        setQuantity(quantityupdated)
    })
}

const retractGames = ({setQuantity, setGames, games}) => {
    
    var gamesupdated = []
    
    gamesupdated = games
    gamesupdated.length = 8
    
    setGames(gamesupdated)
    setQuantity(8)
}

const addToCart = ({games}) => {

    const user = firebase.auth().currentUser

    if (user) {
        axios.post(uri + 'clientes/' + user.uid + "/chart.json",
            {
                "game": games.game,
                "img": games.img,
                "price": parseFloat(games.newprice.replace(",", ".").replace("R$", ""))
            })
    } else window.alert('Você precisa estar logado!')
}

const filterGames = ({setGames, filtro}) => {
    
    axios.get(uri + 'jogos.json?orderBy="franquia"&equalTo="' + filtro + '"').then(response => {
        
        var i
        var newgames = []

        for (i in response.data) {
            if (response.data[i].newprice === "") {
                newgames = [...newgames, {
                    game: response.data[i].game,
                    newprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                    oldprice: " ",
                    img: response.data[i].img,
                    franquia: response.data[i].franquia,
                    description: response.data[i].description
                }]
            } else {
                newgames = [...newgames, {
                    game: response.data[i].game,
                    newprice: "R$" + response.data[i].newprice.toFixed(2).toString().replace(".", ","),
                    oldprice: "R$" + response.data[i].oldprice.toFixed(2).toString().replace(".", ","),
                    img: response.data[i].img,
                    franquia: response.data[i].franquia,
                    description: response.data[i].description
                }]
            }
        }
        setGames(newgames)
    })
}

const marioFilter = ({setFiltro, mario, zelda, pokemon, monsterhunter}) => {
    
    if (mario[0].checked) {
        zelda[0].checked = false
        pokemon[0].checked = false
        monsterhunter[0].checked = false
        setFiltro('Mario')
    } else setFiltro('')
}

const pokemonFilter = ({setFiltro, mario, zelda, pokemon, monsterhunter}) => {

    if (pokemon[0].checked) {
        mario[0].checked = false
        zelda[0].checked = false
        monsterhunter[0].checked = false
        setFiltro('Pokémon')
    } else setFiltro('')
}

const zeldaFilter = ({setFiltro, mario, zelda, pokemon, monsterhunter}) => {

    if (zelda[0].checked) {
        pokemon[0].checked = false
        mario[0].checked = false
        monsterhunter[0].checked = false
        setFiltro('Zelda')
    } else setFiltro('')
}

const monsterHunterFilter = ({setFiltro, mario, zelda, pokemon, monsterhunter}) => {

    if (monsterhunter[0].checked) {
        zelda[0].checked = false
        pokemon[0].checked = false
        mario[0].checked = false
        setFiltro('Monster Hunter')
    } else setFiltro('')
}

const LoadCartGames = ({setProductsCart, setValue}) => {
    
    const user = firebase.auth().currentUser

    if (user) {
        axios.get(uri + 'clientes/' + user.uid + '/chart.json').then(response => {
            
            var i
            var newgames = []
            var total = 0

            if(response.data){
                var obj = response.data
                var result = Object.keys(obj).map(function (key) { return obj[key];  })
    
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
            } else setValue('R$0,00')
        })
    } else setValue('R$0,00')
}

const DeleteGame = ({ productsCart, setValue, setProductsCart }) => {

    const user = firebase.auth().currentUser
    
    axios.get(uri + 'clientes/' + user.uid + '/chart.json').then(response => {
        
        var i
        var price = 0
        var array = []
        var newArray = []

        for (i in response.data) {
            if (response.data[i].game === productsCart.game) {
                axios.delete(uri + '/clientes/' + user.uid + '/chart/' + i + '.json')
            } else {}

            array = [...array, {
                game: response.data[i].game,
                img: response.data[i].img,
                price: 'R$' + response.data[i].price.toFixed(2).toString().replace('.', ',')
            }]
        }

        newArray = array.filter((item) => item.game !== productsCart.game)

        for (i in newArray) {
            price = price + parseFloat(newArray[i].price.replace('R$', ''))
        }

        setValue('R$' + price.toFixed(2).toString().replace('.', ','))
        setProductsCart(newArray)
    })
}

const createAccount = ({setUsuario}) => {
    var email = document.getElementsByClassName('email')[0].value
    var password = document.getElementsByClassName('password')[0].value

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            setUsuario(user);
        })
        .catch((error) => {
            if (error.code === 'auth/weak-password') {
                window.alert('A senha precisa ter pelo menos 6 dígitos');
            } else if (error.code === 'auth/invalid-email') window.alert('Email inválido')
        });
}

const signInEmail = ({setUsuario}) => {
    var email = document.getElementsByClassName('email-login')[0].value
    var password = document.getElementsByClassName('password-login')[0].value

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            setUsuario(user);
        })
        .catch((error) => {
            if (error.code === 'auth/user-not-found') {
                window.alert('Usuário não encontrado')
            } else if (error.code === 'auth/wrong-password') window.alert('Senha incorreta')
            else if(error.code === 'auth/invalid-email') window.alert('Email inválido')
        });
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
    DeleteGame,
    createAccount,
    signInEmail
};