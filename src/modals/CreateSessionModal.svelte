<script lang="ts">
    import { api } from '../api/api';
    import Modal from '../lib/Modal.svelte';

    export let closeFunc;

    let name: string = "";
    let bpm: number;
    function CreateSession() {
        api.post('/jam')
            .then((res) => {
                alert('session created. redirecting...');
            })
            .finally(() => {
                closeFunc();
            });
    }
</script>

<Modal {closeFunc}>
    <form class="new_session-form" on:submit|preventDefault={CreateSession}>
        <h3>Start a new session</h3>
        <input
            bind:value={name}
            class="inpt"
            type="text"
            name="name"
            id="name"
            placeholder="Session name (optional)" />
        <input
            bind:value={bpm}
            class="inpt"
            type="number"
            name="bpm"
            id="bpm"
            placeholder="BPM (will default to 120)" />
        <button class="btn" type="submit">Start</button>
    </form>
</Modal>

<style lang="scss">
    .new_session-form {
        width: 25rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        & > input {
            width: 100%;
            margin: 1rem 0;
        }

        & > button {
            padding: 1rem;
            width: 100%;
        }
    }
</style>
