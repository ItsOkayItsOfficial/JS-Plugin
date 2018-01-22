// -- Plugin Card --//

(() => {

  // Function - Static quote
  let quoteStatic = (logo, tag, price) => {
    // styles
    let styleImage =
      'height:45px;'

    let styleTag =
      'font-size:12px;' +
      'margin:auto;' +
      'width:60%;'

    let stylePrice =
      'font-size:1.5em;' +
      'font-weight:bold;' +
      'margin:10px;'

    let styleQuote =
      'border:rgba(0, 0, 0, 0.3) 1px outset;' +
      'display:inline-flex;' +
      'height:50px;' +
      'margin:5px;'


    const quoteDiv = document.createElement('div')
    quoteDiv.setAttribute('class', 'quote')
    quoteDiv.setAttribute('style', styleQuote)
    quoteDiv.innerHTML = `
      <img src=${logo} style=${styleImage}>
      <div style=${styleTag}>
      <p> ${tag} </p>
      </div>
      <h2 style=${stylePrice}> ${price} </h2>
      <p style='font-size:0.5em'>est</p>
      `

    return quoteDiv;

  } // END quoteStatic


  // Function - Quote request
  let quoteRequest = (data) => {

    fetch('https://valet.irelo.com/api/widget/auto/coop-embed', {
        method: 'post',
        headers: {
          'Authorization': '4d69e62f60ab-apugh'
        },
        body: data
      })
      .then((response) => {
        response.ok ? console.log('Network request was successfull') : console.error('There was a problem with the network response')
      })
      .catch((error) => {
        console.error('There was a problem with the requet: ', error.message)
      })

  } // END quoteRequest


  // Function - Quote button
  let quoteButton = (text) => {
    // styles
    let styleButton =
      'background-color:#7eb846;' +
      'border:1px solid transparent;' +
      'color:#fff;' +
      'display:flex;' +
      'font-size:20px;' +
      'height:36px;' +
      'line-height:36px;' +
      'margin:1rem auto;' +
      'outline:0;' +
      'padding:0 2rem;' +
      'text-align:center;'

    const getQuote = document.createElement('button');

    getQuote.setAttribute('style', styleButton);
    getQuote.innerText = text;

    return getQuote;
  } // END quoteButton


  // Function - Quote form
  let quoteForm = (wrapper) => {
    // styles
    let styleForm =
      'display:flex;' +
      'flex-direction:column;'

    let styleInput =
      'width:60%;' +
      'height:1.5rem;' +
      'font-size:1rem;' +
      'margin:auto;' +
      'margin-bottom:20px'

    let header;
    // New Header
    if (wrapper.firstChild.nodeName === 'HEADER') {
      header = wrapper.firstChild;
      header.firstChild.innerText = 'Get Quotes';
    }

    // New Body
    const form = document.createElement('form');

    form.setAttribute('style', styleForm);
    form.innerHTML = `
      <input id="phone-number" type"text" placeholder="Phone" style=${styleInput}>
      <input id="email" type"email" placeholder="Email" style=${styleInput}>
      `
    wrapper.appendChild(form);

    // New Footer
    const submitForm = quoteButton('SUBMIT')
    footer.removeChild(getQuote)
    footer.removeChild(img)
    footer.appendChild(submitForm)
    footer.appendChild(img)
    wrapper.appendChild(footer)

    // Click submit button
    submitForm.addEventListener('click', () => {
      // Input Values
      const phoneNumber = document.getElementById('phone-number').value;
      const email = document.getElementById('email').value;

      // Verify Email
      let verify = email;
      // Verify Phone
      if (!email) {
        verify = phoneNumber;
      }

      // Function - Request Quote
      quoteRequest(verify);
      // Alert & Refresh - Thank you response
      if(!alert('Thank you for your request.\n You will be contacted shortly with your quotes!')){window.location.reload();}

    });

  } // END quoteForm

  // stlyes
  let styleWrapper =
    'margin:auto;' +
    'max-width:60%;'

  let styleCard =
    'border:rgba(0, 0, 0, 0.3) 1px outset;' +
    'padding:0px 15px;' +
    'margin:auto;' +
    'max-width:50%;'

  let styleHeader =
    'border-bottom:rgba(0, 0, 0, 0.3) 1px outset;' +
    'margin-bottom:15px;' +
    'text-align:center;' +
    'width:100%;'

  let styleFooter =
    'border-top:rgba(0, 0, 0, 0.3) 1px outset;' +
    'margin-top:15px;' +
    'text-align:center;' +
    'width:100%;'


  const plugin = document.getElementById('oap-plugin')
  const wrapper = document.createElement('div');
  const header = document.createElement('header')
  const footer = document.createElement('footer')
  const h1 = document.createElement('h1');
  const img = document.createElement('img')

  // Card
  plugin.setAttribute('style', styleWrapper)
  wrapper.setAttribute('style', styleCard)


  // Card Header
  header.setAttribute('style', styleHeader)
  img.setAttribute('src', 'https://www.irelo.com/images/logo-small.png')
  img.setAttribute('style', 'height:10px;')
  h1.innerText = 'Transporters'
  header.appendChild(h1)
  wrapper.appendChild(header)


  // Card Body
  const quote1 = quoteStatic('https://www.irelo.com/images/clients/ace.png', 'Moving you down the street or around the globe.', '$100');
  const quote2 = quoteStatic('https://www.irelo.com/images/clients/assurance-van-lines.png', 'Affordable long distance movers & relocation services', '$150');
  const quote3 = quoteStatic('https://www.irelo.com/images/clients/mercury.png', 'One-stop shopping for all of your shipping needs', '$156');
  const quote4 = quoteStatic('https://www.irelo.com/images/clients/united.png', 'Worldwide network of freight forwarders & customs brokers', '$210');

  wrapper.appendChild(quote1)
  wrapper.appendChild(quote2)
  wrapper.appendChild(quote3)
  wrapper.appendChild(quote4)


  // Card Footer
  footer.setAttribute('style', styleFooter)
  const getQuote = quoteButton('GET QUOTES')
  footer.appendChild(getQuote)
  footer.appendChild(img)
  wrapper.appendChild(footer)


  // onClick - Get quote
  getQuote.addEventListener('click', (event) => {

    // Remove - Static quotes
    wrapper.removeChild(quote1);
    wrapper.removeChild(quote2);
    wrapper.removeChild(quote3);
    wrapper.removeChild(quote4);

    // Remove - Get quote
    wrapper.removeChild(footer);

    // Add - Quote form
    quoteForm(wrapper);

  });

  plugin.appendChild(wrapper);

})();