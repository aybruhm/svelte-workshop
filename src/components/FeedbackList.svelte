<script>
  import { FeedbackStore } from "../stores";
  import { fade } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
</script>

<main>
  <div class="feedback-list">
    {#each $FeedbackStore as item (item.id)}
      <div transition:fade|local={{ duration: 300 }}>
        <FeedbackItem {item} />
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
