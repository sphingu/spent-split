<script lang="ts">
  import { ALL_USERS } from '@/graphql'
  import { LoadData } from '@/components'
</script>

<LoadData query={ALL_USERS} let:data={users}>
  <span slot="loading">My Custom Loading...</span>

  <span style="color: red" slot="error">My Custom Error...</span>

  <pre>
    {JSON.stringify(users, undefined, 2)}
  </pre>
</LoadData>
