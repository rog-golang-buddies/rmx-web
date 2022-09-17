<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import Nav from "./lib/Nav.svelte";
  import Home from "./pages/Home.svelte";
</script>

<main>
  <Router>
    <Nav />
    <Route path="/">
      <Home />
    </Route>
  </Router>
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
