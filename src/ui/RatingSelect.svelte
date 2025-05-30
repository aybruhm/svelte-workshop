<script>
    import { createEventDispatcher } from "svelte";
  let selected = 3;

  const dispatch = createEventDispatcher();

  const handleRatingChange = (event) => {
    selected = event.target.value;
    dispatch("rating-selected", selected); // Dispatch the selected rating
  };
</script>

<ul class="rating">
  <li>
    <input
      type="radio"
      name="rating"
      id="rating-1"
      value="1"
      on:change={handleRatingChange}
      checked={selected === 1}
    />
    <label for="rating-1">1</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="rating-2"
      value="2"
      on:change={handleRatingChange}
      checked={selected === 2}
    />
    <label for="rating-2">2</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="rating-3"
      value="3"
      on:change={handleRatingChange}
      checked={selected === 3}
    />
    <label for="rating-3">3</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="rating-4"
      value="4"
      on:change={handleRatingChange}
      checked={selected === 4}
    />
    <label for="rating-4">4</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="rating-5"
      value="5"
      on:change={handleRatingChange}
      checked={selected === 5}
    />
    <label for="rating-5">5</label>
  </li>
</ul>

<style>
  .rating {
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 20px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
    color: #28a745
  }

  .rating label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating input[type="radio"] {
    display: none;
    opacity: 0;
  }

  .rating li:hover {
    background: #28a745;
    color: #fff;
  }

  .rating input[type="radio"]:checked + label {
    background-color: #28a745;
    color: white;
  }
</style>
