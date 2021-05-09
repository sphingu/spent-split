<script lang="ts">
  import { Style, Toast } from '@/components'

  import { AddEditUser } from '@/pages'
</script>

<Style />
<Toast />

<AddEditUser
  userId="1"
  userInfo={{ lastName: 'Last Name', firstName: 'First Name' }}
/>
