<script>
    import { FeedbackStore } from "../stores";
    import Card from "../ui/Card.svelte";

    export let item;

    const handleDelete = (itemId) => {
        FeedbackStore.update((feedback) =>
            feedback.filter((item) => item.id !== itemId)
        );
    };
</script>

<Card>
    <div class="rating">Rating: {item.rating}</div>
    <button class="close" on:click={() => handleDelete(item.id)}>X</button>
    <div class="text">{item.text}</div>
    <hr>
    <div class="date">Submitted on: {new Date(item.createdAt).toLocaleDateString()}</div>
</Card>

<style>
    .rating {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        color: red;
        background: none;
        border: none;
    }

    .text {
        margin-top: 10px;
    }

    hr {
        margin: 10px 0;
        border: 0;
        border-top: 1px solid #ccc;
    }

    .date {
        margin-top: 5px;
        color: gray;
        font-size: 0.9rem;
    }
</style>