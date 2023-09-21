/**
 * Sets active element on a div (or similar) containing a-tags (with data-navigo attributes ) used as a "menu"
 * Meant to be called in a before-hook with Navigo
 * @param topnav - Id for the element that contains the "navigation structure"
 * @param activeUrl - The URL which are the "active" one
 */
export function setActiveLink(topnav, activeUrl) {
  const links = document.getElementById(topnav).querySelectorAll("a");
  links.forEach(child => {
    child.classList.remove("active")
    //remove leading '/' if any
    if (child.getAttribute("href").replace(/\//, "") === activeUrl) {
      child.classList.add("active")
    }
  })
}

/**
 * clear the original view, and add new page
 * @param  content 
 * @param  contentId 
 */
export function addContentToDOM(contentId, htmlContent){
  document.getElementById(contentId).innerHTML="";
  document.getElementById("content").append(htmlContent)
}

/**
 * Small utility function to use in the first "then()" when fetching data from a REST API that supply error-responses as JSON
 *
 * Use like this--> const responseData = await fetch(URL,{..}).then(handleHttpErrors)
 */
export async function handleHttpErrors(res) {
  if (!res.ok) {
    const errorResponse = await res.json();
    const msg = errorResponse.message ? errorResponse.message:"No details provided"
    throw new Error(msg)
  }
 return res.json()
}


/**
 * HINT --> USE DOMPurify.santitize(..) to sanitize a full string of tags to be inserted
 * via innerHTLM
 * Tablerows are required to be inside a table tag, so use this small utility function to 
 * santitize a string with TableRows only (made from data with map)
 * DOMPurify is available here, because it's imported in index.html, and as so available in all 
 * your JavaScript files
*/
export function sanitizeStringWithTableRows(tableRows) {
  let secureRows = DOMPurify.sanitize("<table>" + tableRows + "</table>")
  secureRows = secureRows.replace("<table>", "").replace("</table>", "")
  return secureRows
}