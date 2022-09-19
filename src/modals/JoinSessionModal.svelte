<script lang="ts">
    import Modal from '../lib/Modal.svelte';

    export let closeFunc;
</script>

<Modal {closeFunc}>
    <div class="join-modal">
        <div class="search-bar">
            <input type="text" name="search" id="search" placeholder="Search" />
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

<style lang="scss">
    .join-modal {
        width: 80vw;
        height: 80vh;
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
</style>
