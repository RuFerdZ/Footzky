window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}



		function detail() {
			var name = document.getElementById('fname').value;
			    window.alert("Dear "+name+" your order has been recived.");
		}
		

		function getPrice1() {
			
			var quaFoot = parseInt(document.getElementById('football').value);
			var quaShirt =parseInt(document.getElementById('shirt').value);
			var quabootz = parseInt(document.getElementById('boots').value);
			var quaGear = parseInt(document.getElementById('headgear').value);
			
			var x =50.99;
			var price1 = x * quaFoot;
		
			var y = 20.99;
			var price2 = y * quaShirt ;
			
			var z = 149.99;
			var price3 = z * quabootz;
			
			var a = 30.45;
			var price4 = a * quaGear;
			
			var total = price1 + price2 + price3 + price4;
			document.getElementById('total').innerHTML = total;
			
			window.alert("The total amount you have to pay is " +total+ "$.Please fill your details in the form right next to this form");
			
		}