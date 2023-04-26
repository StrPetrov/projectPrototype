<template>
    <div>
        <select name="sort" id="sort" v-model="selectedSortCriteria">
            <option value="" disabled selected>Sort by:</option>
            <option value="Ins-A-Z">A-Z (Instructor)</option>
            <option value="Ins-Z-A">Z-A (Instructor)</option>
            <option value="Crs-A-Z">A-Z (Course)</option>
            <option value="Crs-Z-A">Z-A (Course)</option>
            <option value="PriceASC">Price Ascending</option>
            <option value="PriceDESC">Price Descending</option>
        </select>
        <div class="table_cont">
            <table>
                <tr>
                    <th>Instructor</th>
                    <th>Course</th>
                    <th>Price</th>
                </tr>
                <tr v-for="inf in tableData" :key="inf.name">
                    <td>{{ inf.name }}</td>
                    <td>{{ inf. course}}</td>
                    <td>{{ inf.price + '$' }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppTable',
        data() {
            return {
                selectedSortCriteria: '',
                tableData: [
                    {
                        name: 'Alexis Obrien',
                        course: 'Cypress Advanced Course',
                        price: 29.99
                    },
                    {
                        name: 'Josef Winter',
                        course: 'Playwright Advanced Course',
                        price: 19.99
                    },
                    {
                        name: 'Michael Barker',
                        course: 'Manual Testing Course',
                        price: 24.99
                    },
                    {
                        name: 'Zachary Garcia',
                        course: 'Advanced PactumJS Course',
                        price: 14.99
                    },
                    {
                        name: 'Lennon Gibson',
                        course: 'Agile Methodologies Course',
                        price: 13.99
                    },
                    {
                        name: 'Fredrich Rich',
                        course: 'Jmeter Advanced Course',
                        price: 9.99
                    },
                    {
                        name: 'Lawson Wells',
                        course: 'Selenium Java Advanced Course',
                        price: 18.99
                    },
                    {
                        name: 'Wictor Welch',
                        course: 'Appium Mobile Testing Course',
                        price: 15.99
                    }
                ]
            }
        },
        watch: {
            selectedSortCriteria(newValue) {
                switch(newValue) {
                    case 'Ins-A-Z': {
                        this.tableData.sort((a, b) => {
                            let x = a.name.toLowerCase()
                            let y = b.name.toLowerCase()
                            if (x < y) { return -1 }
                            if (x > y) { return 1 }
                            return 0
                        })
                        break
                    }
                    case 'Ins-Z-A': {
                        this.tableData.sort((a, b) => {
                            let x = a.name.toLowerCase()
                            let y = b.name.toLowerCase()
                            if (x < y) { return 1 }
                            if (x > y) { return -1 }
                            return 0
                        })
                        break
                    }
                    case 'Crs-A-Z': {
                        this.tableData.sort((a, b) => {
                            let x = a.course.toLowerCase()
                            let y = b.course.toLowerCase()
                            if (x < y) { return -1 }
                            if (x > y) { return 1 }
                            return 0
                        })
                        break
                    }
                    case 'Crs-Z-A': {
                        this.tableData.sort((a, b) => {
                            let x = a.course.toLowerCase()
                            let y = b.course.toLowerCase()
                            if (x < y) { return 1 }
                            if (x > y) { return -1 }
                            return 0
                        })
                        break
                    }
                    case 'PriceASC': {
                        this.tableData.sort((a, b) => a.price - b.price)
                        break
                    }
                    case'PriceDESC': {
                        this.tableData.sort((a, b) => b.price - a.price)
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        width: 80%;
        height: auto;
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: rgb(226, 222, 222);
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;

        select {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 180px;
            height: 40px;
            font-size: 18px;
            cursor: pointer;
        }

        .table_cont {

            display: flex;
            justify-content: center;
            align-items: center;

            table {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 50px;
            width: auto;
            border-collapse: collapse;
            cursor: pointer;

            td, th {
                border: 1px solid black;
                padding: 20px;
                font-size: 20px;
                color: white;
            }

            td {
                color: green;
                font-weight: 900;
            }

            tr {
                &:nth-child(even) {
                    background-color: rgb(220, 216, 216)
                }

                &:nth-child(odd) {
                    background-color: rgb(241, 247, 241);
                }

                &:first-child {
                    background-color: green;
                }

                &:hover {
                    background-color: green;
                    
                    td {
                        color: white;
                    }
                }
            }
        }
    }    
}
</style>