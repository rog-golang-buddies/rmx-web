<script lang="ts">
    import feather from 'feather-icons';

    export let name;

    $: icon = feather.icons[name];
</script>

{#if icon}
    <div>
        <svg {...icon.attrs}>
            <g>
                {@html icon.contents}
            </g>
        </svg>
    </div>
{/if}

<style lang="scss">
    svg {
        width: 1em;
        height: 1em;
        overflow: visible;
        transform-origin: 50% 50%;
        display: block;
        margin: auto;
    }
</style>
