<template>
  <div>
    <div class="contactimg">
      <img
        src="../assets/Images/contact1.jpg"
        class="imgc img-fluid"
        alt="image Loading"
      />
    </div>
    <div class="contact-img">
      <p>CONTACT US</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contactus",
};
</script>

<style scoped>
.contact-img {
  position: absolute;
  top: 50%;
  width: 100%;
}
.contact-img p {

  color: #53165c !important;
  font-size: 35px;
  font-family: Times, serif;
  font-weight: 600;
  position: absolute;
  top: 25% !important;
  width: 100%;
  text-align: center !important;
}

.contactimg {
  opacity: 0.7;
}
.words {
  background-color: skyblue;
  color: rgb(233, 69, 94);
  font-size: 26px !important;
  padding: 50px 130px 0 130px;

}
.mark {
  background-color: skyblue;
}
@media only screen and (max-width: 991px) {
  .imgc {
    max-width: 100vw !important;
    height: 300px !important;
  }
  .contact-img {
    font-size: 16px !important;
    top: 31% !important;
  }

}
</style>