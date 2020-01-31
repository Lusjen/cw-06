const name = prompt("Введіть ім'я", "");
const curr = prompt("Введіть назву валюти", "");
const logo = prompt("Введіть лого", "");
const cryptocoiler = {
    cryptocoilerUser: {
        name: "Vova",
        currency: {
            Bitcoin: {
                nameCurrency: "Bitcoin",
                logo: "<img src='https://image.freepik.com/free-vector/_23-2147783185.jpg'></img>",
                monet: 2,
                curse: 221726,
            },
            Ethereum: {
                nameCurrency: "Ethereum",
                logo: "<img src='https://img.pngio.com/here-is-a-png-file-i-designed-of-ethereum-for-fun-id-like-share-ether-png-658_1056.png'></img>",
                monet: 20,
                curse: 4220,
            },
            Stellar: {
                nameCurrency: "Stellar",
                logo: "<img src='https://cryptonet.biz/wp-content/uploads/2018/01/kriptovalyuta-stellar.jpg'>",
                monet: 10,
                curse: 1.47,
            }
        }
    },
    show: function (nameCoin) {
        document.write(`<div class="content"> <p class="title"> Добрый день,  ${this.cryptocoilerUser.name} !</p>  <p>"На вашем балансе"</p> <p> ${this.cryptocoilerUser.currency[nameCoin].logo}</p> <p class="subtitle"> ${this.cryptocoilerUser.currency[nameCoin].nameCurrency} </p> <p>осталось ${this.cryptocoilerUser.currency[nameCoin].monet} монет</p> <p> если вы сегодня продадите их то, получите ${this.cryptocoilerUser.currency[nameCoin].monet * this.cryptocoilerUser.currency[nameCoin].curse}грн</p></div>`);
        console.log(nameCoin);
    }
}
cryptocoiler.show(curr);
