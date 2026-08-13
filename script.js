// tab contents in about section

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// open/close side menu in header section

var sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = '0';
}
function closemenu() {
    sidemenu.style.right = '-150px';
}

//contact page

const scriptURL = 'https://script.google.com/macros/s/AKfycbxzI3gvUsE6EWKeZrzrkMU4j119we0vkrLwziHpewH18YI5ef5VJConw6NVMpjOwBMe/exec'
	const form = document.forms['submit-to-google-sheet']
    const message = document.getElementById('message');

	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => response.json())
			.then(response => console.log('Success!', response))
			.catch(error => console.error('Error!', error.message))
	})