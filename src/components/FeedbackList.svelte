<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedback = [];
</script>

<main>
  <div class="feedback-list">
    {#each feedback as item (item.id)}
      <FeedbackItem {item} on:delete-feedback />
    {/each}
  </div>
</main>

<style>
  .feedback-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
