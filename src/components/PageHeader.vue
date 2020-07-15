<template>
  <header>
    <div class="header-wrapper">
      <div class="header-logo-container">
        <a href="/">
          <img class="header-logo-img" src="../assets/logo.png" />
        </a>
      </div>
      <div class="header-nav-container">
        <nav class="header-nav-list">
          <div class="header-nav-item">
            <router-link to="/">Home</router-link>
          </div>
          <div class="header-nav-item">
            <router-link to="/tags">Tags</router-link>
          </div>
          <div class="header-nav-item">
            <router-link to="/about">About</router-link>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style scoped>
.header-wrapper {
  position: relative;
  width: 100%;
  padding-top: 2.8vw;
  padding-bottom: 2.8vw;
  padding-left: 6vw;
  padding-right: 6vw;
  pointer-events: auto;
}

.header-logo-container {
  width: auto;
}

.header-logo-img {
  height: 60px;
}

.header-nav-container {
  width: 33%;
}

.header-nav-list {
    display: inline-flex;
    flex-wrap: wrap;
}

.header-nav-item {
    margin-left: .75vw;
    margin-right: .75vw;
}
</style>
