<template>
    <div class="nav-list">
        <nav>
            <router-link class="nav-link" to="/">Домашняя страница</router-link>
            <router-link class="nav-link" to="/chat">Чат</router-link>
            <router-link class="nav-link" to="/vb">Команды NBA</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavComp'
}
</script>

<style>
    .nav-list {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    nav {
        width: 500px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
    }

    .nav-link {
        color: white;
        text-decoration: none;
    }
</style>