<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="user image" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
    }
  }
}
</script>
