

//Make sure to check paths in import below
import { addContentToDOM } from '../utils.js'

const html = /*HTML*/`
<h2>Home</h2>
<img style="width:50%;max-width:100px;margin-top:1em;" src="./images/cars.png">
<p style='margin-top:1em;font-size: 1.5em;color:darkgray;'>
  Car's 'R' Us - Created, as a help to make GREAT fullstack developers <span style='font-size:2em;'>&#128516;</span>
</p>
`

let template
export function initAndGetPage(contentId /*additional args if required here*/) {
  if (template) {
    return addContentToDOM(contentId, template)
  }
  template = document.createElement('div')
  template.innerHTML = html
  addContentToDOM(contentId, template)
}