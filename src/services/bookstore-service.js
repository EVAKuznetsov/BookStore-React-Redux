const books = [
    {
        id: 1, 
        title: "Гарри Поттер и философский камень",
        author: "Джоан Роулинг",
        price: 580,
        img:"https://img-gorod.ru/web/240/2405917/jpg/2405917_detail.jpg"
    },
    {
        id: 2, 
        title: "Гарри Поттер и  тайная комната",
        author: "Джоан Роулинг",
        price: 580,
        img:"https://img-gorod.ru/web/241/2415361/jpg/2415361_detail.jpg"
    },
    {
        id: 3, 
        title: "Гарри Поттер и узник азкабана",
        author: "Джоан Роулинг",
        price: 580,
        img:"https://img-gorod.ru/web/242/2425429/jpg/2425429_detail.jpg"
    },
    {
        id: 4, 
        title: "Гарри Поттер и кубок огня",
        author: "Джоан Роулинг",
        price: 580,
        img:"https://img-gorod.ru/web/244/2441276/jpg/2441276_detail.jpg"
    },
    {
        id: 5, 
        title: "Гарри Поттер и орден феникса",
        author: "Джоан Роулинг",
        price: 580,
        img:"https://img-gorod.ru/web/245/2451179/jpg/2451179_detail.jpg"
    },
    {
        id: 6, 
        title: "Гарри Поттер и принц полукровка",
        author: "Джоан Роулинг",
        price: 580,
        img:"https://img-gorod.ru/web/245/2459359/jpg/2459359_detail.jpg"
    },
    {
        id: 7, 
        title: "Гарри Поттер и дары смерти",
        author: "Джоан Роулинг",
        price: 580,
        img:"https://img-gorod.ru/web/246/2465085/jpg/2465085_detail.jpg"
    },


];

export default class BookstoreService{
    getBook(){        
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(Math.random()>0.8){
                    reject(new Error('Something bad happend'))
                }
                resolve(books)                 
            }, 1000);
        });
    };
};