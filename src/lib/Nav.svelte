<script lang="ts">
  import { Link } from "svelte-navigator";
</script>

<nav>
  <div class="logo">RMX</div>
  <div class="nav-items">
    <Link to="/">Home</Link>
    <Link to="/learn">Learn</Link>
  </div>
  <div class="nav-options" />
</nav>

<style lang="scss">
  nav {
    width: 5rem;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.3);

    & > div {
      width: 100%;
    }
  }
</style>
