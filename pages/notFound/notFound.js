import { addContentToDOM } from '../../utils.js'

const html = /*HTML*/`
<div style="margin-left:20%;width:55%;margin-right: auto;padding-top: 5em;text-align: center;">
  <hr />
  <h1 style="color:darkred;font-size: 6em;"><b>404</b></h1>
  <h1>No Content found for this route</h1>
  <a href="#">Go back to Home</a>
  <hr />
</div>
`

let template
export function initAndGetPage(contentId) {
  if (template) {
    return addContentToDOM(contentId, template)
  }
  template = document.createElement('div')
  template.innerHTML = html
  addContentToDOM(contentId, template)
}