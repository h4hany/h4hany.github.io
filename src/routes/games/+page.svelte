<script lang="ts">
    // import Card from '../Card/Card.svelte';
    // import CardTitle from '../Card/CardTitle.svelte';
    // import CardDivider from '../Card/CardDivider.svelte';
    // import CardLogo from '../Card/CardLogo.svelte';
    import Assets, {getAssetURL} from '$lib/data/assets';
    import Card from "@components/Card/Card.svelte";
    import CardLogo from "@components/Card/CardLogo.svelte";
    import CardTitle from "@components/Card/CardTitle.svelte";
    import CardDivider from "@components/Card/CardDivider.svelte";

    let games = [
        {
            name: 'Duck Invaders',
            link: 'https://h4hany.github.io/DuckInvedars/game.html',
            shortDescription: 'Same as chicken invaders in 90s',
            color:'yellow',
            logo:Assets.Unknown
        },
        {
            name: 'Monster ',
            link: 'https://h4hany.github.io/play-js-monster/',
            shortDescription: 'monster follow ur cursor ',
            color:'gray',
            logo:Assets.Unknown
        },
        {
            name: 'Dragon',
            link: 'https://h4hany.github.io/play-js-dragon',
            shortDescription: 'Are you fan of Game of throne? ',
            color:'darkblue',
            logo:Assets.Unknown
        },
    ];
</script>
<div class="projects-list mt-5">
    {#each games as project}

        <Card color={project.color} href={project.link} target="_blank">
            <CardLogo alt={project.name} src={getAssetURL(project.logo)} size={40} radius={'0'}/>
            <div class="m-t-20px row justify-between items-center">
                <CardTitle title={project.name}/>
            </div>
            <CardDivider/>
            <div class="col sm:h-100px md:h-160px">
                <p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
                    {project.shortDescription}
                </p>
            </div>
            <CardDivider/>
        </Card>
    {/each}
</div>
<style lang="scss">
  .projects-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1350px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 850px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
