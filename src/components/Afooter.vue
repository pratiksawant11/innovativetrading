<template>
  <div>
    <footer class="footer pt-5 pb-4">
      <div class="container text-center text-md-left">
        <div class="row text-center text-md-left">
          
          
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <a class="nav-link color router-link-exact-active active" href="/">
              <div class="fimage">
                <img
                  src="../assets/Images/logo.svg"
                  alt="image loading"
                  class="img-fluid"
                />
              </div>
            </a>
            <br />
            <div>
              <ul class="list">
                <li><a href="/" class="nav-link">Home</a></li>
                <br />
                <li><a href="/services" class="nav-link">Services</a></li>
                <br />
                <li><a href="/contact" class="nav-link">Contact</a></li>
              </ul>
            </div>
          </div>
          

          <div class="colm col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <div class="padd">
              <h4 class="title foot">Get in Touch</h4>
            </div>
            <hr />
            <div class="text">
              Please feel free to get in touch with us regarding any of our
              services using the following details
            </div>
            <div>
              <div class="colorr">
                <ul class="abcd">
                  <li>12 Princess Court, Canning Road, CR0 6QB</li>

                  <li>Phone:0208 058 7886</li>

                  <li>
                    Email:
                    <br />
                    <a>sales@innovativetrading.co.uk</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
       

          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <div class="padd">
              <h4 class="title foot">Where We Are</h4>
            </div>
            <hr />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.4252103120607!2d-0.08434148436935351!3d51.37686267961394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487600cff36bb14b%3A0x432f300759858f54!2sCanning%20Rd%2C%20Croydon%20CR0%206QB%2C%20UK!5e0!3m2!1sen!2sin!4v1635156277135!5m2!1sen!2sin"
              allowfullscreen="allowfullscreen"
              loading="lazy"
              class="size"
              style="border: 0px"
            ></iframe>
          </div>
        

        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Afooter",
};
</script>

<style scoped>
body {
  color: black;
}
.foot {
  color: #eb4760 !important;
}
.text {
  font-size: 15px;
  line-height: 1;
  color: #53165c !important;
  padding-bottom: 20px;
}
.colorr {
  color: black;
  font-size: 18px;
  text-align: left;
}
.footer {
  background-color: teal;
  line-height: 28px;
  font-size: 18px;
  padding-top: 2% !important;
  padding-bottom: 2% !important;
  box-sizing: border-box;
}
a.nav-link {
  color: #53165c !important;
}
.list {
  list-style: none;
  font-size: 130%;
  font-weight: 550px;
}
a {
  color: rgb(0, 51, 102) !important;
}
hr {
  color: white !important;
}
.size {
  height: 75%;
  width: 100%;
}
.nav-link:focus,
.nav-link:hover {
  color: #eb4760 !important;
}

</style>