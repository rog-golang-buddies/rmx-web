<script lang="ts">
    import JoinSessionModal from '../modals/JoinSessionModal.svelte';
    import Nav from '../lib/Nav.svelte';
    import CreateSessionModal from '../modals/CreateSessionModal.svelte';

    let createSessionModalOpen = false;
    let joinModalOpen = false;

    function toggleCreateSessionModal() {
        createSessionModalOpen = !createSessionModalOpen;
    }

    function toggleJoinModal() {
        joinModalOpen = !joinModalOpen;
    }
</script>

<div class="page home">
    <Nav />
    <div class="content">
        <section class="welcome">
            <h2>Welcome to Rapidmidiex!</h2>
            <br />
            <p>A new way for musicians to perform</p>
            <br />
            <div class="session-con">
                <button class="btn" on:click={toggleCreateSessionModal}
                    >Start a new session</button>
                <button class="btn" on:click={toggleJoinModal}>Join</button>
            </div>
        </section>
        {#if createSessionModalOpen}
            <CreateSessionModal closeFunc={toggleCreateSessionModal} />
        {/if}
        {#if joinModalOpen}
            <JoinSessionModal closeFunc={toggleJoinModal} />
        {/if}
    </div>
</div>

<style lang="scss">
    .home {
        display: flex;

        & > .content {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            width: 100%;
            height: 100%;

            & > .welcome {
                padding: 3rem;
                width: 100%;

                & > h2 {
                    font-size: 3rem;
                    font-weight: bold;
                }

                & > p {
                    font-size: 1.5rem;
                }

                & > .session-con {
                    display: flex;
                    flex-wrap: wrap;

                    & > button {
                        padding: 1rem;
                        margin: 0.25rem;
                    }
                }
            }
        }
    }
</style>
