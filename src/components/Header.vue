<template>
  <div class="header">
    <div class="navigation">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-brand">
            <a href="#" class="navbar-item">
              Visitor Info
            </a>
            <a href="#" class="navbar-item">
              Events
            </a>
            <a href="#" class="navbar-item">
              Get Involved
            </a>
            <router-link to="/about" class="navbar-item">About</router-link>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div style="clear:both"></div>
    <div class="logowrap">
        <a href="/" title="Love Park"><img alt="Love Park logo" src="./../assets/images/love-park-logo.png" /></a>
        <span class="main-text">Spring into LOVE</span>
    </div>
    <div style="clear:both"></div>
  </div>
</template>


<script>
export default {
  name: 'Header'
}
</script>
