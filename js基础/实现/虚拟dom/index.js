const ul = new Element('ul', { id: 'list' }, [
    new Element('li', { class: 'item' }, ['item1']),
    new Element('li', { class: 'item' }, ['item2']),
    new Element('li', { class: 'item' }, ['item3']),
])

document.body.appendChild(ul.render())