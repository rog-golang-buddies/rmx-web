<script lang="ts">
    import { api } from '../api/api';
    import { onMount } from 'svelte';
    import Modal from '../lib/Modal.svelte';
    import type { Session } from '../models/session';

    export let closeFunc;

    let sessions: Session[] = [];

    function LoadSessions() {
        api.get('/jam').then(({ data }) => {
            console.log(data);
            sessions = data['sessions'];
        });
    }

    onMount(() => {
        LoadSessions();
    });
</script>

<Modal {closeFunc}>
    <div class="join-modal">
        <div class="search-bar">
            <input
                class="inpt"
                type="text"
                name="search"
                id="search"
                placeholder="Search" />
            <div>Sort by:</div>
        </div>
        <ul class="session-list">
            {#each sessions as session}
                <li class="session">
                    <div class="info">
                        <div class="name">
                            {session.name ? session.name : session.sessionId}
                        </div>
                        <div class="owner">not implemented</div>
                    </div>
                    <button class="btn">Join</button>
                </li>
            {/each}
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
            }
        }

        & > .session-list {
            width: 100%;
            height: 100%;
            padding: 2rem 0;
            list-style: none;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;

            & > .session {
                height: 10rem;
                padding: 0.5rem;
                box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.3);
                border-radius: 0.3rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;

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
