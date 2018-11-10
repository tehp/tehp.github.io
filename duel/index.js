var characters = []
var traits = []
var items = []

var db = fetch('https://spreadsheets.google.com/feeds/list/12qfu6ETrVQhDDvG1Fn4LNOvdvOeeq03krrsHdBfiv00/od6/public/basic?alt=json')
  .then(function(response) {
    return response.json()
  })
  .then(function(db) {
    var entry = db.feed.entry;
    for (i in entry) {
      content = entry[i].content.$t
      content = content.split(',')

      // characters
      characters.push(entry[i].title.$t)

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
    p1[0] = characters[Math.floor(Math.random() * characters.length)]
    p1[1] = traits[Math.floor(Math.random() * traits.length)]
    p1[2] = items[Math.floor(Math.random() * items.length)]

    var p2 = []
    p2[0] = characters[Math.floor(Math.random() * characters.length)]
    p2[1] = traits[Math.floor(Math.random() * traits.length)]
    p2[2] = items[Math.floor(Math.random() * items.length)]

    console.log(p1)
    console.log(p2)

    p1_str = p1[0] + " with " + p1[1] + " and " + p1[2]
    p2_str = p2[0] + " with " + p2[1] + " and " + p2[2]

    document.getElementById('p1').innerText = p1_str
    document.getElementById('p2').innerText = p2_str
  })