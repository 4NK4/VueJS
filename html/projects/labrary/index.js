const vm = new Vue({
    el: "#app",
    data: {
        Books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 20.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {
        add(index) {
            this.Books[index].count++
        },
        sub(index) {
            this.Books[index].count--
        },
        removeHandle(index) {
            this.Books.splice(index, 1)
        }

    },
    computed: {
        PriceTotal: function () {
            let count = 0;
            /*不够简便的方式
            for (let index = 0; index < this.Books.length; index++) {
                const element = this.Books[index];
                count += element.price * element.count;
            }*/

            /*稍微简便的方式  ---取索引式
            for(let i in this.Books)
            {
                let book=this.Books[i]
                count += book.price * book.count;
            }
            */

            //这是最为简单的方式  ---直接取对象
            for(let book  of this.Books)
            {
                count += book.price * book.count;
            }

            return count;
        }
    },

    filters: {
        showPrice(price) {
            return "$" + price.toFixed(2)
        }
    }

})