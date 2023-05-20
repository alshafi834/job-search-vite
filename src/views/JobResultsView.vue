<template>
  <div class="flex w-full flex-row flex-nowrap">
    <Job-filter-sidebar />
    <Job-listings />
  </div>
</template>

<script>
import JobFilterSidebar from '../components/JobResults/JobFilterSidebar/JobFilterSidebar.vue'
import JobListings from '../components/JobResults/JobListings.vue'

export default {
  name: 'JobResultView',
  components: { JobFilterSidebar, JobListings }
}
</script>
