<script>
  import { FeedbackStore } from "../stores";

  $: count = $FeedbackStore.length;
  $: averageRating =
    $FeedbackStore.reduce((acc, item) => acc + item.rating, 0) / count || 0;
</script>

<main>
  <div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <p>Average Rating: {averageRating.toFixed(1)}</p>
  </div>
</main>

<style>
  .feedback-stats {
    background-color: rgba(1, 39, 7, 0.894);
    border-radius: 15px;
    padding: 20px;
    margin: 20px 0;
    color: white;
    text-align: center;
  }

  .feedback-stats h4 {
    margin: 0;
    font-size: 1.5rem;
  }
  .feedback-stats p {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    display: inline-block;
    margin: 0;
  }
  .feedback-stats p::before {
    content: "★ ";
    color: gold;
  }
  .feedback-stats p::after {
    content: " ★";
    color: gold;
  }
  .feedback-stats p::before,
  .feedback-stats p::after {
    font-size: 1.5rem;
  }
</style>
