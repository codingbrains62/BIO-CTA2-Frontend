<!-- ModalBoir start -->
<template>    
  <div class="modal fade show" style="display:block">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Instruction</h5>
        </div>
        <div class="modal-body">
          <p>
          <span>1.</span> Complete the report in its entirety with all required information. Click Instructions for help.
        </p>
         
        </div>
        <div class="modal-footer">
          <button type="button" v-on:click="close" class="close">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalBoir',
  methods: {
    close() {
      console.log('close');
      this.$emit('click'); // Emit the click event to the parent component
    }
  },
}
</script>
<!-- ModalBoir end -->
