<template>
    <div class="text-center" style="padding-left:10%;padding-right:10%;padding-bottom:0.1rem">
        <v-alert
        dense
        outlined
        type="error"
        >
        {{error}}
        </v-alert>
    </div>
</template>

<script>
export default {
    props:{
        error: String
    }
}
</script>