<template>
    <div>
        <div style="margin-bottom: 10px; color:white;"><b>Команды NBA:</b></div>
        <div v-if="isLoad">Загрузка данных...</div>
        <div v-else>
            <div v-for="(el) in teamData" :key="el.id">
                <div style="color: white;">{{ el.id }}. <b>Аббревиация:</b>{{ el.abbreviation }} <b style="margin-left: 20px; color: white;">Дивизия:</b>{{ el.division}}
                <img src="../assets/basket.png"
                style="width: 15px; height: 15px;" @click="removeTeam(el.id)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestApi',
    data(){
        return {
            teamData: [],
            isLoad: true
        }
    },
    mounted(){
        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5b9217c386mshb6c4877786f1d46p1772c4jsn96aedfcf4300',
	'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            this.teamData = res.data
            this.isLoad = false
        })
    },
    methods: {
        removeTeam(id){
            this.teamData = this.teamData.filter((el) => el.id !== id)
        }
    }
}
</script>