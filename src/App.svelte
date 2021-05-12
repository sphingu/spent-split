<script lang="ts">
  import { setClient } from 'svelte-apollo'

  import { client } from '@/graphql'
  import { Style, Toast } from '@/components'
  import Test from './Test.svelte'

  setClient(client)
</script>

<Style />
<Toast />
<Test />
