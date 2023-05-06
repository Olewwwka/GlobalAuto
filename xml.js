let table = (arr_tag, arr) => {
    let i = 0;
    for (const elem_arr of arr_tag) {
      arr[i++] = elem_arr.textContent;
    }
    return arr;
  };

  let parse = (xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

    const partners = xmlDoc.getElementsByTagName('partner');
    const names = xmlDoc.getElementsByTagName('name');
    const images = xmlDoc.getElementsByTagName('image');
    const informations = xmlDoc.getElementsByTagName('information');

    let names_arr = [], images_arr = [], informations_arr = [];
    names_arr = table(names, names_arr);
    images_arr = table(images, images_arr);
    informations_arr = table(informations, informations_arr);

    let html = '';

    for (let i = 0; i < partners.length; i++) {
      html += '<div class="cont">';
      html += '<div class="img"><img src="' + images_arr[i] + '"></div>';
      html += '<div class="text-right">';
      html += '<p class="head">' + names_arr[i] + '</p>';
      html += '<p class="information">' + informations_arr[i] + '</p>';
      html += '</div>';
      html += '</div>';
    }

    document.querySelector('.info').innerHTML = html;
  });

  async function parseXML() {
    let response = await fetch('../XML/partners.xml');
    let xmlString = await response.text();
    parse(xmlString);
  }

  parseXML();