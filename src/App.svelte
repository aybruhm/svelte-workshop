<script>
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";

  let feedback = [
    {
      id: 1,
      rating: 5,
      text: "This is a great product!",
      createdAt: "2023-10-01T12:00:00Z",
    },
    {
      id: 2,
      rating: 4,
      text: "I really like this, but it could be improved.",
      createdAt: "2023-10-02T14:30:00Z",
    },
    {
      id: 3,
      rating: 2,
      text: "Not what I expected, needs more features.",
      createdAt: "2023-10-03T09:15:00Z",
    },
    {
      id: 4,
      rating: 1,
      text: "Very disappointed with this product.",
      createdAt: "2023-10-04T16:45:00Z",
    },
    {
      id: 5,
      rating: 3,
      text: "It's okay, but I've seen better.",
      createdAt: "2023-10-05T11:20:00Z",
    },
  ];

  $: count = feedback.length;
  $: averageRating =
    feedback.reduce((acc, item) => acc + item.rating, 0) / count || 0;

  const handleFeedbackSubmitted = (event) => {
    const newFeedback = event.detail;
    feedback = [
      ...feedback,
      { ...newFeedback, id: Date.now(), createdAt: new Date().toISOString() },
    ];
  };

  const deleteFeedback = (event) => {
    const itemId = event.detail;
    feedback = feedback.filter((item) => item.id !== itemId);
  };
</script>

<main class="container">
  <h1>Feedback List</h1>
  <FeedbackStats {count} {averageRating} />
  <FeedbackForm on:feedback-submitted={handleFeedbackSubmitted} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
