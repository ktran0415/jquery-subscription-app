$(document).ready( function() {
  $('#plan').on('change', function(){
    var priceText;
    console.log(this)

    switch(this.value) {

      case 'monthly':
        priceText = '$10.00/mo'
        break
      case 'quarterly':
        priceText = '$9.00/mo'
        break
      case 'yearly':
        priceText = '$7.00/mo'
        break
    }

    $('#price').text(priceText)
  })

  $('#add').on('click', function() {
    var plan = $('#plan')
    var installment = plan.val()
    var price = $('#price').text()
    var inCart = $('#cart')
    var numeric = price.replace(/[[A-Za-z$\/\s]/g, '')
    var data = 'data-price"' + numeric + '" data-plan="' + installment + '"'
    inCart.append('<li class="entry"' + data + '>' + installment + ' - ' + price + '</li>')
  })

  function updateTotal() {
    var total = 0;

    $('.entry').each( function( entry) {
      var data = $(entry).data()
      var price = parseFloat(data.price)
      var installment = data.plan

      switch (installment) {
        case 'monthly':
          total += price
          break
        case 'quarterly':
          total += price * 4
          break
        case 'yearly':
          total += price * 12
          break

      }
    }
  }

})