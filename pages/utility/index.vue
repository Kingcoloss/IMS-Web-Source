<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center mb-2"><h2> Utility Menu </h2></div>
            <div class="col-12 col-md-12">
                <div class="row">
                    <div class="col-6">
                        <b-card class="text-center utlity-card-menu">
                            <h5>Salary Calculator</h5>
                        </b-card>
                    </div>
                    <div class="col-6">
                        <b-card class="text-center utlity-card-menu">
                            <h5>BMI</h5>
                        </b-card>
                    </div>
                    <div class="col-6">
                        <b-card class="text-center utlity-card-menu">
                            <h5>TDEE & MBR</h5>
                        </b-card>
                    </div>
                    <div class="col-6">
                        <b-card @click="onClickCardMenu('timer')" class="text-center utlity-card-menu">
                            <h5>Timer</h5>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                utilityUri:'/utility'
            }
        },
        methods:{
            onClickCardMenu(type){
                switch(type){
                    case 'timer':
                        this.$router.push(this.utilityUri+'/timer')
                }
            }
        }
    }
</script>