<script lang="ts">
  // As default value is not defined it will assign first value after initial binding
  let selectedQuestionId;
  let multipleSelectedQuestionIds = [];
  let questions = [
    {
      id: 1,
      question: "My Question one",
    },
    {
      id: 2,
      question: "My Question two",
    },
    {
      id: 3,
      question: "My Question three",
    },
  ];
</script>

<select bind:value={selectedQuestionId}>
  {#each questions as { id, question } (id)}
    <option value={id}>{question}</option>
  {/each}
</select>

<select multiple bind:value={multipleSelectedQuestionIds}>
  {#each questions as { id, question } (id)}
    <option value={id}>{question}</option>
  {/each}
</select>

<br />

Selection: {selectedQuestionId}

Multiple Selection: {multipleSelectedQuestionIds.join(", ")}
