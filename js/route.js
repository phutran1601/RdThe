// var imlocation = "/image/";
// var currentdate = 0;
// var image_number = 0;
// // image = new ImageArray(5);
// // image[0] = "1.png";
// // image[1] = "10.png";
// // image[2] = "100.png";
// // image[4] = "101.png";
// // image[5] = "102.png";
// var image = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, , 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, , 122, 123, 124, 125, 126, 127, 128, 129, 130, 132, 133, 134, 135];
// var rand = 60 / image.length;
// function randomimage() {
//     var randomimage = image[Math.floor(Math.random() * image.length)];
//     return randomimage;
// }


// document.write("<img src='" + imlocation + randomimage() + ".png" + "'>");
// document.write("<img src='" + imlocation + randomimage() + ".png" + "'>");

var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
    $scope.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 132, 133, 134];
    // Lấy dữ liệu từ gile json
    // $http.get("/db/db.json").then(function (response) {
    //     $scope.items = response.data;
    //     $scope.pageCount = Math.ceil($scope.items.length / $scope.pageSize);
    // });
    // hàm random

    $scope.random = function () {
        do {
            $scope.imgrd = [];
            var randomimage = Math.floor(Math.random() * $scope.items.length);
            if (randomimage != 0) {

                $scope.imgrd[0] = randomimage;
            }
        } while (randomimage == 0);

        return $scope.imgrd;
    }

    // //Tính Tổng
    // $scope.tongtien = 0;
    // $scope.TinhTong = function () {
    //     $scope.tongtien = 0;
    //     //duyệt ds các mặt hành và tính tiền các mặt hàng đã chọn
    //     $scope.items.forEach((x) => {
    //         if (x.checked == true) {
    //             if (x.soluong == 0) x.soluong++;
    //             $scope.tongtien += x.price * x.soluong;
    //         } else {
    //             x.soluong = 0;
    //         }
    //     });
    // };
    // //End Tính Tổng
    // //Sắp xếp
    // $scope.reverse = false;
    // $scope.col_name = "sprice";
    // $scope.SortBy = function (str) {
    //     $scope.col_name = str;
    //     if ($scope.reverse) {
    //         $scope.reverse = false;
    //     } else {
    //         $scope.reverse = true;
    //     }
    // };
    // //End sắp xếp
    // //Page
    // $scope.pageSize = 6;
    // $scope.begin = 0;
    // //Số trang
    // $scope.pageCount = Math.ceil($scope.items.length / $scope.pageSize);
    // //...
    // $scope.first = function () {
    //     $scope.begin = 0;
    // };
    // $scope.previous = function () {
    //     if ($scope.begin > 0) $scope.begin -= 6;
    // };
    // $scope.next = function () {
    //     if ($scope.begin < $scope.items.length - 6) $scope.begin += 6;
    // };
    // $scope.last = function () {
    //     $scope.begin = ($scope.pageCount - 1) * $scope.pageSize;
    // };
    // //End Số trang
    // //product
    // $scope.product_detail = $scope.items[0];
    // $scope.product = function (x) {
    //     $scope.product_detail = $scope.items[x];
    // };
});
