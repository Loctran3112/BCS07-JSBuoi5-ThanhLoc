// console.log("đây là bài tập JS buổi 5")
/* Bài 1: Quản lý tuyển sinh
+ Đề bài: Trong kỳ thi tuyển, 1 thí sinh sẽ trúng tuyển nếu có điểm tổng kết lớn hơn hoặc bằng điểm chuẩn và không có môn nào điểm 0.
    -Điểm tổng kết là tổng điểm của 3 môn thi và điểm ưu tiên.
    -Điểm ưu tiên bao gồm điểm ưu tiên theo khu vực và điểm ưu tiên theo đối tượng.
Viết chương trình nhập: điểm chuẩn của hội đồng,điểm 3 môn thi của thí sinh,khu vực và đối tượng dự thi.Cho biết thí sinh đó đậu hay rớt và tổng số điểm đạt được. 
Mô hình 3 khối:
-Input: Cho điểm tổng các môn là 28 điểm,
-Bước xử lí:
-Output:
*/
var sinhVien = {
    // key : value
    diemChuan: 28,
    khuVucA: 2,
    khuVucB: 1.5,
    khuVucC: 0.5,
    doiTuongMot: 2.5,
    doiTuongHai: 1.5,
    doiTuongBa: 1,
}
function diemTongBaMon() {
    var diemToan = document.getElementById("monToan").value * 1;
    var diemVan = document.getElementById("monVan").value * 1;
    var diemHoa = document.getElementById("monHoa").value * 1;
    var diemThiBaMon = diemToan + diemVan + diemHoa;
    // var khuVuc;
    // var diemKhuVuc = document.getElementById("khuVuc").value * 1;
    // if (khuVuc <= sinhVien.khuVucA) {
    //     khuVuc = 2;
    // } else { khuVuc = 1.5; };

    // var diemDoiTuong = document.getElementById("doiTuong").value * 1;
    // var doiTuong;
    // if (doiTuong <= sinhVien.doiTuongMot) {
    //     doiTuong = 2.5;
    // } else { doiTuong = 1.5; };

    var diemTongKet = diemThiBaMon + khuVuc + doiTuong;
    console.log(diemTongKet);
    if (diemTongKet >= diemChuan) {
        document.querySelector(".text-black").innerHTML = "Đậu";
    } else {
        document.querySelector(".text-black").innerHTML = "Rớt";
    }
}


/* Bài 2: Tính tiền điện
Viết chương trình nhập vào thông tin tiêu thụ điện (Tên,Số Kw)
Tính và xuất ra tiền trả theo quy tắc:
    - 50kw đầu : 500đ/kw
    - 50kw kế : 650đ/kw
    - 100kw kế : 850đ/kw
    - 150kw kế : 1100đ/kw
    - Còn lại: 1300đ/kw
Mô hình 3 khối:
-Input:
-Bước xử lí:
-Output:
*/
/* Bài 3: Tính thuế thu nhập cá nhân
+ Viết chương trình nhập vào thông tin của 1 cá nhân ( Họ tên,tổng thu nhập năm,số người phụ thuộc). Tính và xuất thuế thu nhập cá nhân phải trả theo quy định sau: Thu nhập chịu thuế = Tổng thu nhập năm - 4tr - Số người phụ thuộc * 1.6tr
+ Mô hình 3 khối:
-Input: thu nhập năm
-Bước xử lí: tính thu nhập chịu thuế
-Output: thuế thu nhập cá nhân
*/
// const number = 100000000;
// console.log(new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(thuNhap));
// var arr = {
//     hoTen = "";
//     tongThuNhap =
// }
// function thuNhapSauThue() {
//     var hoTen = document.getElementById("hoTen").value;
//     var thuNhapNam = document.getElementById("thuNhapNam").value * 1;
//     var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
//     var thuNhap = thuNhapNam - 4000 - nguoiPhuThuoc * 1.6;
// }


/* Bài 4: Tính tiền cáp: 
+ Viết chương trình hóa đơn khách hàng cho 1 công ty cáp. Có 2 loại khách hàng: Nhà dân và Doanh Nghiệp. Có 2 mức giá tiền cáp: 
    - Nhà dân: 
        Phí xử lý hóa đơn: 4.5$
        Phí dịch vụ cơ bản: 20.5$
        Thuê kênh cao cấp : 7.5/kênh
    - Doanh nghiệp: 
        Phí xử lý hóa đơn: 15$
        Phí dịch vụ cơ bản: 75$ cho tổng 10 kết nối đầu, mỗi kết nối thêm 5$/ kết nối
        Thuê kênh cao cấp : 50/kênh
Chương trình cho phép nhập vào mã khách hàng, loại khách hàng,số kết nối,số kênh cao cấp. Nếu chọn loại khách hàng là doanh nghiệp số kết nối sẽ hiện lên, nếu loại khách hàng là Nhà Dân ô kết nối sẽ ẩn đi
*/
