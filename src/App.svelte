<script lang="ts">
    import { Route, Router } from 'svelte-navigator';
    import Home from './pages/Home.svelte';
</script>

<main>
    <Router>
        <Route path="/">
            <Home />
        </Route>
    </Router>
</main>

<style>
    @font-face {
        font-family: Raleway;
        src: url(./assets/fonts/Raleway-Regular.ttf);
    }

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Raleway;
    }

    :global(button) {
        cursor: pointer;
    }

    :global(.page) {
        width: 100vw;
        height: 100vh;
    }
</style>
