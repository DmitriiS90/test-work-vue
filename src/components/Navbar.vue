<template>
  <nav class="#263238 blue-grey darken-4">
    <div class="nav-wrapper">
      <ul class="left hide-on-med-and-down">

        <router-link
        tag="li"
        to="/"
        exact
        active-class='active'
        ><a href="#">Create profile</a></router-link>

        
        <router-link
        tag="li"
        to="/list"
        exact
        active-class='active'
        ><a href="#">Profiles</a></router-link>

      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
    padding: 0 4rem;
}
</style>