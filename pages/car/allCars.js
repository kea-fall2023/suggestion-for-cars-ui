import { API_URL } from "../../settings.js"
//const URL = API_URL + "/cars/admin"
const URL = API_URL + "/cars"
import { addContentToDOM } from '../../utils.js'

const html = /*HTML*/ `
<h2>Show all cars here, with details allowed for Admins</dt>
</h2>

<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Brand</th>
      <th>Model</th>
      <th>Price pr. day</th>
      <th>Best-discount</th>
    </tr>
  </thead>
  <tbody id="table-rows" />
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

