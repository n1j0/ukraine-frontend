<template>
  <div class="custom-file b-form-file">
    <input type="file" accept="image/*" class="custom-file-input" :id="id" @change="fileHandler">
    <label data-browse="Browse" class="custom-file-label" :for="id">
      <span class="block form-file-text">
          {{ file ? file.name : $t('forms.fileUpload') }}
      </span>
    </label>
  </div>
</template>

<script>
import imageCompression from 'browser-image-compression'

const compressionOptions = {
  maxSizeMB: 0.2,
  maxWidthOrHeight: 720,
  useWebWorker: true,
}

export default {
  name: 'UFileUpload',
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  data: () => ({
    file: null,
    error: '',
  }),
  computed: {
    id() {
      return `file-${this.name}`
    }
  },
  methods: {
    async fileHandler(evt) {
      this.error = ''
      const files = evt.target.files
      if (files.length === 0) return

      if (files.length > 1) {
        this.error = 'Maximale Dateianzahl überschritten, maximal 1 Datei.'
        return
      }

      const file = files[0]
      if (file.size > 5000000) {
        this.error = 'Ungültige Dateigröße, Datei muss kleiner als 5 MB sein.'
        return
      }

      this.file = await imageCompression(file, compressionOptions)

      this.$emit('change', this.file)
    }
  }
}
</script>

<style scoped>
.custom-file, .custom-file-input {
  display: inline-block;
  margin-bottom: 0;
}

.custom-file {
  position: relative;
  width: 100%;
  height: calc(1.5em + 0.75rem + 10px);
}

.custom-file-input {
  margin: 0;
  opacity: 0;
  z-index: -5;
}

input {
  overflow: visible;
}

.custom-file-label {
  left: 0;
  z-index: 1;
  height: calc(1.5em + 0.75rem + 10px);
  font-weight: 400;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  white-space: nowrap;
  overflow-x: hidden;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.custom-file-label, .custom-file-label:after {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.325rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  overflow-y: hidden;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.form-file-text {
  padding-top: 5px;
  pointer-events: none;
}

.custom-file-input~.custom-file-label[data-browse]:after {
  content: attr(data-browse);
}

.custom-file-label:after {
  padding-top: 10px;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(1.5em + 0.75rem);
  background-color: #e9ecef;
  border-left: inherit;
  border-radius: 0 0.25rem 0.25rem 0;
}

.custom-file-input:focus~.custom-file-label {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
}
</style>
