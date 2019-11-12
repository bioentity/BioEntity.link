import { AnnotationComponent } from 'substance'

class ExtLinkComponent extends AnnotationComponent {

/*	constructor(parent, props = {}, options = {}) {
		super(parent, props, options)

		let comp = this
		let hl = {}
		hl['paragraphs'] = []
		console.log(comp)
		while(comp) {
			if(comp.contentHighlights) {
					
				hl['paragraphs'].push(this.props.node.path[0])
				console.log("set hilite for " + this.props.node.path[0])
				comp.contentHighlights.set(hl)
				comp = null
			} else {
				comp = comp.getParent()
			}
		}
		
	
	}*/

  didMount() {
    super.didMount.apply(this, arguments)

    let node = this.props.node
    node.on('properties:changed', this.rerender, this)
  }

  dispose() {
    super.dispose.apply(this, arguments)

    let node = this.props.node
    node.off(this)
  }

	setClass(el) {

	}

  render($$) { // eslint-disable-line
    let node = this.props.node;
    let el = super.render.apply(this, arguments)
	let word = this.props.children[0]
	while(typeof word.text !== 'string') {
		
		word = word.children[0]
	}

	if (node.id.length > 20) {
		el.removeClass('sm-highlighted')
		el.removeClass('sc-ext-link')
		/*
		if(node.entityType == "rule") {
			el.addClass("ext-link-green")
			el.attr('onclick', 'window.parent.postMessage({action: "editMarkup", term: "' + this.props.node.id + '", word: "' + word.text + '"}, "*")')

		} else if(node.entityType == "nomu") {
			el.addClass("ext-link-red")
		//	let extLink = this.context.doc.get(node.id)
			let link = {start: node.startOffset, end: node.endOffset, path: node.path[0], extLinkId: node.id, keyWord: {value: word.text}}
			el.attr('onclick', 'window.parent.postMessage({action: "createMarkup", term: ' + JSON.stringify(link) + '}, "*")')

		} else if(node.entityType == "mu") { 
			el.addClass("ext-link-yellow")	
			el.attr('onclick', 'window.parent.postMessage({action: "editMarkup", term: "' + this.props.node.id + '", word: "' + word.text + '"}, "*")')

		} else if(this.props.children[0].props && this.props.children[0].props.node && this.props.children[0].props.node.id.startsWith("superscript")) {
				
			el.addClass("ext-link-superscript")	
			el.attr('onclick', 'window.parent.postMessage({action: "editMarkup", term: "' + this.props.node.id + '", word: "' + word.text + '"}, "*")')
		} else {

			el.addClass("ext-link-yellow")	
			el.attr('onclick', 'window.parent.postMessage({action: "editMarkup", term: "' + this.props.node.id + '", word: "' + word.text + '"}, "*")')


		}
*/
		let match = node.attributes['xlink:href'].match(/bioentitylink\/(.+):/)
		let colors = {"FB": "#007bff", "WB": "#6c757d", "SGD": "#28a745", "MGI": "#dc3545", "POM": "#ffc107", "RGD": "#17a2b8", "ZFIN": "#343a40"}
		let classes = {"FB": "ext-link-fb", "WB": "ext-link-wb", "SGD": "ext-link-sgd", "MGI": "ext-link-mgi", "POM": "ext-link-pom", "RGD": "ext-link-rgd", "ZFIN": "ext-link-zfin"}

		if(match) {
//			el.attr('style', 'color:' + colors[match[1]])
			el.addClass(match[1].toLowerCase())
			el.attr('onclick', 'window.parent.postMessage({action: "editMarkup", term: "' + this.props.node.id + '", word: "' + word.text + '"}, "*")')

		} 

	}
    el.tagName = 'a'
	el.attr('href', '#')
//	console.log(word.text + " " + this.props.node.entityType)

    return el
  }

	onHighlightedChanged() {
		this.el.removeClass('sm-highlighted')	
	}
}

export default ExtLinkComponent
