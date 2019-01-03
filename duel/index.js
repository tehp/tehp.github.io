var characters = []
var traits = []
var items = []

var db = fetch('https://spreadsheets.google.com/feeds/list/12qfu6ETrVQhDDvG1Fn4LN=OvdvOeeq03krrsHdBfiv00/od6/public/basic?alt=json')
  .then(function(response) {
    return response.json()
  })
  .then(function(db) {
    var entry = db.feed.entry;
    for (col in entry) {
      content = entry[col].content.$t
      content = content.split(',')

      // characters
      characters.push(entry[col].title.$t)

      // traits
      trait = content[0].replace('trait: ', '')
      traits.push(trait)

      // items
      item = content[1].replace(' item: ', '')
      items.push(item)
    }
  })
  .then(function(response) {
    var p1 = []

    characters_rand = Math.floor(Math.random() * characters.length)
    p1[0] = characters[characters_rand]
    characters.splice(characters_rand, 1);

    traits_rand = Math.floor(Math.random() * traits.length)
    p1[1] = traits[traits_rand]
    traits.splice(traits_rand, 1)

    items_rand = Math.floor(Math.random() * items.length)
    p1[2] = items[items_rand]
    items.splice(items_rand, 1)

    var p2 = []

    characters_rand = Math.floor(Math.random() * characters.length)
    p2[0] = characters[characters_rand]

    traits_rand = Math.floor(Math.random() * traits.length)
    p2[1] = traits[traits_rand]

    items_rand = Math.floor(Math.random() * items.length)
    p2[2] = items[items_rand]

    p1_str = p1[0] + " with " + p1[1] + " and " + p1[2]
    p2_str = p2[0] + " with " + p2[1] + " and " + p2[2]

    document.getElementById('p1').innerText = p1_str
    document.getElementById('p2').innerText = p2_str
  })