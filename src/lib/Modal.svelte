<script lang="ts">
    import { scale } from 'svelte/transition';

    let className = '';
    export { className as class };
    export let closeFunc;
    export let width = 'auto';
    export let height = 'auto';
</script>

<div class="modal-con {className}" on:click|self={closeFunc}>
    <div
        transition:scale
        style="width: {width};height: {height};"
        class="modal">
        <slot />
    </div>
</div>

<style lang="scss">
    .modal-con {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.3);
        display: flex;
        align-items: center;
        justify-content: center;

        & > .modal {
            background-color: #fff;
            border-radius: 0.3rem;
            box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.3);
        }
    }
</style>
