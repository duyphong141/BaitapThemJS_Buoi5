//! Bài tập 1: Tính thuế thu nhập cá nhân
document.getElementById('btnThue').onclick = function () {
    var hoTen = document.getElementById('hoTen').value;
    var tongThuNhap = Number(document.getElementById('tongThuNhap').value);
    var nguoiPhuThuoc = Number(document.getElementById('nguoiPhuThuoc').value);

    var thuNhapChiuThue = 0;
    var thueTNCN = 0;
    var ketQua = '';

    if (tongThuNhap <= 4e+6) {
        alert('Số tiền thu nhập không hợp lệ');
    } else {
        thuNhapChiuThue = tongThuNhap - 4e+6 - nguoiPhuThuoc * 1.6e+6;
        // console.log(1.6e+6.toLocaleString())
        if (thuNhapChiuThue <= 60e+6) {
            thueTNCN = thuNhapChiuThue * 5 / 100
        } else if (thuNhapChiuThue <= 120e+6) {
            thueTNCN = thuNhapChiuThue * 10 / 100
        } else if (thuNhapChiuThue <= 210e+6) {
            thueTNCN = thuNhapChiuThue * 15 / 100
        } else if (thuNhapChiuThue <= 384e+6) {
            thueTNCN = thuNhapChiuThue * 20 / 100
        } else if (thuNhapChiuThue <= 624e+6) {
            thueTNCN = thuNhapChiuThue * 25 / 100
        } else if (thuNhapChiuThue <= 960e+6) {
            thueTNCN = thuNhapChiuThue * 30 / 100
        } else {
            thueTNCN = thuNhapChiuThue * 35 / 100
        }
        ketQua = 'Họ tên: ' + hoTen + '; Tiền thuế thu nhập cá nhân: ' + thueTNCN.toLocaleString() + ' VND';
    }
    document.getElementById('hienThiTienThue').innerHTML = ketQua;
}


//! Tính tiền cáp
document.getElementById('btnTienCap').onclick = function() {
    var khachHang = document.getElementById('khachHang').value;
    var maKH = document.getElementById('maKH').value;
    var soKenh = document.getElementById('soKenh').value;
    var soKetNoi = document.getElementById('soKetNoi').value;

    var phiXuLyHoaDon = 0;
    var phiDichVuCoBan = 0;
    var thueKenhCaoCap = 0;
    var tienCap = 0;
    var ketQua = '';

    if (khachHang == 'nhaDan') {
        phiXuLyHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        thueKenhCaoCap = 7.5;
        tienCap = phiXuLyHoaDon + phiDichVuCoBan + thueKenhCaoCap * soKenh;
    } else if (khachHang == 'doanhNghiep') {
        phiXuLyHoaDon = 15;
        if (soKetNoi <= 10) {
            phiDichVuCoBan = 75;
        } else {
            phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
        }
        thueKenhCaoCap = 50;
        tienCap = phiXuLyHoaDon + phiDichVuCoBan + thueKenhCaoCap * soKenh;
    } else {
        alert('Hãy chọn loại khách hàng');
    }
    
    ketQua = 'Mã khách hàng: ' + maKH + '; Tiền cáp: ' + '$' + tienCap.toLocaleString(); 

    document.getElementById('hienThiTienCap').innerHTML = ketQua;

}

function anHien() {
    var khachHang = document.getElementById('khachHang').value;
    if (khachHang == 'nhaDan' || khachHang == 'chonLoaiKH') {
        document.getElementById('soKetNoi').style.display = 'none';
    } 
    
    if (khachHang == 'doanhNghiep') {
        document.getElementById('soKetNoi').style.display = 'block';
    }
}