var hint = new Array
hint[0] = 'my responsive website coded in html and css'
hint[1] = 'a redesign of a hotel website'
hint[2] = 'group presentation of a re-coded website'
hint[3] = ' animation'
hint[4] = ' shopping app personas'
hint[5] = 'simple picture interchange'
hint[6] = 'exper views and inputs on our interactive product'
hint[7] = 'digital shopping ap personas'
hint[8] = 'digital shopping app report on production process'
hint[9] = 'a prototype version of the digital shopping app'
hint[10] = 'a prototype version of the digital shopping app'
hint[11] = 'presentin our digital app to the lecturers-pitch mockup'
hint[12] = 'silent video shot and edited in premier pro'
hint[13] = 'digital app on city meet up for lonely people'
hint[14] = 'video on a digital meet up app'

function showhint(current, e, num) {
  if (document.layers)
  {
    theString = "<DIV CLASS='ttip'>" + hint[num] + "</DIV>"
    document.tooltip.document.write(theString)
    document.tooltip.document.close()
    document.tooltip.left = e.pageX + 14 + 'px'
    document.tooltip.top = e.pageY + 2 + 'px'
    document.tooltip.visibility = "show"
  } else {
    if (document.getElementById) // Netscape 6.0+ and Internet Explorer 5.0+
    {
      elm = document.getElementById("tooltip")
      elml = current
      elm.innerHTML = hint[num]
      elm.style.height = elml.style.height
      elm.style.top = parseInt(elml.offsetTop + elml.offsetHeight) + 'px'
      elm.style.left = parseInt(elml.offsetLeft + elml.offsetWidth + 10) + 'px'
      elm.style.visibility = "visible"
    }
  }
}

function hidehint() {
  if (document.layers) {
    document.tooltip.visibility = "hidden"
  } else {
    if (document.getElementById) {
      elm.style.visibility = "hidden"
    }
  }
}
