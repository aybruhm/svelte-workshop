<script>
    export let type = "button";
    export let disabled = false;
</script>

<main>
  <button {type} {disabled} class="btn" on:click>
    <slot></slot>
  </button>
</main>

<style>
  button {
    background-color: #28a745;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
  button:active {
    background-color: rgba(1, 39, 7, 0.6);
  }
  button:disabled {
    background-color: rgba(72, 77, 73, 0.5);
    cursor: not-allowed;
  }
  button:disabled:hover {
    background-color: rgba(69, 76, 70, 0.5);
  }
  button:disabled:focus {
    box-shadow: none;
  }

  button:hover {
    background-color: #218838;
  }
</style>
