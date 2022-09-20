<script lang="ts">
    import { Link } from 'svelte-navigator';
    import Icon from './Icon.svelte';
</script>

<nav>
    <div class="logo-con">
        <div class="logo">
            <Link to="/">RMX</Link>
        </div>
    </div>
    <div class="nav-items">
        <Link to="/"
            ><Icon name="home" />
            <p>Home</p></Link>
        <Link to="/learn">
            <Icon name="book-open" />
            <p>Learn</p></Link>

        <a
            href="https://github.com/rog-golang-buddies/rapidmidiex"
            target="_blank"
            rel="noopener noreferrer">
            <Icon name="github" />
            <p>GitHub</p></a>
    </div>
    <div class="nav-options" />
    <!-- <div class="nav-account">
        <Link to="/account" />
    </div> -->
</nav>

<style lang="scss">
    nav {
        width: 5rem;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.3); // needs theming

        & > div {
            width: 100%;
        }

        & > .logo-con {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 5rem;
            padding: 0.5rem;

            & > .logo {
                width: 100%;
                height: 100%;

                & > :global(a) {
                    widows: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #000000; // needs theming
                    color: #fff; // needs theming
                    border-radius: 0.3rem;
                    text-decoration: none;
                    transition: 0.3s ease;
                }

                & > :global(a:hover) {
                    transform: scale(0.9);
                }
            }
        }

        & > .nav-items {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 0.25rem 0;

            & > :global(a) {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                flex-direction: column;
                text-decoration: none;
                color: #000000; // needs theming
                width: 4rem;
                height: 4rem;
                margin: 0.25rem 0.5rem;
                border-radius: 0.3rem; // needs theming
                transition: 0.3s ease; // needs theming
            }

            & > :global(a:hover) {
                background-color: #000000; // needs theming
                color: #fff; // needs theming
            }
        }
    }
</style>
