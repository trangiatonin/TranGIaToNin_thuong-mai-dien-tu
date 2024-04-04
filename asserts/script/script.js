// JavaScript để xử lý sự kiện click
document.addEventListener('DOMContentLoaded', function () {
    // Tìm phần tử có onclick="myFunction()"
    var shoesElement = document.querySelector('a[onclick="myFunction()"]');

    // Định nghĩa hàm myFunction để hiển thị hoặc ẩn #nav
    window.myFunction = function (event) {
        // Ngăn chặn hành vi mặc định của liên kết
        event.preventDefault();

        var nav = document.getElementById('nav');
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    };

    // Gắn sự kiện click vào shoesElement
    shoesElement.addEventListener('click', myFunction);
});