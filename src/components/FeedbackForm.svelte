<script>
  import { v4 as uuidv4 } from "uuid";

  import Button from "../ui/Button.svelte";
  import { FeedbackStore } from "../stores";
  import RatingSelect from "../ui/RatingSelect.svelte";

  let message;
  let text = "";
  let rating = 5;
  let disabled = true;
  let minRatingFeedback = 10;

  const handleInput = () => {
    if (text.length < minRatingFeedback) {
      message = `Feedback must be at least ${minRatingFeedback} characters long.`;
      disabled = true;
    } else {
      message = "";
      disabled = false;
    }
  };

  const handleSelectedRating = (event) => {
    rating = event.detail;
  };

  const handleSubmit = () => {
    if (text.length < minRatingFeedback) {
      message = `Feedback must be at least ${minRatingFeedback} characters long.`;
      return;
    }

    const newFeedback = {
      id: uuidv4(),
      rating: +rating,
      text: text,
      createdAt: new Date().toISOString(),
    };
    FeedbackStore.update((feedback) => [...feedback, newFeedback]);

    text = "";
  };

  $: disabled = text.length < minRatingFeedback;
</script>

<main>
  <div class="feedback-form">
    <h2>Submit Feedback</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <RatingSelect on:rating-selected={handleSelectedRating} />

      <label for="text">Feedback:</label>
      <textarea
        id="text"
        on:input={handleInput}
        bind:value={text}
        rows="4"
        required
      ></textarea>

      {#if message}
        <p class="error">{message}</p>
      {/if}

      <Button {disabled} type="submit">Submit</Button>
    </form>
  </div>
</main>

<style>
  .feedback-form {
    background-color: rgba(1, 39, 7, 0.894);
    border-radius: 15px;
    padding: 20px;
    color: white;
    max-width: 400px;
    margin: auto;
  }

  .feedback-form h2 {
    margin-bottom: 20px;
  }

  .feedback-form label {
    display: block;
    margin-bottom: 10px;
  }

  .feedback-form textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    border: none;
    background-color: #f4f4f4;
    color: #333;
    font-size: 1rem;
    resize: vertical;
  }
  .feedback-form textarea:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }

  .error {
    color: red;
    font-size: 0.9rem;
    margin-top: -10px;
    margin-bottom: 10px;
  }
</style>
