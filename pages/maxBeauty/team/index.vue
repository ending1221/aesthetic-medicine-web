<template>
    <div class="page-container">
        <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }" >首頁</el-breadcrumb-item>
            <el-breadcrumb-item>關於美仕媞</el-breadcrumb-item>
            <el-breadcrumb-item>醫療團隊</el-breadcrumb-item>
        </el-breadcrumb>
        <Title title="醫療團隊" titleEn="MEDICAL TEAM" />
        <div class="team-items">
            <TeamItem 
                v-for="doctor in teamData" 
                :key="doctor.id" 
                :name="doctor.name" 
                :id="doctor.id" 
                :title="doctor.title" 
                :leftClickEvent="goToDoctorPage"
                :middleClickEvent="openNewTab"
            />
        </div>
    </div>
</template>

<script>
import Title from '~/components/Title.vue';
import TeamItem from '~/components/team/Team.vue';
export default {
    components: {
        Title,
        TeamItem
    },
    data() {
        return {
            images: [],
            teamData: []
        };
    },
    mounted() {
        this.getServiceData();
    },
    methods: {
        goToDoctorPage(id) {
            this.$router.push(`/maxBeauty/team/${id}`);
        },
        openNewTab(id) {
            const routerData = this.$router.resolve({path: `/maxBeauty/team/${id}`});
            window.open(routerData.href, '_blank');
        },
        importAll(r) {
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
        },
        getServiceData() {
            this.teamData = this.$store.getters['team/getTeamData'];
        }
    },
}
</script>

<style lang="scss">
    .team-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 5%;
    }
</style>
