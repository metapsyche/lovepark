<template>
  <div role="main">
    <div class="about__content">
      <div class="text-wrap">

        <h1>{{content.title}}</h1>
        <!-- {{content.content}} -->
        <p>LOVE Park has been a centerpiece of Philadelphia&#8217;s urban landscape for more than 50 years. In that time, it&#8217;s become part of daily life in Center City, as well as a backdrop for public demonstrations and popular festivals.</p> <h2>History</h2> <p>Dedicated as John. F. Kennedy Plaza in 1967, the park was designed by Edmund Bacon and Vincent G. Kling. Its central location and iconic views soon made it a favorite gathering place.</p> <p>The <em>LOVE</em> sculpture was added to the park for the nation’s bicentennial. Created by Robert Indiana, the artwork became a fixture when F. Eugene Dixon, Jr., Chairman of the Philadelphia Art Commission, purchased it as a gift to the City.</p> <p>In 2016, renovations began at LOVE Park. The improvements included an accessible design, new fountains, and more opportunities for play. Even the <em>LOVE </em>sculpture received a makeover, returning to its original red, green, and purple color scheme.</p> <p>The park officially reopened in 2018. A typical summer afternoon finds city workers enjoying live music on their lunch hour, while visitors cool off in the fountains, play ping-pong, or take photos. Stop by and find out what makes LOVE Park the park that loves you back!</p> <h2>Use the park</h2> <p>To use LOVE Park for a demonstration, protest, or other event, you’ll need a permit from Philadelphia Parks &amp; Recreation. You may also need permits from other City agencies. For more information, contact the Parks &amp; Rec Special Events Office at (215) 685-0060.</p> <p>If you&#8217;d like to hold your marriage ceremony at the <em>LOVE</em> sculpture, you can sign up for <a href="http://stagelocation.wpengine.com/tags/wedding-wednesdays/">Wedding Wednesdays</a>. Learn more about <a href="http://stagelocation.wpengine.com/events/tag/wedding-wednesdays/">getting married at LOVE Park</a>.</p>
  LOVE Park has been a centerpiece of Philadelphia’s urban landscape for more than 50 years. In that time, it’s become part of daily life in Center City, as well as a backdrop for public demonstrations and popular festivals.
        <div class="parkswrap">
          <img alt="Love Park Image" src="./../assets/images/parks-and-rec-logo.png" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: {}
      }
    },
    methods: {
      async getAbout() {
        try {
          fetch("http://ec2-3-88-48-245.compute-1.amazonaws.com/wp-json/pages/v2/archive?id=27")
          .then(response => response.json())
          .then(data => {
            //console.log(data);
            this.content = data;
          })
        } catch (error) {
          console.log(error);
        }
      },
    },
    created() {
      this.getAbout();
    },
  }
</script>
