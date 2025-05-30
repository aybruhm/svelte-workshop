<script>
  import { fade } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedback = [];
</script>

<main>
  <div class="feedback-list">
    {#each feedback as item (item.id)}
      <div transition:fade|local={{ duration: 300 }}>
        <FeedbackItem {item} on:delete-feedback />
      </div>
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
