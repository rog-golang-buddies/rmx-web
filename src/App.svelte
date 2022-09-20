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
        outline: none;
        font-family: Raleway;
    }

    :global(.page) {
        width: 100vw;
        height: 100vh;
    }

    :global(.inpt) {
        padding: 1rem;
        outline: none;
        border: none;
        background-color: #dadada;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        border-bottom: 3px solid #808080;
        transition: 0.3s ease;
    }

    :global(.inpt:focus) {
        background-color: #cfcfcf;
        border-bottom: 3px solid #000;
    }

    :global(.btn) {
        border: 1px solid #000;
        outline: none;
        background-color: #000;
        color: #fff;
        border-radius: 0.3rem;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s ease;
    }

    :global(.btn:hover) {
        background-color: #fff;
        color: #000;
    }
</style>
