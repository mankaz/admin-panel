
export default {
  data() {
    return {

      nodes:[

      ],
      dataNodes: [
        {
          title: 'kalam 🥦',
          isExpanded: true
        },
        {
          title: 'pear 🍐',
          isLeaf: true,
          data: {visible: false}
        },
        {
          title: 'Grapes 🍇'
        },
        {
          title: 'karrot 🥕',
          isExpanded: true,
        }
      ],
    }},
  created() {
    this.serialize()
  },
methods : {
  serialize() {

    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (let i = 0; i < checkboxes.length; i++) {
      console.log(JSON.stringify(checkboxes[i]._value))
      JSON.stringify(this.nodes.push(checkboxes[i]._value))
    }

  }
}

}
