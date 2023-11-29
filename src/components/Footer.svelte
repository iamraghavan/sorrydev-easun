<script>

    import _ from 'lodash'; // Import lodash
  
    const contactInfo = {
      address: 'No:21 Kamarajar 3rd Street Srinivasa Nagar Padi, Chennai – 600 050 ',
      phone: '(91) 98840-80008',
      email: `info@easun.in <br> npd@easun.in`,
    };
  

  
    let currentYear = new Date().getFullYear();
  let copyright = `Copyright Ⓒ 2021 - ${currentYear}`;  

  </script>

  <style>
      .map-container {
    border-radius: 15px; /* Adjust the border-radius as needed */
    overflow: hidden;
  }

  .map-iframe {
    width: 100%;
    height: 400px; /* Set the height as needed */
    border: none;
  }
  </style>
  

  <footer class="footer mt-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 width-20 mb-30">
          <h4 class="text-heading-5">Contact</h4>
          {#each Object.keys(contactInfo) as key}
            {#if key === 'email'}
              <div class="mt-20 text-body-text color-gray-600" key={key}>
                <div>{@html contactInfo[key]}</div>
              </div>
            {:else}
              <div class="mt-20 text-body-text color-gray-600" key={key}>{contactInfo[key]}</div>
            {/if}
          {/each}
        </div>
  
        <div class="col-lg-8  mb-30">
            <div class="map-container">
                <iframe
                  class="map-iframe"
                  
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.0541724226728!2d80.17975430651549!3d13.09231944679526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263f0d85b3793%3A0xb2f6afe2e1c476e2!2sSrinivasa%20Nagar%2C%20Padi%2C%20Chennai%2C%20Tamil%20Nadu%20600050!5e0!3m2!1sen!2sin!4v1701270134613!5m2!1sen!2sin"
                  allowfullscreen="true"
                  loading="lazy"
                  title="Google Map of New York, NY"
                ></iframe>
              </div>
        </div>
      </div>
  
      <div class="footer-bottom mt-20">
        <div class="row">
          <div class="col-md-6">
            <span class="color-gray-400 text-body-lead">{copyright}</span>
            <a class="text-body-text color-gray-400 ml-50" href="/">Privacy policy</a>
            <a class="text-body-text color-gray-400 ml-50" href="/">Cookies</a>
            <a class="text-body-text color-gray-400 ml-50" href="/">Terms of service</a>
          </div>
          <div class="col-md-6 text-center text-lg-end text-md-end">
            <span class="color-gray-400 text-body-lead">Bumble Bees IT Solutions</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  