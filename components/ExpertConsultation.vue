<script setup>
import ConsultationButton from './ConsultationButton.vue';
defineProps(['style']);
</script>

<template>
  <div class="expert-consultation-content">
    <span class="expert-title"> Консультация<br />эксперта </span>
    <div class="experts-photos">
      <img
        class="expert-photo expert-photo-1"
        src="https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698404343/36a6/09f8/1612/666f26efefea89f249fca6a89aea5686.png" /><img
        class="expert-photo expert-photo-2"
        src="https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698403620/c82a/7f01/d21a/5094ce73392b9281bfcb58ad89e3cc08.png" /><img
        class="expert-photo expert-photo-3"
        src="https://seal-img.nos-jd.163yun.com/obj/w5rCgMKVw6DCmGzCmsK-/62698402583/9ed8/9e16/9873/ef3dabacdd0846f204195e9094a4485f.png" />
    </div>
    <ConsultationButton class="consultation-button" />
  </div>
</template>

<style scoped>
/* Expert Consultation Content */
.expert-consultation-content {
  width: 37.33333333333333vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.2vw;
  padding-right: 3.2vw;
  padding-bottom: 3.2vw;
  padding-left: 3.2vw;
  gap: 3.2vw;
  border-radius: 1.0666666666666667vw 0 0 1.0666666666666667vw;
  background-color: #f4f6f9;
  position: relative;
  z-index: 1;
  margin-left: 2.533333333333333vw;
  margin-top: 2.533333333333333vw;
}

/* Expert Title */
.expert-title {
  width: 28.8vw;
  flex-shrink: 0;
  text-align: center;
  font-size: 3.066666666666667vw;
  font-family: 'Exo 2';
  font-weight: 600;
  line-height: normal;
  color: #333333;
}

/* Experts Photos */
.experts-photos {
  position: relative;
  width: 22.666666666666666vw;
  height: 8.533333333333333vw;
  flex-shrink: 0;
  border-radius: 1.0666666666666667vw;
  background-color: rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

/* Expert Photo Base Styles */
.expert-photo {
  width: 8.533333333333333vw;
  height: 8.533333333333333vw;
  border-radius: 2.1333333333333333vw;
  border-width: 0.4vw;
  border-style: solid;
  border-color: #f4f6f9;
  object-fit: cover;
  position: relative;
  margin-left: 0.5333333333333333vw;
  margin-top: 0;
}

/* Expert Photo 2 */
.expert-photo-2 {
  width: 8.533333333333333vw;
  height: 8.533333333333333vw;
  border-radius: 2.1333333333333333vw;
  border-width: 0.4vw;
  border-style: solid;
  border-color: #f4f6f9;
  object-fit: cover;
  position: relative;
  margin-left: -2vw;
  margin-top: 0;
}

/* Expert Photo 3 */
.expert-photo-3 {
  width: 8.533333333333333vw;
  height: 8.533333333333333vw;
  border-radius: 2.1333333333333333vw;
  border-width: 0.4vw;
  border-style: solid;
  border-color: #f4f6f9;
  object-fit: cover;
  position: relative;
  margin-left: -2vw;
  margin-top: 0;
}

/* Consultation Button */
.consultation-button {
  flex-shrink: 0;
  position: relative;
}

/* Label */
.text_5 {
  flex-shrink: 0;
}
</style>
