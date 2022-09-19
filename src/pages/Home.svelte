<script lang="ts">
    import Modal from '../lib/Modal.svelte';
    import Nav from '../lib/Nav.svelte';

    let newSessionModalOpen = false;
    let joinModalOpen = false;

    function toggleNewSessionModal() {
        newSessionModalOpen = !newSessionModalOpen;
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
                <button on:click={toggleNewSessionModal}
                    >Start a new session</button>
                <button on:click={toggleJoinModal}>Join</button>
            </div>
        </section>
        {#if newSessionModalOpen}
            <Modal closeFunc={toggleNewSessionModal}>
                <form class="new_session-form">
                    <h3>Start a new session</h3>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Session name (optional)" />
                    <button>Start</button>
                </form>
            </Modal>
        {/if}
        {#if joinModalOpen}
            <Modal closeFunc={toggleJoinModal} />
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
                        outline: none;
                        border: 1px solid #000;
                        background-color: #000;
                        color: #fff;
                        font-size: 1rem;
                        border-radius: 0.3rem;
                        padding: 0.5rem;
                        margin: 0.25rem;
                        transition: 0.3s ease;
                    }

                    & > button:hover {
                        background-color: #fff;
                        color: #000;
                    }
                }
            }

            .new_session-form {
                width: 25rem;
                padding: 1rem;
                display: flex;
                align-items: center;
                flex-direction: column;

                & > input {
                    width: 100%;
                    padding: 1rem;
                    margin: 1rem 0;
                    outline: none;
                    border: none;
                    background-color: #dadada;
                    border-top-left-radius: 0.3rem;
                    border-top-right-radius: 0.3rem;
                    border-bottom: 3px solid #808080;
                }

                & > input:focus {
                    background-color: #cfcfcf;
                    border-bottom: 3px solid #000;
                }

                & > button {
                    border: 1px solid #000;
                    outline: none;
                    background-color: #000;
                    padding: 1rem;
                    color: #fff;
                    width: 100%;
                    font-size: 1rem;
                    border-radius: 0.3rem;
                    transition: 0.3s ease;
                }

                & > button:hover {
                    background-color: #fff;
                    color: #000;
                }
            }
        }
    }
</style>
