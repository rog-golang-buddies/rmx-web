<script lang="ts">
    import Modal from '../lib/Modal.svelte';

    export let closeFunc;
</script>

<Modal {closeFunc}>
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

<style lang="scss">
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
</style>
