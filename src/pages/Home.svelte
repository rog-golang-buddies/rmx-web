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
                <button class="btn" on:click={toggleNewSessionModal}
                    >Start a new session</button>
                <button class="btn" on:click={toggleJoinModal}>Join</button>
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
                    <button class="btn">Start</button>
                </form>
            </Modal>
        {/if}
        {#if joinModalOpen}
            <Modal closeFunc={toggleJoinModal}>
                <div class="join-modal">
                    <div class="search-bar">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search" />
                        <div>Sort by:</div>
                    </div>
                    <ul class="session-list">
                        <li class="session">
                            <div class="info">
                                <div class="name">Jam 1</div>
                                <div class="owner">Jane Doe</div>
                            </div>
                            <button class="btn">Join</button>
                        </li>
                        <li class="session">
                            <div class="info">
                                <div class="name">Jam 2</div>
                                <div class="owner">John Doe</div>
                            </div>
                            <button class="btn">Join</button>
                        </li>
                        <li class="session">
                            <div class="info">
                                <div class="name">Jam 3</div>
                                <div class="owner">Jack Doe</div>
                            </div>
                            <button class="btn">Join</button>
                        </li>
                        <li class="session">
                            <div class="info">
                                <div class="name">Jam 2</div>
                                <div class="owner">John Doe</div>
                            </div>
                            <button class="btn">Join</button>
                        </li>
                        <li class="session">
                            <div class="info">
                                <div class="name">Jam 2</div>
                                <div class="owner">John Doe</div>
                            </div>
                            <button class="btn">Join</button>
                        </li>
                        <li class="session">
                            <div class="info">
                                <div class="name">Jam 2</div>
                                <div class="owner">John Doe</div>
                            </div>
                            <button class="btn">Join</button>
                        </li>
                        <li class="session">
                            <div class="info">
                                <div class="name">Jam 2</div>
                                <div class="owner">John Doe</div>
                            </div>
                            <button class="btn">Join</button>
                        </li>
                    </ul>
                </div>
            </Modal>
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
                        padding: 0.5rem;
                        margin: 0.25rem;
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
                    padding: 1rem;
                    width: 100%;
                }
            }
        }

        .join-modal {
            width: 90vw;
            height: 90vh;
            background-color: #fff;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            padding: 1rem;

            & > .search-bar {
                width: 100%;

                & > input {
                    width: 100%;
                    padding: 1rem;
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
            }

            & > .session-list {
                width: 100%;
                height: 100%;
                padding: 2rem 0;
                list-style: none;
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-wrap: wrap;

                & > .session {
                    width: 20rem;
                    padding: 0.5rem;
                    box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.3);
                    border-radius: 0.3rem;
                    margin: 0.5rem;

                    & > .info {
                        width: 100%;
                    }

                    & > button {
                        width: 100%;
                        padding: 1rem;
                    }
                }
            }
        }
    }
</style>
