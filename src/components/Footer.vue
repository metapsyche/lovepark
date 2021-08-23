<template>
  <footer class="footer" aria-label="Footer">
    <div class="columns">
      <div class="column">
        <div class="column__info">
          <p class="labeler">Address</p>
          <p>{{ address.address_1 }} {{ address.address_2 }}</p>
          <p>{{ address.city }}, {{ address.state }} {{ address.zip }}</p>
          <p><a class="map-link" href="#">Map</a></p>
        </div>
      </div>
      <div class="column">
        <div class="column__info">
          <p class="labeler">Hours</p>
          <p>Closed Today</p> <!-- TO-DO: use script to detect user's date-time and display proper hours based on logic  -->
          <br>
           <p><a href="#">See all hours</a></p>
        </div>
      </div>
      <div class="column">
        <div class="column__info">
          <p class="labeler">Contact</p>
          <p><a href="mailto:{{ contact.email }}">{{ contact.email }}</a></p>
          <p><a href="#">{{ phone }}</a></p>
          <p><i class="fab fa-facebook-square"></i></p>
          <p><a href=""><img class="facebook_icon" alt="Love Park Image" src="./../assets/images/facebook.png" /></a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        address: {},
        contact: {},
        hours: {},
      }
    },
    methods: {
      async getData() {
        try {
          fetch("http://ec2-3-88-48-245.compute-1.amazonaws.com/wp-json/locations/v1/connect")
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.address = data.address;
            this.contact = data.contact;
            this.phone = '(215) 683-3600'; // TO-DO: reformat raw phone number
            this.hours = data.hours;
          })
        } catch (error) {
          console.log(error);
        }
      },
    },
    created() {
      this.getData();
    },
  }
</script>
