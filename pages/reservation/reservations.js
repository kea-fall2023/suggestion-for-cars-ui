import { API_URL } from "../../settings.js"

import { addContentToDOM } from '../../utils.js'

const html = /*HTML*/`
<h2>This is your reservations</h2>
  <table class="table">
    <thead>
      <tr>
        <th>Car Id</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Reservation Date</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody id="tablerows" />
  </table>
  <p id="error" style="color:red"></p>
`
function runJavaScript(/*add args if required*/) {
  //Add your JavaScript here
}

let template
export function initAndGetPage(contentId) {
  //if (template) {
  //return addContentToDOM(contentId,template)
  //}
  template = document.createElement('div')
  template.innerHTML = html
  addContentToDOM(contentId, template)
  runJavaScript(/*add args if required*/)
}

